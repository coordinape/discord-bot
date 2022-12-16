import { ButtonStyle, ComponentActionRow, ComponentButton, ComponentButtonLink, ComponentContext, ComponentSelectMenu, ComponentType } from 'slash-create';
import { buildCircleSelect } from './2_handleLinkCircles';

export const CIRCLE_SELECT_HANDLER_INTERACTIONS = {
	Next: 'CIRCLE_SELECT_NEXT_BUTTON',
	Skip: 'CIRCLE_SELECT_SKIP_BUTTON',
};

export const CIRCLE_SELECT_NEXT_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	label: 'Next',
	custom_id: CIRCLE_SELECT_HANDLER_INTERACTIONS.Next,
	style: ButtonStyle.SUCCESS,
};

export const CIRCLE_SELECT_SKIP_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	label: 'Skip',
	custom_id: CIRCLE_SELECT_HANDLER_INTERACTIONS.Skip,
	style: ButtonStyle.DESTRUCTIVE,
};

export const CIRCLE_SELECT_HELP_BUTTON: ComponentButtonLink = {
	type: ComponentType.BUTTON,
	label: 'Help',
	style: ButtonStyle.LINK,
	// TODO Add actual link
	url: 'https://docs.coordinape.com',
};

/**
 * Handle circle select
 * @param ctx the component context
 */
export async function handleCircleSelect(ctx: ComponentContext) {
	const actionRowComponents = ctx.message.components as ComponentActionRow[];
	const select = actionRowComponents[0].components[0] as ComponentSelectMenu;

	const options = select.options?.map((option) => {
		option.default = ctx.values.includes(option.value);
		return option;
	});

	const newSelectComponent = buildCircleSelect({ options });

	const selectActionRow = { type: ComponentType.ACTION_ROW, components: [newSelectComponent] } as ComponentActionRow;

	const nextButton = { type: ComponentType.ACTION_ROW, components: [ CIRCLE_SELECT_NEXT_BUTTON, CIRCLE_SELECT_SKIP_BUTTON, CIRCLE_SELECT_HELP_BUTTON ] } as ComponentActionRow;

	ctx.editParent({ components: [selectActionRow, nextButton] });
}
