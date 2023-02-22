import { getCircle } from '@api/getCircle';
import { ComponentContext, ComponentSelectMenu, ComponentType } from 'slash-create';
import { CustomId } from 'src/app/interactions/customId';
import Log from 'src/app/utils/Log';
import { disableAllParentComponents } from '../common';

const UNASSIGN_ROLE_USER_SELECT: ComponentSelectMenu = {
	type: ComponentType.USER_SELECT,
	placeholder: 'Select the user to remove',
	custom_id: CustomId.UnassignRoleUserSelect,
};

export async function handleUnassignButton(ctx: ComponentContext): Promise<void> {
	try {
		await disableAllParentComponents(ctx);
	
		const { circle } = await getCircle({ channelId: ctx.channelID });
	
		await ctx.send({
			content: `Which user would you like to remove from circle ${circle.name}?`,
			components: [{ type: ComponentType.ACTION_ROW, components: [UNASSIGN_ROLE_USER_SELECT] }],
		});
	} catch (error) {
		await ctx.send(`Something is wrong, please try again or contact coordinape: [handleUnassignButton] ${error}`);
		Log.error(error);
	}
}
