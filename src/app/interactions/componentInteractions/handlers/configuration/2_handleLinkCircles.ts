import { CommandContext, ComponentContext, ComponentSelectMenu, ComponentSelectOption, ComponentType } from 'slash-create';
import _ from 'lodash';

export type Circle = {
	name: string;
	id: number;
};

export const LINK_CIRCLE_HANDLER_INTERACTIONS = {
	Select: 'CIRCLE_SELECT',
};

export const buildCircleSelect = ({ circles, options }: {circles?: Circle[]; options?: ComponentSelectOption[]}): ComponentSelectMenu => ({
	type: ComponentType.STRING_SELECT,
	options: circles ? circles.map(({ name, id }) => ({ value: id.toString(), label: name })) : options,
	placeholder: 'Please select the circles here',
	custom_id: LINK_CIRCLE_HANDLER_INTERACTIONS.Select,
	min_values: 0,
	max_values: circles ? circles.length : options?.length,
});

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
		components: [{ type: ComponentType.ACTION_ROW, components: [buildCircleSelect({ circles })] }],
	});
}
