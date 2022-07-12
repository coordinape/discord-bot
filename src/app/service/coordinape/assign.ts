import {
	CommandContext,
	ComponentType,
	TextInputStyle,
} from 'slash-create';

import Log from '../../utils/Log';

export async function assignCommand(ctx: CommandContext): Promise<any> {
	try {
		// TODO fetch the circles that the user admins and put them into a select
		// If the circles that the user admins are more than 5, ask for the user 
		// to write the circle name instead (bc select menus allow for a max of 5 optns) 
		await ctx.sendModal(
			{
				title: 'Role <-> Circle Assignment',
				components: [
					{
						type: ComponentType.ACTION_ROW,
						components: [
							{
								type: ComponentType.TEXT_INPUT,
								label: 'Discord role ID?',
								style: TextInputStyle.SHORT,
								custom_id: 'discord_role_id',
								placeholder: 'Insert Discord Role ID',
							},
						],
					},
					{
						type: ComponentType.ACTION_ROW,
						components: [
							{
								type: ComponentType.TEXT_INPUT,
								label: 'Circle name?',
								style: TextInputStyle.SHORT,
								custom_id: 'circle_name',
								placeholder: 'Insert circle name',
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