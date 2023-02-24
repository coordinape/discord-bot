import { ButtonStyle, ComponentButton, ComponentContext, ComponentType } from 'slash-create';
import { CustomId } from 'src/app/interactions/customId';
import Log from 'src/app/utils/Log';
import { disableAllParentComponents } from '../common';

export const ASSIGN_ROLE_USER_SELECT_CONFIRM_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	label: 'Confirm',
	custom_id: CustomId.AssignRoleUserSelectConfirmButton,
	style: ButtonStyle.SUCCESS,
};

export const ASSIGN_ROLE_USER_SELECT_CANCEL_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	label: 'Cancel',
	custom_id: CustomId.AssignRoleUserSelectCancelButton,
	style: ButtonStyle.DESTRUCTIVE,
};

export async function handleAddUserCircleConfirmation(ctx: ComponentContext): Promise<void> {
	try {
		await disableAllParentComponents(ctx);
	
		const [userId] = ctx.data.data.values || [];

		if (!userId) {
			throw new Error('Something went wrong, user id was not found');
		}

		await ctx.send({
			content: `You've selected <@${userId}>, are you sure that you want to add them to the circle?`,
			components: [{
				type: ComponentType.ACTION_ROW,
				components: [ASSIGN_ROLE_USER_SELECT_CONFIRM_BUTTON, ASSIGN_ROLE_USER_SELECT_CANCEL_BUTTON],
			}],
		});
	} catch (error) {
		await ctx.send(`Something is wrong, please try again or contact coordinape: [handleAddUserCircleConfirmation] ${error}`);
		Log.error(error);
	}
}
