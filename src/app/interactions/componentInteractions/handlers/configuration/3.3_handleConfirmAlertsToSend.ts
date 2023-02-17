import { updateDiscordRolesCirclesAlerts } from '@api/updateDiscordRolesCirclesAlerts';
import { ComponentActionRow, ComponentContext, ComponentSelectMenu } from 'slash-create';
import { disableAllComponents } from '../common';
import { handleFinalMessage } from './4_handleFinalMessage';

/**
 * Confirm alerts to send handler
 * @param ctx the component context
 */
export async function handleConfirmAlertsToSend(ctx: ComponentContext) {
	const actionRow = ctx.message.components[0] as ComponentActionRow;
	const select = actionRow.components[0] as ComponentSelectMenu;
		
	const alerts = select.options?.filter(option => option.default) || [];
		
	await ctx.editParent({ components: disableAllComponents(ctx) });

	const { success, data } = await updateDiscordRolesCirclesAlerts({
		channelId: ctx.channelID,
		alerts: alerts.reduce((acc, { value }) => {
			acc[value] = true;
			return acc;
		}, {} as Record<string, boolean>),
	});

	if (!success) {
		await ctx.send('Failed to update alerts to send');
		return;
	}

	const storedAlerts = Object.keys(data?.alerts || {}).join(', ');

	await ctx.send(`Your alerts (${storedAlerts}) have been successfully updated!`);

	// TODO Phase 2
	// return handleFrequencyOfAlertsToSend(ctx);

	return handleFinalMessage(ctx);
}
