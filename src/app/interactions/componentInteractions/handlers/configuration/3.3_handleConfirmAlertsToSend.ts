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

	// TODO Mutation to store these values
	await ctx.send(`You've selected ${alerts.map(({ value }) => `\`${value}\``).join(', ')}`);

	// TODO Phase 2
	// return handleFrequencyOfAlertsToSend(ctx);

	return handleFinalMessage(ctx);
}
