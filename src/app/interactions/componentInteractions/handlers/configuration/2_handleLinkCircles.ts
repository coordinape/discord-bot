import { CommandContext, ComponentContext, ComponentSelectMenu, ComponentSelectOption, ComponentType } from 'slash-create';
import _ from 'lodash';
import { Circle, getCircles } from '@api/getCircles';

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
	const circles = await getCircles();

	if (circles.length === 0) {
		ctx.send('All your circles are linked!');
		return;
	}

	ctx.send({
		content: `I see you have ${getLinkedCirclesText(circles)}.\n\nI'll need to create a new channel and role in this server to link these Circles following this schema:\n\n> Channel = \`#circle-name\`\n> Role = \`@Circle Name Member\`\n\nFor example, for your circle "${circles[0].name}" I will create the channel \`#${_.kebabCase(circles[0].name)}\` and the role \`@${circles[0].name} Member\`\n\nPlease select the Circles that you want me to manage from the **dropdown list** and click Next`,
		components: [{ type: ComponentType.ACTION_ROW, components: [buildCircleSelect({ circles })] }],
	});
}

function getLinkedCirclesText(circles: Circle[]) {
	if (circles.length === 1) {
		return '1 Circle that isn\'t yet linked to Discord';
	}
	return `${circles.length} Circles that aren't yet linked to Discord`;
}
