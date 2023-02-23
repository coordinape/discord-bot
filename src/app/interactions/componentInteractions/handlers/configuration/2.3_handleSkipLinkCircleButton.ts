import { ComponentContext } from 'slash-create';
import Log from 'src/app/utils/Log';
import { disableAllParentComponents } from '../common';

/**
 * Handle skip link circle
 * @param ctx the component context
 */
export async function handleSkipLinkCircleButton(ctx: ComponentContext) {
	try {
		await disableAllParentComponents(ctx);
	
		await ctx.send({
			content: 'Without linking the circle you will not be able to manage the circle from discord. If you want to link the circle later you can use the `/oordinape` command and click the configure button. Also, don\'t forget to delete both this channel and the role associated with it.',
		});
	} catch (error) {
		await ctx.send(`Something is wrong, please try again or contact coordinape: [handleSkipLinkCircleButton] ${error}`);
		Log.error(error);
	}
}
