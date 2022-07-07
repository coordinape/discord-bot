import { ButtonStyle,
	CommandContext,
	ComponentType,
	ComponentActionRow,
	TextInputStyle,
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

	configModalIds: async (ctx: CommandContext): Promise<any> => {
		try {
			await ctx.sendModal(
				{
					title: 'Roles and channels configuration',
					components: [
						{
							type: ComponentType.ACTION_ROW,
							components: [
								{
									type: ComponentType.TEXT_INPUT,
									label: 'Which roles can change the bot settings?',
									style: TextInputStyle.SHORT,
									custom_id: 'roles_allow_change_settings',
									placeholder: 'Insert comma separated role IDs',
								},
							],
						},
						{
							type: ComponentType.ACTION_ROW,
							components: [
								{
									type: ComponentType.TEXT_INPUT,
									label: 'Which roles can create a circle?',
									style: TextInputStyle.SHORT,
									custom_id: 'roles_allow_create_circle',
									placeholder: 'Insert comma separated role IDs',
								},
							],
						},
						{
							type: ComponentType.ACTION_ROW,
							components: [
								{
									type: ComponentType.TEXT_INPUT,
									label: 'Which roles for contributors?',
									style: TextInputStyle.SHORT,
									custom_id: 'roles_contributors',
									placeholder: 'Insert comma separated role IDs (leave blank if none)',
									required: false,
								},
							],
						},
						{
							type: ComponentType.ACTION_ROW,
							components: [
								{
									type: ComponentType.TEXT_INPUT,
									label: 'Which channels can the bot message in?',
									style: TextInputStyle.SHORT,
									custom_id: 'roles_allow_bot_message',
									placeholder: 'Insert comma separated channel IDs',
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

	configModalAlerts: async (ctx: CommandContext): Promise<any> => {
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
								// didn't figure out yet how to do that yet
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