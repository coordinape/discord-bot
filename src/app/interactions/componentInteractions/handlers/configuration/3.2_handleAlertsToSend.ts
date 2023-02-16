import { ButtonStyle, ComponentButton, ComponentContext, ComponentSelectMenu, ComponentSelectOption, ComponentType } from 'slash-create';
import { disableAllComponents } from '../common';

export const ALERT_HANDLER_INTERACTIONS = {
	Select: 'ALERTS_STRING_SELECT',
};

const OPTIONS: ComponentSelectOption[] = [
	{ label: 'Epoch Start', value: 'epoch-start' },
	{ label: 'Epoch End', value: 'epoch-end' },
	{ label: 'Nomination', value: 'nomination' },
	{ label: 'Vouch', value: 'vouch' },
	{ label: 'Vouch Successful', value: 'vouch-successful' },
	{ label: 'Vouch Unsuccessful', value: 'vouch-unsuccessful' },
	{ label: 'User Added to Circle', value: 'user-added' },
	{ label: 'User Leaves Circle', value: 'user-removed' },
	{ label: 'User Opts Out', value: 'user-opts-out' },
];

export const buildAlertsSelect = ({ options }: {options?: ComponentSelectOption[]}): ComponentSelectMenu => ({
	type: ComponentType.STRING_SELECT,
	options,
	placeholder: 'Select the alerts you\'d like me to send, if any',
	custom_id: ALERT_HANDLER_INTERACTIONS.Select,
	min_values: 0,
	max_values: OPTIONS.length,
});

export const ALERTS_SELECT_CONFIRM_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	label: 'Confirm',
	custom_id: 'ALERTS_SELECT_CONFIRM_BUTTON',
	style: ButtonStyle.SUCCESS,
	disabled: true,
};

export const ALERTS_SELECT_CANCEL_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	label: 'Cancel',
	custom_id: 'ALERTS_SELECT_CANCEL_BUTTON',
	style: ButtonStyle.DESTRUCTIVE,
};

/**
 * Alerts to send
 * @param ctx the component context
 */
export async function handleAlertsToSend(ctx: ComponentContext) {
	await ctx.editParent({ components: disableAllComponents(ctx) });

	const selectComponent = buildAlertsSelect({ options: OPTIONS });
	
	await ctx.send({
		content: 'What Alerts would you like me to send?',
		components: [
			{ type: ComponentType.ACTION_ROW, components: [selectComponent] },
			{ type: ComponentType.ACTION_ROW, components: [ALERTS_SELECT_CONFIRM_BUTTON, ALERTS_SELECT_CANCEL_BUTTON] },
		],
	});
}
