import { getCircle } from '@api/getCircle';
import { ComponentContext, ComponentSelectMenu, ComponentType } from 'slash-create';
import { CustomId } from 'src/app/interactions/customId';
import Log from 'src/app/utils/Log';
import { disableAllParentComponents } from '../common';
import { errorMessageOptions } from '../common/errorMessageOptions';

const ASSIGN_ROLE_USER_SELECT: ComponentSelectMenu = {
	type: ComponentType.USER_SELECT,
	placeholder: 'Select the user to add',
	custom_id: CustomId.AssignRoleUserSelect,
};

export async function handleAssignButton(ctx: ComponentContext): Promise<void> {
	try {
		await disableAllParentComponents(ctx);
	
		const { circle } = await getCircle({ channelId: ctx.channelID });
	
		await ctx.send({
			content: `Which user would you like to add to circle ${circle.name}?`,
			components: [{ type: ComponentType.ACTION_ROW, components: [ASSIGN_ROLE_USER_SELECT] }],
			ephemeral: true,
		});
	} catch (error) {
		await ctx.send(errorMessageOptions({ handlerName: 'handleAssignButton', error }));
		Log.error(error);
	}
}
