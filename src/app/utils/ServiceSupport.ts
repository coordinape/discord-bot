import { ButtonStyle,
	CommandContext,
	ComponentType,
	ComponentActionRow,
} from 'slash-create';
import Log from './Log';

export const serviceSupport = {
	ephemeralError: async (ctx: CommandContext, msg?: string): Promise<any> => {
		const row: ComponentActionRow = {
			type: ComponentType.ACTION_ROW,
			components: [{
				type: ComponentType.BUTTON,
				style: ButtonStyle.LINK,
				label: 'Support',
				url: 'https://discord.coordinape.com/',
			}],
		};
		try {
			await ctx.send({
				content: msg ? msg : 'Something is not working. Please reach out to us and a support member will happily assist!',
				ephemeral: true,
				components: [row],
			}).catch(Log.error);
		} catch (e) {
			Log.error(e);
		}
	},

	ephemeralWebsite: async (ctx: CommandContext): Promise<any> => {
		const row: ComponentActionRow = {
			type: ComponentType.ACTION_ROW,
			components: [{
				type: ComponentType.BUTTON,
				style: ButtonStyle.LINK,
				label: 'Coordinape on the Web',
				url: 'https://coordinape.com',
			}],
		};
		try {
			await ctx.send({
				content: 'Visit us on the interwebs to access your Circles!',
				ephemeral: true,
				components: [row],
			}).catch(Log.error);
		} catch (e) {
			Log.error(e);
		}
	},
};

export default serviceSupport;