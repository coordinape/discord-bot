import { ButtonStyle,
	CommandContext,
	ComponentType,
	ComponentActionRow,
} from 'slash-create';
import Log from '../utils/Log';
import { getLinkingComponents } from './components';
import { getChangeRoleSelect } from './components/getChangeRoleSelect';
import { getConfigureComponents } from './components/getConfigureComponents';
import { DiscordService } from './DiscordService';
import { CallbackComponent, CallbackComponentsWithActionRows } from './types';

export class ServiceSupport {
	private _ctx: CommandContext;
	private _client: DiscordService;

	constructor(ctx: CommandContext) {
		this._ctx = ctx;
		this._client = new DiscordService(ctx);
	}

	async getCallbackComponentsWithRows(): Promise<CallbackComponentsWithActionRows> {
		const componentActionRows: ComponentActionRow[] = [];
		const callbackComponents: CallbackComponent[] = [];

		const linkComponents = await getLinkingComponents(this._ctx);
		componentActionRows.push({ type: ComponentType.ACTION_ROW, components: linkComponents.map(({ component }) => component) });
		callbackComponents.push(...linkComponents);
		
		const assignComponents = await getChangeRoleSelect();
		componentActionRows.push({ type: ComponentType.ACTION_ROW, components: assignComponents.map(({ component }) => component) });
		callbackComponents.push(...assignComponents);
		
		const configComponents = await getConfigureComponents();
		componentActionRows.push({ type: ComponentType.ACTION_ROW, components: configComponents.map(({ component }) => component) });
		callbackComponents.push(...configComponents);

		return { componentActionRows, callbackComponents };
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
}
