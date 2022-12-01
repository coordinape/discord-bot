import { ButtonStyle, ComponentButton, ComponentContext, ComponentSelectMenu, ComponentSelectOption, ComponentType } from 'slash-create';

const OPTIONS: ComponentSelectOption[] = [
	{ label: 'Epoch Summary', value: 'epoch_summary', default: true },
	{ label: 'Epoch Created', value: 'epoch_created' },
	{ label: 'Epoch Start', value: 'epoch_start' },
	{ label: 'Daily Change', value: 'daily_change' },
	{ label: 'Nominations', value: 'nominations' },
	{ label: 'Vouching', value: 'vouching' },
	{ label: 'New Circle Member', value: 'new_circle_member' },
	{ label: 'Member Leaves Circle', value: 'member_leaves_circle' },
	{ label: 'When a user opts out of a circle', value: 'when_a_user_opts_out_of_a_circle' },
];

const ALERTS_STRING_SELECT: ComponentSelectMenu = {
	type: ComponentType.STRING_SELECT,
	options: OPTIONS,
	placeholder: 'Select the alerts you\'d like me to send, if any',
	custom_id: 'ALERTS_STRING_SELECT',
	min_values: 0,
	max_values: OPTIONS.length,
};

export const ALERTS_SELECT_CONFIRM_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	label: 'Confirm',
	custom_id: 'ALERTS_SELECT_CONFIRM_BUTTON',
	style: ButtonStyle.SUCCESS,
};

export const ALERTS_SELECT_CANCEL_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	label: 'Cancel',
	custom_id: 'ALERTS_SELECT_CANCEL_BUTTON',
	style: ButtonStyle.DESTRUCTIVE,
};

/**
 * Alerts to send
 * @param message the component context
 */
export async function handleAlertsToSend(message: ComponentContext) {
	await message.send({
		content: 'What Alerts would you like me to send?',
		components: [
			{ type: ComponentType.ACTION_ROW, components: [ALERTS_STRING_SELECT] },
			{ type: ComponentType.ACTION_ROW, components: [ALERTS_SELECT_CONFIRM_BUTTON, ALERTS_SELECT_CANCEL_BUTTON] },
		],
	});
}
