import { getDiscordRolesCirclesAlerts } from '@api/getDiscordRolesCirclesAlerts';
import { ComponentContext, ComponentSelectOption, ComponentType } from 'slash-create';
import Log from 'src/app/utils/Log';
import { disableAllParentComponents } from '../common';
import { errorMessageOptions } from '../common/errorMessageOptions';
import { ALERTS_SELECT_CANCEL_BUTTON, ALERTS_SELECT_CONFIRM_BUTTON, ALERTS, buildAlertsSelect, isValidAlert, ALERT_OPTIONS } from './handleAlertsToSend';

export async function handleLinkedCircleAlertsUpdate(ctx: ComponentContext): Promise<void> {
	try {
		await disableAllParentComponents(ctx);
	
		const { alerts } = await getDiscordRolesCirclesAlerts({ channelId: ctx.channelID });
	
		const currentAlerts = Object.entries(alerts || {});
	
		let options = [];
	
		if (currentAlerts.length === 0) {
			options = ALERT_OPTIONS;
		} else {
			options = currentAlerts.reduce((acc, [key, value]) => {
				if (!isValidAlert(key)) {
					return acc;
				}
		
				const option = { label: ALERTS[key], value: key, default: !!value };
		
				acc.push(option);
		
				return acc;
			}, [] as ComponentSelectOption[]);
		}
	
		const selectComponent = buildAlertsSelect({ options });
		
		await ctx.send({
			content: 'What Alerts would you like me to send?',
			components: [
				{ type: ComponentType.ACTION_ROW, components: [selectComponent] },
				{ type: ComponentType.ACTION_ROW, components: [ALERTS_SELECT_CONFIRM_BUTTON, ALERTS_SELECT_CANCEL_BUTTON] },
			],
			ephemeral: true,
		});
	} catch (error) {
		await ctx.send(errorMessageOptions({ handlerName: 'handleLinkedCircleAlertsUpdate', error }));
		Log.error(error);
	}
}
