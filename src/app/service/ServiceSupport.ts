/* eslint-disable no-console */
import { Collection, GuildBasedChannel, Role } from 'discord.js';
import { ButtonStyle,
	CommandContext,
	ComponentType,
	ComponentActionRow,
	AnyComponentButton,
	ComponentContext,
} from 'slash-create';
import Log from '../utils/Log';
import { DiscordService } from './DiscordService';

import { Chain, Subscription } from '../api/zeus';

const OAUTH2_URL = 'https://discord.com/api/oauth2/authorize?client_id=1031475126652383282&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdiscord%2Flink&response_type=code&scope=identify';

export class ServiceSupport {
	private _ctx: CommandContext;
	private _client: DiscordService;

	constructor(ctx: CommandContext) {
		this._ctx = ctx;
		this._client = new DiscordService(ctx);
	}

	async ephemeralError({ msg }: {msg?: string}): Promise<void> {
		const row: ComponentActionRow = {
			type: ComponentType.ACTION_ROW,
			components: [{ type: ComponentType.BUTTON, style: ButtonStyle.LINK, label: 'Support', url: 'https://discord.coordinape.com/' }],
		};
		try {
			await this._ctx.send({
				content: msg ?? 'Something is not working. Please reach out to us and a support member will happily assist!',
				ephemeral: true,
				components: [row],
			});
		} catch (e) {
			Log.error(e);
		}
	}

	async ephemeralWebsite({ label, url, content }: {label: string, url: string; content: string}): Promise<void> {
		const row: ComponentActionRow = {
			type: ComponentType.ACTION_ROW,
			components: [{ type: ComponentType.BUTTON, style: ButtonStyle.LINK, label, url }],
		};
		try {
			await this._ctx.send({ content, ephemeral: true, components: [row] });
		} catch (e) {
			Log.error(e);
		}
	}

	async ephemeralText({ text }: {text: string}): Promise<void> {
		try {
			await this._ctx.send({ ephemeral: true, content: text });
		} catch (e) {
			Log.error(e);
		}
	}

	async link(discordUsers: { user_snowflake: string; }[]): Promise<void> {
		const isLinked = discordUsers.length > 0;

		if (discordUsers.length > 1) {
			throw new Error('Something is wrong, please contact coordinape');
		}

		/**
		 * Link buttons must have a `url`, and cannot have a `custom_id`
		 * Link buttons do not send an interaction to your app when clicked
		 * 
		 * https://discord.com/developers/docs/interactions/message-components#button-object-button-structure
		 */
		const LINK_BUTTON: AnyComponentButton = {
			type: ComponentType.BUTTON,
			style: ButtonStyle.PRIMARY,
			label: 'LINK',
			custom_id: 'LINK_BUTTON',
			disabled: isLinked,
		};

		const UNLINK_BUTTON: AnyComponentButton = {
			type: ComponentType.BUTTON,
			style: ButtonStyle.DESTRUCTIVE,
			label: 'UNLINK',
			custom_id: 'UNLINK_BUTTON',
			disabled: !isLinked,
		};

		const components: ComponentActionRow[] = [
			{
				type: ComponentType.ACTION_ROW,
				components: [...(isLinked ? [UNLINK_BUTTON] : [LINK_BUTTON])],
			},
		];
		try {
			await this._ctx.defer();
			await this._ctx.send('Link discord/coordinape', { components });

			const chain = Chain('http://localhost:8080/v1/graphql', {
				headers: {
					'x-hasura-admin-secret': 'admin-secret',
				},
			});

			const wsChain = Subscription('ws://localhost:8080/v1/graphql', {
				get headers() {
					return { 'x-hasura-admin-secret': 'admin-secret' };
				},
			});

			this._ctx.registerComponent('LINK_BUTTON', async (ctx: ComponentContext) => {
				try {
					const onDiscordUsers = wsChain('subscription')({
						discord_users: [
							{ where: { user_snowflake: { _eq: ctx.user.id } } },
							{ user_snowflake: true },
						],
					});
					onDiscordUsers.on(async ({ discord_users }) => {
						if (discord_users.find(({ user_snowflake }) => user_snowflake === ctx.user.id)) {
							await ctx.send({ content: `<@${ctx.user.id}>, you've been linked successfully!` });
							onDiscordUsers.ws.close();
						}
					});
					await ctx.send({
						embeds: [{
							title: 'Click here to link coordinape',
							url: OAUTH2_URL,
						}],
					});
				} catch (error) {
					await ctx.send({ content: 'Failed to link. Please run the command again' });
					Log.error(error);
				}
			});
			this._ctx.registerComponent('UNLINK_BUTTON', async (ctx: ComponentContext) => {
				try {
					const { delete_discord_users } = await chain('mutation')({
						delete_discord_users: [
							{ where: { user_snowflake: { _eq: ctx.user.id } } },
							{ affected_rows: true },
						],
					});
					
					if (delete_discord_users) {
						const isDiscordUserDeleted = delete_discord_users.affected_rows === 1;
						await ctx.send({ content: isDiscordUserDeleted ? `<@${ctx.user.id}>, you've been unlinked successfully!` : 'Failed to unlink' });
					}
				} catch (error) {
					await ctx.send({ content: 'Failed to unlink. Please run the command again' });
					Log.error(error);
				}
			});
		} catch (error) {
			Log.log(error);
		}
	}

	async channels(): Promise<GuildBasedChannel[] | undefined> {
		return this._client.channels;
	}

	async roles(): Promise<Collection<string, Role> | undefined> {
		return this._client.roles;
	}
}
