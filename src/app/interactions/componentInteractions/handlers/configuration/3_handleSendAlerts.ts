import { ButtonStyle, ComponentButton, ComponentContext, ComponentType } from 'slash-create';
import { CustomId } from 'src/app/interactions/customId';
import Log from 'src/app/utils/Log';

export const YES_SEND_ALERTS_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	style: ButtonStyle.PRIMARY,
	label: 'Yes please',
	custom_id: CustomId.AllowAlertsButton,
};

export const NO_SEND_ALERTS_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	style: ButtonStyle.SECONDARY,
	label: 'No thanks',
	custom_id: CustomId.Skip,
};

/**
 * Handle send alerts based on Circle activity
 * @param ctx the component context
 */
export async function handleSendAlerts(ctx: ComponentContext): Promise<void> {
	try {
		await ctx.send({
			content: 'Do you want me to send alerts based on Circle activity?',
			components: [{ type: ComponentType.ACTION_ROW, components: [YES_SEND_ALERTS_BUTTON, NO_SEND_ALERTS_BUTTON] }],
		});
	} catch (error) {
		await ctx.send(`Something is wrong, please try again or contact coordinape: [handleSendAlerts] ${error}`);
		Log.error(error);
	}
}
