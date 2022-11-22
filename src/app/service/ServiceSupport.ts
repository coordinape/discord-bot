import { Collection, GuildBasedChannel, Role } from 'discord.js';
import { GraphQLClient } from 'graphql-request';
import { ButtonStyle,
	CommandContext,
	ComponentType,
	ComponentActionRow,
	AnyComponentButton,
	ComponentContext,
} from 'slash-create';
import { deleteDiscordUserMutationDocument } from '../api/graphql/deleteDiscordUser';
import { Discord_Users } from '../api/graphql/gql/graphql';
import Log from '../utils/Log';
import { DiscordService } from './DiscordService';

import type { Client } from '../api/generated';
import { createClient, everything } from '../api/generated';

export class ServiceSupport {
	private _ctx: CommandContext;
	private _client: DiscordService;

	constructor(ctx: CommandContext) {
		this._ctx = ctx;
		this._client = new DiscordService(ctx);
	}

	// async init(organizations: GetInitQuery['organizations']) {
	// 	try {
	// 		for (const organization of organizations) {
	// 			const category = await this._client.createCategory({ name: organization.name });
	// 			this._client.createChannel({ name: 'admin', parent: category });

	// 			for (const circle of organization.circles) {
	// 				this._client.createChannel({ name: circle.name, parent: category });
	// 			}
	// 		}
	// 		await this._ctx.send({ ephemeral: true, content: 'Initiated successfully!' });
	// 	} catch (e) {
	// 		Log.error(e);
	// 	}
	// }

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

	async link(discordUsers: Partial<Discord_Users>[]): Promise<void> {
		const isLinked = discordUsers.length > 0;

		if (discordUsers.length > 1) {
			throw new Error('Something is wrong, please contact coordinape');
		}

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
			// FIXME graphql-request doesn't support subscriptions 
			const client = new GraphQLClient('http://localhost:8080/v1/graphql', { headers: {
				'x-hasura-admin-secret': 'admin-secret',
			} });
			const gqlClient: Client = createClient({
				subscription: {
					url: 'ws://localhost:8080/v1/graphql',
					headers: {
						'x-hasura-admin-secret': 'admin-secret',
					},
				},
			});
			this._ctx.registerComponent('LINK_BUTTON', async (ctx: ComponentContext) => {
				try {
					// TODO Complete after the first new result
					const { unsubscribe } = gqlClient.chain.subscription
						.discord_users({ where: { user_snowflake: { _eq: ctx.user.id } } })
						.get({ ...everything })
						.subscribe({
							next: async (data) => {
								await ctx.send({ content: JSON.stringify(data) });
								unsubscribe();
							},
							error: Log.error,
						});
				} catch (error) {
					await ctx.send({ content: JSON.stringify(error) });
					Log.error(error);
				}
			});
			this._ctx.registerComponent('UNLINK_BUTTON', async (ctx: ComponentContext) => {
				try {
					const response = await client.request(deleteDiscordUserMutationDocument, { userSnowflake: ctx.user.id });
					await ctx.send({ content: JSON.stringify(response) });
				} catch (error) {
					Log.error(error);
				}
			});
		} catch (error) {
			Log.log(error);
		}
	}

	async channels(): Promise<GuildBasedChannel[]> {
		return this._client.channels;
	}

	async roles(): Promise<Collection<string, Role>> {
		return this._client.roles;
	}
}
