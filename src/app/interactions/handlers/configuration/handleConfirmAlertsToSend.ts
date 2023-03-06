import { updateDiscordRolesCirclesAlerts } from '@api/updateDiscordRolesCirclesAlerts';
import { ComponentActionRow, ComponentContext, ComponentSelectMenu } from 'slash-create';
import Log from 'src/app/utils/Log';
import { sleep } from 'src/app/utils/sleep';
import { disableAllParentComponents, getAlertsText } from '../common';
import { errorMessageOptions } from '../common/errorMessageOptions';
import { getUniqueAlertKeys } from './handleAlertsToSend';
import { handleFinalMessage } from './handleFinalMessage';

/**
 * Confirm alerts to send handler
 * @param ctx the component context
 */
export async function handleConfirmAlertsToSend(ctx: ComponentContext) {
	try {
		await disableAllParentComponents(ctx);
		
		const actionRow = ctx.message.components[0] as ComponentActionRow;
		const select = actionRow.components[0] as ComponentSelectMenu;
		
		if (!select.options) {
			await ctx.send({
				content: 'No options selected',
				ephemeral: true,
			});
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
			throw new Error('Failed to update alerts to send');
		}
	
		const uniqueAlertKeys = getUniqueAlertKeys(alerts);
		
		await ctx.send({
			content: getAlertsText(uniqueAlertKeys),
			ephemeral: true,
		});
	
		// Just to improve message flow
		await sleep(3000);
			
		// TODO Phase 2
		// return handleFrequencyOfAlertsToSend(ctx);
	
		await handleFinalMessage(ctx);
	} catch (error) {
		await ctx.send(errorMessageOptions({ handlerName: 'handleConfirmAlertsToSend', error }));
		Log.error(error);
	}
}
