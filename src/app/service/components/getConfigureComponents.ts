import { PermissionsBitField } from 'discord.js';
import { AnyComponentButton, ComponentType, ButtonStyle, ComponentContext, ComponentButton } from 'slash-create';
import { CallbackComponent } from '../types';

export const NEW_CHANNELS_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	style: ButtonStyle.PRIMARY,
	label: 'Create New Channels Please',
	custom_id: 'NEW_CHANNELS_BUTTON',
};

export const EXISTING_CHANNELS_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	style: ButtonStyle.SECONDARY,
	label: 'I already have Channels Created',
	custom_id: 'EXISTING_CHANNELS_BUTTON',
};

export async function getConfigureComponents(): Promise<CallbackComponent[]> {
	const CONFIGURE_BUTTON: AnyComponentButton = {
		type: ComponentType.BUTTON,
		style: ButtonStyle.SUCCESS,
		label: 'CONFIGURE',
		custom_id: 'CONFIGURE_BUTTON',
	};

	const components = [CONFIGURE_BUTTON];

	const CALLBACKS = {
		[CONFIGURE_BUTTON.custom_id]: async (ctx: ComponentContext) => {
			const isServerAdmin = ctx.member?.permissions.has(PermissionsBitField.Flags.Administrator);

			if (!isServerAdmin) {
				return ctx.send('Sorry it seems you don\'t have permission to perform this action it\'s currently restricted to Server Admin.');
			}

			return ctx.send({
				content: 'Do you want me to create channels for all of the Circles in your Organization, or do you already have channels for each circle? Any new Coordinape Circles created will automatically create a new Channel in the Coordinape Category from this point on.',
				components: [{ type: ComponentType.ACTION_ROW, components: [NEW_CHANNELS_BUTTON, EXISTING_CHANNELS_BUTTON] }],
			});
		},
	};

	return components.map(component => ({ component, callback: CALLBACKS[component.custom_id] }));
}

