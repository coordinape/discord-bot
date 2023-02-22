import { ComponentActionRow, ComponentContext, ComponentType, Message } from 'slash-create';

/**
 * Disable all components in a message
 * @param ctx the component context
 * @returns an array of component action rows with all components disabled
 */
export const disableAllParentComponents = async (ctx: ComponentContext): Promise<boolean | Message | undefined> => {
	const actionRowComponents = ctx.message.components as ComponentActionRow[];

	try {
		return ctx.editParent({ components: actionRowComponents.reduce(
			(prev, { components }) => ([...prev, getActionRow(components)]),
			[] as ComponentActionRow[],
		) });
	} catch {
		// ignore
	}
};

function getActionRow(components: ComponentActionRow['components']): ComponentActionRow {
	return { type: ComponentType.ACTION_ROW, components: components.map((component) => ({ ...component, disabled: true })) };
}
