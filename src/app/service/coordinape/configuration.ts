import {
	CommandContext,
	ComponentType,
	TextInputStyle,
} from 'slash-create';

import Log from '../../utils/Log';

export async function configurationCommand(ctx: CommandContext): Promise<any> {
	try {
		await ctx.sendModal(
			{
				title: 'Bot Configuration',
				components: [
					{
						type: ComponentType.ACTION_ROW,
						components: [
							// TODO change to channel name
							{
								type: ComponentType.TEXT_INPUT,
								label: 'Which channel to send Epoch alerts to?',
								style: TextInputStyle.SHORT,
								custom_id: 'channel_alerts',
								placeholder: 'Insert channel ID',
							},
						],
					},
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
			// TODO send ephemeral message with the inserted inputs
			(mctx) => {
				mctx.send(`Your input: ${mctx.values.text_input}\nYour long input: ${mctx.values.long_text_input}`);
			},
		).catch(Log.error);
	} catch (e) {
		Log.error(e);
	}
}