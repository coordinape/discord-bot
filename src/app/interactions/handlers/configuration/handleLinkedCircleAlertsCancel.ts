import { ComponentContext } from 'slash-create';
import Log from 'src/app/utils/Log';
import { disableAllParentComponents } from '../common';
import { errorMessageOptions } from '../common/errorMessageOptions';

export async function handleLinkedCircleAlertsCancel(ctx: ComponentContext): Promise<void> {
	try {
		await disableAllParentComponents(ctx);
	} catch (error) {
		await ctx.send(errorMessageOptions({ handlerName: 'handleLinkedCircleAlertsCancel', error }));
		Log.error(error);
	}
}
