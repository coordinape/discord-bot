import { pluralize } from 'src/app/server/utils/pluralize';
import { ALERTS, getUniqueAlertKeys } from '../configuration';

export function getAlertsText({ activeAlerts, inactiveAlerts }: ReturnType<typeof getUniqueAlertKeys>) {
	let text = '';

	if (activeAlerts.length === 0) {
		text += 'No Active Alerts for this Circle\n';
	} else {
		text += `${pluralize({ noun: 'Active Alert', count: activeAlerts.length })} for this Circle\n> ${activeAlerts.map((key) => ALERTS[key]).join(', ')}\n`;
	}

	if (inactiveAlerts.length === 0) {
		text += '\nNo Inactive Alerts for this Circle';
	} else {
		text += `\n${pluralize({ noun: 'Inactive Alert', count: inactiveAlerts.length })} for this Circle\n> ${inactiveAlerts.map((key) => ALERTS[key]).join(', ')}`;
	}

	return text;
}
