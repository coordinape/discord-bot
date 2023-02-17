import { updateDiscordRolesCirclesAlerts } from '@api/updateDiscordRolesCirclesAlerts';
import { ComponentActionRow, ComponentContext, ComponentSelectMenu } from 'slash-create';
import { sleep } from 'src/app/utils/sleep';
import { disableAllComponents } from '../common';
import { ALERTS, getUniqueAlertKeys } from './3.2_handleAlertsToSend';
import { handleFinalMessage } from './4_handleFinalMessage';

/**
 * Confirm alerts to send handler
 * @param ctx the component context
 */
export async function handleConfirmAlertsToSend(ctx: ComponentContext) {
	const actionRow = ctx.message.components[0] as ComponentActionRow;
	const select = actionRow.components[0] as ComponentSelectMenu;
		
	await ctx.editParent({ components: disableAllComponents(ctx) });

	if (!select.options) {
		await ctx.send('No options selected');
		return;
	}

	const alerts = select.options.reduce((acc, alert) => {
		acc[alert.value] = !!alert.default;
		return acc;
	}, {} as Record<string, boolean>);

	const { success, data } = await updateDiscordRolesCirclesAlerts({
		channelId: ctx.channelID,
		alerts,
	});

	if (!success || !data.alerts) {
		await ctx.send('Failed to update alerts to send');
		return;
	}

	const uniqueAlertKeys = getUniqueAlertKeys(alerts);
	
	await ctx.send(getAlertsText(uniqueAlertKeys));

	// Just to improve message flow
	await sleep(3000);
		
	// TODO Phase 2
	// return handleFrequencyOfAlertsToSend(ctx);

	return handleFinalMessage(ctx);
}

function getAlertsText({ activeAlerts, inactiveAlerts }: ReturnType<typeof getUniqueAlertKeys>) {
	let text = '';
	if (Object.keys(activeAlerts).length === 0) {
		text += 'You will no longer be receiving any alerts.';
	} else {
		text += `You will now receive ${activeAlerts.length === 1 ? '1 alert' : `${activeAlerts.length} alerts`}: ${activeAlerts.map((key) => (`\`${ALERTS[key]}\``)).join(', ')}`;
	}

	if (Object.keys(inactiveAlerts).length !== 0) {
		text += `\nYou will NOT receive ${inactiveAlerts.length === 1 ? '1 alert' : `${inactiveAlerts.length} alerts`} alerts: ${inactiveAlerts.map((key) => (`\`${ALERTS[key]}\``)).join(', ')}`;
	}

	return text;
}
