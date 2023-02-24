import { ComponentContext } from 'slash-create';
import Log from 'src/app/utils/Log';
import { disableAllParentComponents } from '../common';

export async function handleRemoveUserCircleCancel(ctx: ComponentContext): Promise<void> {
	try {
		await disableAllParentComponents(ctx);

		await ctx.send('No worries, if you want to remove another user just run `/coordinape` again');
	} catch (error) {
		await ctx.send(`Something is wrong, please try again or contact coordinape: [handleRemoveUserCircleCancel] ${error}`);
		Log.error(error);
	}
}
