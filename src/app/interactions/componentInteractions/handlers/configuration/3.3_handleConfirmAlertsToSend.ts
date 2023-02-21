import { updateDiscordRolesCirclesAlerts } from '@api/updateDiscordRolesCirclesAlerts';
import { ComponentActionRow, ComponentContext, ComponentSelectMenu } from 'slash-create';
import { sleep } from 'src/app/utils/sleep';
import { disableAllComponents } from '../common';
import { getUniqueAlertKeys } from './3.2_handleAlertsToSend';
import { handleFinalMessage } from './4_handleFinalMessage';
import { getAlertsText } from 'src/app/service/components';

/**
 * Confirm alerts to send handler
 * @param ctx the component context
 */
export async function handleConfirmAlertsToSend(ctx: ComponentContext) {
	await ctx.editParent({ components: disableAllComponents(ctx) });
	
	await ctx.defer();

	const actionRow = ctx.message.components[0] as ComponentActionRow;
	const select = actionRow.components[0] as ComponentSelectMenu;

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
