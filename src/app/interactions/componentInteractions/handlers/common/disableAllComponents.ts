import { ComponentActionRow, ComponentContext, ComponentType } from 'slash-create';

/**
 * Disable all components in a message
 * @param ctx the component context
 * @returns an array of component action rows with all components disabled
 */
export const disableAllComponents = (ctx: ComponentContext): ComponentActionRow[] => {
	const actionRowComponents = ctx.message.components as ComponentActionRow[];

	return actionRowComponents.reduce((prev, { components }) => (
		[...prev, { type: ComponentType.ACTION_ROW, components: components.map((component) => ({ ...component, disabled: true })) }]
	), [] as ComponentActionRow[]);
};
