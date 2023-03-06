import { ComponentContext } from 'slash-create';
import Log from 'src/app/utils/Log';
import { disableAllParentComponents } from '../common';
import { errorMessageOptions } from '../common/errorMessageOptions';

export async function handleAddUserCircleCancel(ctx: ComponentContext): Promise<void> {
	try {
		await disableAllParentComponents(ctx);

		await ctx.send({
			content: 'No worries, if you want to add another user just run `/coordinape` again',
			ephemeral: true,
		});
	} catch (error) {
		await ctx.send(errorMessageOptions({ handlerName: 'handleAddUserCircleCancel', error }));
		Log.error(error);
	}
}
