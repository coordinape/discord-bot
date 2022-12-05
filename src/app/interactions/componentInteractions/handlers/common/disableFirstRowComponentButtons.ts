import { ComponentActionRow, ComponentButton, ComponentType, Message } from 'slash-create';

export const disableFirstRowComponentButtons = ({ message }: { message: Message }) => {
	const actionRow = message.components[0] as ComponentActionRow;
	const components = actionRow.components as ComponentButton[];

	message.edit({
		components: [{
			type: ComponentType.ACTION_ROW,
			components: components.map((component) => ({ ...component, disabled: true })),
		}],
	});
};
