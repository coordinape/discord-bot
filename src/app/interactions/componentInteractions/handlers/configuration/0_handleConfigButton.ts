import { PermissionsBitField } from 'discord.js';
import { ComponentButton, ComponentType, ButtonStyle, ComponentContext } from 'slash-create';
import { HELP_BUTTON } from 'src/app/common';
import { CustomId } from 'src/app/interactions/customId';
import { disableAllComponents } from '../common';

const CONFIG_NEXT_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	style: ButtonStyle.PRIMARY,
	label: 'Next',
	custom_id: CustomId.ConfigNextButton,
};

export async function handleConfigButton(ctx: ComponentContext): Promise<void> {
	await ctx.editParent({ components: disableAllComponents(ctx) });

	const isServerAdmin = ctx.member?.permissions.has(PermissionsBitField.Flags.Administrator);

	if (!isServerAdmin) {
		await ctx.send('Sorry it seems you don\'t have permission to perform this action it\'s currently restricted to Server Admin.');
	}

	await ctx.send({
		content: 'Thanks for adding the Coordinape Bot to your server! My job is to make using Coordinape as simple as possible for your team.\n\nTo do that I\'ll need to ask you a few questions first.\n\nIf you have any questions just click the help button below. If anything goes wrong in this process, you can always start this prompt over again by using the `/Coordinape` Command and clicking the Configure button',
		components: [{ type: ComponentType.ACTION_ROW, components: [CONFIG_NEXT_BUTTON, HELP_BUTTON] }],
	});
}
