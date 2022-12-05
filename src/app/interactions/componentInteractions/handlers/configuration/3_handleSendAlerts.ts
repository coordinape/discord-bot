import { ButtonStyle, ComponentButton, ComponentContext, ComponentType } from 'slash-create';

export const YES_SEND_ALERTS_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	style: ButtonStyle.PRIMARY,
	label: 'Yes please',
	custom_id: 'YES_SEND_ALERTS_BUTTON',
};

export const NO_SEND_ALERTS_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	style: ButtonStyle.SECONDARY,
	label: 'No thanks',
	custom_id: 'NO_SEND_ALERTS_BUTTON',
};

/**
 * Handle send alerts based on Circle activity
 * @param message the component context
 */
export async function handleSendAlerts(message: ComponentContext) {
	return message.send({
		content: 'Do you want me to send alerts based on Circle activity?',
		components: [{ type: ComponentType.ACTION_ROW, components: [YES_SEND_ALERTS_BUTTON, NO_SEND_ALERTS_BUTTON] }],
	});
}
