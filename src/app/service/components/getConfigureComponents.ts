import { PermissionsBitField } from 'discord.js';
import { AnyComponentButton, ComponentType, ButtonStyle, ComponentContext, ComponentButton } from 'slash-create';
import { HELP_BUTTON } from 'src/app/common';
import { disableAllComponents } from 'src/app/interactions/componentInteractions/handlers/common';
import { CustomId } from 'src/app/interactions/customId';
import { CallbackComponent } from '../types';

export const CONFIG_NEXT_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	style: ButtonStyle.PRIMARY,
	label: 'Next',
	custom_id: CustomId.ConfigNextButton,
};

export async function getConfigureComponents(): Promise<CallbackComponent[]> {
	const CONFIGURE_BUTTON: AnyComponentButton = {
		type: ComponentType.BUTTON,
		style: ButtonStyle.SUCCESS,
		label: 'CONFIGURE',
		custom_id: CustomId.ConfigButton,
	};

	const components = [CONFIGURE_BUTTON];

	const CALLBACKS = {
		[CONFIGURE_BUTTON.custom_id]: async (ctx: ComponentContext) => {
			await ctx.editParent({ components: disableAllComponents(ctx) });
			
			await ctx.defer();

			const isServerAdmin = ctx.member?.permissions.has(PermissionsBitField.Flags.Administrator);
	
			if (!isServerAdmin) {
				return ctx.send('Sorry it seems you don\'t have permission to perform this action it\'s currently restricted to Server Admin.');
			}
	
			await ctx.send({
				content: 'Thanks for adding the Coordinape Bot to your server! My job is to make using Coordinape as simple as possible for your team.\n\nTo do that I\'ll need to ask you a few questions first.\n\nIf you have any questions just click the help button below. If anything goes wrong in this process, you can always start this prompt over again by using the `/Coordinape` Command and clicking the Configure button',
				components: [{ type: ComponentType.ACTION_ROW, components: [CONFIG_NEXT_BUTTON, HELP_BUTTON] }],
			});
		},
	};

	return components.map(component => ({ component, callback: CALLBACKS[component.custom_id] }));
}

