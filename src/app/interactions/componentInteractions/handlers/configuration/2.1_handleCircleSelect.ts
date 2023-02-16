import { ButtonStyle, ComponentActionRow, ComponentButton, ComponentContext, ComponentSelectMenu, ComponentType } from 'slash-create';
import { HELP_BUTTON } from 'src/app/common';
import { CustomId } from 'src/app/interactions/customId';
import { buildCircleSelect } from './2_handleLinkCircles';

export const CIRCLE_SELECT_NEXT_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	label: 'Next',
	custom_id: CustomId.CircleSelectNextButton,
	style: ButtonStyle.SUCCESS,
};

export const CIRCLE_SELECT_SKIP_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	label: 'Skip',
	custom_id: CustomId.Skip,
	style: ButtonStyle.DESTRUCTIVE,
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

	const nextButton = { type: ComponentType.ACTION_ROW, components: [ CIRCLE_SELECT_NEXT_BUTTON, CIRCLE_SELECT_SKIP_BUTTON, HELP_BUTTON ] } as ComponentActionRow;

	ctx.editParent({ components: [selectActionRow, nextButton] });
}
