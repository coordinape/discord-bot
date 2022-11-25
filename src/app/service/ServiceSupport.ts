import { Collection, GuildBasedChannel, Role } from 'discord.js';
import { ButtonStyle,
	CommandContext,
	ComponentType,
	ComponentActionRow,
} from 'slash-create';
import Log from '../utils/Log';
import { DiscordService } from './DiscordService';
import { getLinkRow } from './rows/getLinkRow';
import { CallbackComponentsWithActionRow } from './types';

export class ServiceSupport {
	private _ctx: CommandContext;
	private _client: DiscordService;

	constructor(ctx: CommandContext) {
		this._ctx = ctx;
		this._client = new DiscordService(ctx);
	}

	async getRows(): Promise<CallbackComponentsWithActionRow[]> {
		const rows: CallbackComponentsWithActionRow[] = [];
		
		try {
			const linkRow = await getLinkRow(this._ctx);
			rows.push({
				componentActionRow: linkRow.componentActionRow,
				callbackComponents: linkRow.callbackComponents,
			});
		} catch (e) {
			Log.error(e);
		}

		return rows;
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

	async channels(): Promise<GuildBasedChannel[] | undefined> {
		return this._client.channels;
	}

	async roles(): Promise<Collection<string, Role> | undefined> {
		return this._client.roles;
	}
}
