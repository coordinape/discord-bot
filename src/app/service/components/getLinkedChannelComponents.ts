import { getDiscordRolesCirclesAlerts } from '@api/getDiscordRolesCirclesAlerts';
import { AnyComponentButton, ComponentType, ButtonStyle, ComponentContext, ComponentButton } from 'slash-create';
import { ALERTS, getUniqueAlertKeys } from 'src/app/interactions/componentInteractions/handlers';
import { disableAllComponents } from 'src/app/interactions/componentInteractions/handlers/common';
import { CustomId } from 'src/app/interactions/customId';
import { pluralize } from 'src/app/server/utils/pluralize';
import { CallbackComponent } from '../types';

export const LINKED_CHANNEL_ALERTS_UPDATE_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	style: ButtonStyle.PRIMARY,
	label: 'Update',
	custom_id: CustomId.LinkedChannelAlertsUpdateButton,
};

export const LINKED_CHANNEL_ALERTS_CANCEL_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	style: ButtonStyle.DESTRUCTIVE,
	label: 'Cancel',
	custom_id: CustomId.LinkedChannelAlertsCancelButton,
};

export async function getLinkedChannelComponents(): Promise<CallbackComponent[]> {
	const UPDATE_ALERTS_BUTTON: AnyComponentButton = {
		type: ComponentType.BUTTON,
		style: ButtonStyle.SUCCESS,
		label: 'ALERTS',
		custom_id: CustomId.LinkedChannelAlertsButton,
	};

	const components = [UPDATE_ALERTS_BUTTON];

	const CALLBACKS = {
		[UPDATE_ALERTS_BUTTON.custom_id]: async (ctx: ComponentContext) => {
			await ctx.editParent({ components: disableAllComponents(ctx) });

			const { alerts } = await getDiscordRolesCirclesAlerts({ channelId: ctx.channelID });

			if (!alerts || Object.keys(alerts).length === 0) {
				await ctx.send({
					content: ('You are not receiving any alerts.'),
					components: [{ type: ComponentType.ACTION_ROW, components: [LINKED_CHANNEL_ALERTS_UPDATE_BUTTON, LINKED_CHANNEL_ALERTS_CANCEL_BUTTON] }],
				});
				return;
			}

			const uniqueAlertKeys = getUniqueAlertKeys(alerts);
			
			await ctx.send({
				content: getAlertsText(uniqueAlertKeys),
				components: [{ type: ComponentType.ACTION_ROW, components: [LINKED_CHANNEL_ALERTS_UPDATE_BUTTON, LINKED_CHANNEL_ALERTS_CANCEL_BUTTON] }],
			});
		},
	};

	return components.map(component => ({ component, callback: CALLBACKS[component.custom_id] }));
}

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