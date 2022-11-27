import { Collection, GuildBasedChannel, Role } from 'discord.js';
import { ButtonStyle,
	CommandContext,
	ComponentType,
	ComponentActionRow,
} from 'slash-create';
import Log from '../utils/Log';
import { getAssignationComponents, getLinkingComponents } from './components';
import { DiscordService } from './DiscordService';
import { CallbackComponentsWithActionRows } from './types';

export class ServiceSupport {
	private _ctx: CommandContext;
	private _client: DiscordService;

	constructor(ctx: CommandContext) {
		this._ctx = ctx;
		this._client = new DiscordService(ctx);
	}

	async getCallbackComponentsWithRows(): Promise<CallbackComponentsWithActionRows> {
		const componentActionRows: ComponentActionRow[] = [];

		const linkComponents = await getLinkingComponents(this._ctx);
		componentActionRows.push({ type: ComponentType.ACTION_ROW, components: linkComponents.map(({ component }) => component) });

		const assignComponents = await getAssignationComponents({ client: this._client });
		componentActionRows.push({ type: ComponentType.ACTION_ROW, components: assignComponents.map(({ component }) => component) });

		return {
			componentActionRows,
			callbackComponents: [...linkComponents, ...assignComponents],
		};
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
