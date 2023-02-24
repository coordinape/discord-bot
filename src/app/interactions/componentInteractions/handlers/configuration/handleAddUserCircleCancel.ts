import { ComponentContext } from 'slash-create';
import Log from 'src/app/utils/Log';
import { disableAllParentComponents } from '../common';

export async function handleAddUserCircleCancel(ctx: ComponentContext): Promise<void> {
	try {
		await disableAllParentComponents(ctx);

		await ctx.send('No worries, if you want to add another user just run `/coordinape` again');
	} catch (error) {
		await ctx.send(`Something is wrong, please try again or contact coordinape: [handleAddUserCircleCancel] ${error}`);
		Log.error(error);
	}
}
