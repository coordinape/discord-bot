import { getCircle } from '@api/getCircle';
import { ComponentContext, ComponentSelectMenu, ComponentType } from 'slash-create';
import { CustomId } from 'src/app/interactions/customId';
import Log from 'src/app/utils/Log';
import { disableAllComponents } from '../common';

const ASSIGN_ROLE_USER_SELECT: ComponentSelectMenu = {
	type: ComponentType.USER_SELECT,
	placeholder: 'Select the user to add',
	custom_id: CustomId.AssignRoleUserSelect,
};

export async function handleAssignButton(ctx: ComponentContext): Promise<void> {
	try {
		await ctx.editParent({ components: disableAllComponents(ctx) });

		const { circle } = await getCircle({ channelId: ctx.channelID });

		await ctx.send({
			content: `Which user would you like to add to circle ${circle.name}?`,
			components: [{ type: ComponentType.ACTION_ROW, components: [ASSIGN_ROLE_USER_SELECT] }],
		});
	} catch (error) {
		await ctx.send({ content: 'An error has occured, please contact coordinape\'s support' });
		Log.error(error);
	}
}
