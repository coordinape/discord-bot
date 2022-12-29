import { ComponentContext } from 'slash-create';
import { disableAllComponents } from '../common';

/**
 * Handle final message
 * @param ctx the component context
 */
export async function handleFinalMessage(ctx: ComponentContext) {
	await ctx.editParent({ components: disableAllComponents(ctx) });
	await ctx.send({
		content: 'That\'s all I need to get started for you! I\'ll be watching your Circles and doing my best to keep your team up to speed with what\'s going on!\n\nThe next step is to have your team use the /Coordinape Command and to click the Link button to join their Coordinape Account to Discord, so we can assign them the correct roles and alert them when changes need to be made!\n\nIf you want to change any of these settings just use the /Coordinape command and click the configure button',
	});
}
