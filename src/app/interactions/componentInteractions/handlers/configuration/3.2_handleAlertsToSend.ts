import { ButtonStyle, ComponentButton, ComponentContext, ComponentSelectMenu, ComponentSelectOption, ComponentType } from 'slash-create';
import { CustomId } from 'src/app/interactions/customId';
import { disableAllComponents } from '../common';

export type Alert = keyof typeof ALERTS;

export const ALERTS = {
	['epoch-start']: 'Epoch Start',
	['epoch-end']: 'Epoch End',
	['nomination']: 'Nomination',
	['vouch']: 'Vouch',
	['vouch-successful']: 'Vouch Successful',
	['vouch-unsuccessful']: 'Vouch Unsuccessful',
	['user-added']: 'User Added to Circle',
	['user-removed']: 'User Leaves Circle',
	['user-opts-out']: 'User Opts Out',
};

export const ALERT_ENTRIES = Object.keys(ALERTS).map((key) => ([key, false]));

export function isValidAlert(key: string | Alert): key is Alert {
	return ALERTS[key as Alert] !== undefined;
}

export function getUniqueAlertKeys(alerts: Record<Alert, boolean>) {
	const uniqueAlertKeys = [...new Set([...Object.keys(ALERTS), ...Object.keys(alerts)])];

	return uniqueAlertKeys.reduce((acc, key) => {
		if (isValidAlert(key)) {
			alerts[key] ? acc.activeAlerts.push(key) : acc.inactiveAlerts.push(key);
		}
		return acc;
	}, { activeAlerts: [], inactiveAlerts: [] } as { activeAlerts: Alert[]; inactiveAlerts: Alert[] });
}

export const ALERT_OPTIONS: ComponentSelectOption[] = Object.entries(ALERTS).map(([value, label]) => ({ value, label }));

export const buildAlertsSelect = ({ options }: {options?: ComponentSelectOption[]}): ComponentSelectMenu => ({
	type: ComponentType.STRING_SELECT,
	options,
	placeholder: 'Select the alerts you\'d like me to send, if any',
	custom_id: CustomId.AlertsSelect,
	min_values: 0,
	max_values: ALERT_OPTIONS.length,
});

export const ALERTS_SELECT_CONFIRM_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	label: 'Confirm',
	custom_id: CustomId.AlertsSelectConfirmButton,
	style: ButtonStyle.SUCCESS,
};

export const ALERTS_SELECT_CANCEL_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	label: 'Cancel',
	custom_id: CustomId.Skip,
	style: ButtonStyle.DESTRUCTIVE,
};

/**
 * Alerts to send
 * @param ctx the component context
 */
export async function handleAlertsToSend(ctx: ComponentContext) {
	await ctx.editParent({ components: disableAllComponents(ctx) });

	await ctx.defer();

	const selectComponent = buildAlertsSelect({ options: ALERT_OPTIONS });
	
	await ctx.send({
		content: 'What Alerts would you like me to send?',
		components: [
			{ type: ComponentType.ACTION_ROW, components: [selectComponent] },
			{ type: ComponentType.ACTION_ROW, components: [ALERTS_SELECT_CONFIRM_BUTTON, ALERTS_SELECT_CANCEL_BUTTON] },
		],
	});
}
