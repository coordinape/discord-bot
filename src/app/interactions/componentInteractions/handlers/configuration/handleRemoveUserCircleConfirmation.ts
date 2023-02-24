import { ButtonStyle, ComponentButton, ComponentContext, ComponentType } from 'slash-create';
import { CustomId } from 'src/app/interactions/customId';
import Log from 'src/app/utils/Log';
import { disableAllParentComponents } from '../common';

export const UNASSIGN_ROLE_USER_SELECT_CONFIRM_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	label: 'Confirm',
	custom_id: CustomId.UnassignRoleUserSelectConfirmButton,
	style: ButtonStyle.SUCCESS,
};

export const UNASSIGN_ROLE_USER_SELECT_CANCEL_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	label: 'Cancel',
	custom_id: CustomId.UnassignRoleUserSelectCancelButton,
	style: ButtonStyle.DESTRUCTIVE,
};

export async function handleRemoveUserCircleConfirmation(ctx: ComponentContext): Promise<void> {
	try {
		await disableAllParentComponents(ctx);
	
		const [userId] = ctx.data.data.values || [];

		if (!userId) {
			throw new Error('Something went wrong, user id was not found');
		}
        
		await ctx.send({
			content: `You've selected <@${userId}>, are you sure that you want to remove them from the circle?`,
			components: [{
				type: ComponentType.ACTION_ROW,
				components: [UNASSIGN_ROLE_USER_SELECT_CONFIRM_BUTTON, UNASSIGN_ROLE_USER_SELECT_CANCEL_BUTTON],
			}],
		});
	} catch (error) {
		await ctx.send(`Something is wrong, please try again or contact coordinape: [handleRemoveUserCircleConfirmation] ${error}`);
		Log.error(error);
	}
}
