import { ComponentContext } from 'slash-create';
import Log from 'src/app/utils/Log';
import { disableAllParentComponents } from '../common';
import { errorMessageOptions } from '../common/errorMessageOptions';

export async function handleRemoveUserCircleCancel(ctx: ComponentContext): Promise<void> {
	try {
		await disableAllParentComponents(ctx);

		await ctx.send({
			content: 'No worries, if you want to remove another user just run `/coordinape config` again',
			ephemeral: true,
		});
	} catch (error) {
		await ctx.send(errorMessageOptions({ handlerName: 'handleRemoveUserCircleCancel', error }));
		Log.error(error);
	}
}
