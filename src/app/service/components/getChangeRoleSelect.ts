import { ComponentType, ButtonStyle, ComponentContext, ComponentButton, ComponentSelectMenu } from 'slash-create';
import { CallbackComponent } from '../types';
import Log from '../../utils/Log';
import { disableAllComponents } from 'src/app/interactions/componentInteractions/handlers/common';
import { getCircle } from '@api/getCircle';
import { CustomId } from 'src/app/interactions/customId';

const ASSIGN_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	style: ButtonStyle.PRIMARY,
	label: 'ASSIGN',
	custom_id: 'ASSIGN_BUTTON',
};

const UNASSIGN_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	style: ButtonStyle.DESTRUCTIVE,
	label: 'UNASSIGN',
	custom_id: 'UNASSIGN_BUTTON',
};

export const ASSIGN_ROLE_USER_SELECT: ComponentSelectMenu = {
	type: ComponentType.USER_SELECT,
	placeholder: 'Select the user to add',
	custom_id: CustomId.AssignRoleUserSelect,
};

export const UNASSIGN_ROLE_USER_SELECT: ComponentSelectMenu = {
	type: ComponentType.USER_SELECT,
	placeholder: 'Select the user to remove',
	custom_id: 'UNASSIGN_ROLE_USER_SELECT',
};

export async function getChangeRoleSelect(): Promise<CallbackComponent[]> {
	const components = [ASSIGN_BUTTON, UNASSIGN_BUTTON];

	async function assignRoleFlow({ ctx }: { ctx: ComponentContext}): Promise<void> {
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

	async function unassignRoleFlow({ ctx }: { ctx: ComponentContext}): Promise<void> {
		try {
			await ctx.editParent({ components: disableAllComponents(ctx) });

			const { circle } = await getCircle({ channelId: ctx.channelID });

			await ctx.send({
				content: `Which user would you like to remove from circle ${circle.name}?`,
				components: [{ type: ComponentType.ACTION_ROW, components: [UNASSIGN_ROLE_USER_SELECT] }],
			});
		} catch (error) {
			await ctx.send({ content: 'An error has occured, please contact coordinape\'s support' });
			Log.error(error);
		}
	}

	const CALLBACKS = {
		[ASSIGN_BUTTON.custom_id]: async (ctx: ComponentContext) => assignRoleFlow({ ctx }),
		[UNASSIGN_BUTTON.custom_id]: async (ctx: ComponentContext) => unassignRoleFlow({ ctx }),
	};

	return components.map(component => ({ component, callback: CALLBACKS[component.custom_id] }));
}

