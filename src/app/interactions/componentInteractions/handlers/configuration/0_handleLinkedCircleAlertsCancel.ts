import { ComponentContext } from 'slash-create';
import Log from 'src/app/utils/Log';
import { disableAllParentComponents } from '../common';

export async function handleLinkedCircleAlertsCancel(ctx: ComponentContext): Promise<void> {
	try {
		await disableAllParentComponents(ctx);
	} catch (error) {
		await ctx.send(`Something is wrong, please try again or contact coordinape: [handleLinkedCircleAlertsCancel] ${error}`);
		Log.error(error);
	}
}
