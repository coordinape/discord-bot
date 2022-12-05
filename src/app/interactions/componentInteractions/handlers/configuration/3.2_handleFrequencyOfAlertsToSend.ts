import { ButtonStyle, ComponentButton, ComponentContext, ComponentSelectMenu, ComponentSelectOption, ComponentType } from 'slash-create';

const OPTIONS: ComponentSelectOption[] = [
	{ label: 'End of Epoch', value: 'end_of_epoch', default: true },
	{ label: 'Daily during the last 20% of epoch', value: 'daily_during_the_last_20_of_epoch' },
	{ label: 'Every other day the last 20% of epoch', value: 'every_other_day_the_last_20_of_epoch' },
	{ label: 'Daily if there were allocations', value: 'daily_if_there_were_allocations' },
	{ label: 'Epoch 50% complete', value: 'epoch_50_complete' },
	{ label: 'Epoch 80% complete', value: 'epoch_80_complete' },
	{ label: 'Epoch 90% complete', value: 'epoch_90_complete' },
	{ label: 'Beginning and End of Epoch Only', value: 'beginning_and_end_of_epoch_only' },
];

const ALERTS_FREQUENCY_STRING_SELECT: ComponentSelectMenu = {
	type: ComponentType.STRING_SELECT,
	options: OPTIONS,
	placeholder: 'Select the intervals you would like me to send alerts to your Circles for.',
	custom_id: 'ALERTS_FREQUENCY_STRING_SELECT',
	min_values: 0,
	max_values: OPTIONS.length,
};

export const ALERTS_FREQUENCY_SELECT_CONFIRM_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	label: 'Confirm',
	custom_id: 'ALERTS_FREQUENCY_SELECT_CONFIRM_BUTTON',
	style: ButtonStyle.SUCCESS,
};

export const ALERTS_FREQUENCY_SELECT_CANCEL_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	label: 'Cancel',
	custom_id: 'ALERTS_FREQUENCY_SELECT_CANCEL_BUTTON',
	style: ButtonStyle.DESTRUCTIVE,
};

/**
 * Frequency of General Epoch Alerts to send
 * @param message the component context
 */
export async function handleFrequencyOfAlertsToSend(message: ComponentContext) {
	message.defer();
	return message.send({
		content: 'I can set the frequency of General Epoch Alerts.',
		components: [
			{ type: ComponentType.ACTION_ROW, components: [ALERTS_FREQUENCY_STRING_SELECT] },
			{ type: ComponentType.ACTION_ROW, components: [ALERTS_FREQUENCY_SELECT_CONFIRM_BUTTON, ALERTS_FREQUENCY_SELECT_CANCEL_BUTTON] },
		],
	});
}
