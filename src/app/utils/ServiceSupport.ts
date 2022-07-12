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

	alerts: async (ctx: CommandContext): Promise<any> => {
		try {
			await ctx.sendModal(
				{
					title: 'Alerts configuration',
					components: [
						{
							type: ComponentType.ACTION_ROW,
							components: [
								{
									type: ComponentType.SELECT,
									custom_id: 'alert_frequency',
									placeholder: 'Alert frequency',
									min_values: 1,
									max_values: 1,
									options: [
										{
											label: 'Off',
											value: 'off',
										},
										{
											label: 'Every day',
											value: 'every_day',
										},
										{
											label: 'Every other day',
											value: 'every_other_day',
										},
										{
											label: 'Every day when there are changes',
											value: 'every_day_changes',
										},
									],
								},
							],
						},
						{
							type: ComponentType.ACTION_ROW,
							components: [
								// TODO disable this if "off" is selected for updates
								// didn't figure out yet how to do that
								{
									type: ComponentType.SELECT,
									custom_id: 'alert_types',
									min_values: 1,
									max_values: 3,
									placeholder: 'Alert types',
									options: [
										{
											label: 'Epoch start/end',
											value: 'epoch_start_end',
										},
										{
											label: 'Nominations/vouches',
											value: 'nominations_vouches',
										},
										{
											label: 'Epoch ending warnings',
											value: 'epoch_end_warning',
										},
									],
								},
							],
						},
					],
				},
				// TODO Answer with a modal with a break-down of all the options inserted. Ask on that modal
				// whether everything is correct. If not, give the user the option to edit.
				(mctx) => {
					mctx.send(`Your input: ${mctx.values.text_input}\nYour long input: ${mctx.values.long_text_input}`);
				},
			).catch(Log.error);
		} catch (e) {
			Log.error(e);
		}
	},
  
};

export default serviceSupport;