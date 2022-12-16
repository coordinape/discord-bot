import { ButtonStyle, CommandContext, ComponentButton, ComponentButtonLink, ComponentContext, ComponentSelectMenu, ComponentType } from 'slash-create';
import _ from 'lodash';

export type Circle = {
	name: string;
	id: number;
};

export const buildCircleSelect = (circles: Circle[]): ComponentSelectMenu => ({
	type: ComponentType.STRING_SELECT,
	options: circles.map(({ name, id }) => ({ value: id.toString(), label: name })),
	placeholder: 'Please select the circles here',
	custom_id: 'CIRCLE_SELECT',
	min_values: 0,
	max_values: 3,
});

export const CIRCLE_SELECT_NEXT_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	label: 'Next',
	custom_id: 'CIRCLE_SELECT_NEXT_BUTTON',
	style: ButtonStyle.SUCCESS,
};

export const CIRCLE_SELECT_SKIP_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	label: 'Skip',
	custom_id: 'CIRCLE_SELECT_SKIP_BUTTON',
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
 * Link circles
 * @param ctx the context
 */
export async function handleLinkCircles(ctx: CommandContext | ComponentContext) {
	// TODO Fetch dynamically
	const circles = [{ name: 'Circle X', id: 1 }, { name: 'Circle Y', id: 2 	}, { name: 'Circle Z', id: 3 }];

	if (circles.length === 1) {
		// TODO Single circle flow
		return;
	}

	ctx.send({
		content: `I see you have ${circles.length} Circles that aren't yet linked to Discord.\n\nI'll need to create a new channel and role in this server to link these Circles following this schema:\n\n> Channel = \`#circle-name\`\n> Role = \`@Circle Name Member\`\n\nFor example, for your circle "${circles[0].name}" I will create the channel \`#${_.kebabCase(circles[0].name)}\` and the role \`@${circles[0].name} Member\`\n\nPlease select the Circles that you want me to manage from the **dropdown list** and click Next`,
		components: [{ type: ComponentType.ACTION_ROW, components: [buildCircleSelect(circles)] }],
	});
}
