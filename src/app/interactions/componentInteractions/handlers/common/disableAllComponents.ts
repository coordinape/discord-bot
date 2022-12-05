import { ComponentActionRow, ComponentContext, ComponentType } from 'slash-create';

/**
 * Disable all components in a message
 * @param componentContext the component context
 * @returns an array of component action rows with all components disabled
 */
export const disableAllComponents = (componentContext: ComponentContext): ComponentActionRow[] => {
	const actionRowComponents = componentContext.message.components as ComponentActionRow[];

	return actionRowComponents.reduce((prev, { components }) => {
		return [...prev, { type: ComponentType.ACTION_ROW, components: components.map((component) => ({ ...component, disabled: true })) }];
	}, [] as ComponentActionRow[]);
};
