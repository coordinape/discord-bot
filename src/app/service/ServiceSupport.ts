import { Collection, GuildBasedChannel, Role } from 'discord.js';
import { ButtonStyle,
	CommandContext,
	ComponentType,
	ComponentActionRow,
	AnyComponentButton,
	ComponentContext,
} from 'slash-create';
import { Discord_Users } from '../api/graphql/gql/graphql';
import Log from '../utils/Log';
import { DiscordService } from './DiscordService';

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
			style: ButtonStyle.LINK,
			label: 'LINK',
			url: 'http://coordinape.com',
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
			const callback = async ({ customID }: ComponentContext) => this._ctx.send(`You selected: ${customID}`);
			const onExpire = () => this._ctx.send('You cannot use that component anymore. Please run the command again.');
			this._ctx.registerComponent('LINK_BUTTON', callback, 5000, onExpire);
			this._ctx.registerComponent('UNLINK_BUTTON', callback, 5000, onExpire);
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
