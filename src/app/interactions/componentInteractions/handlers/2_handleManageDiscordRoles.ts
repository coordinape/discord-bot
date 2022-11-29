import { ButtonStyle, ComponentButton, ComponentContext, ComponentType } from 'slash-create';

export const YES_NEW_ROLE_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	style: ButtonStyle.PRIMARY,
	label: 'Yes please',
	custom_id: 'YES_NEW_ROLE_BUTTON',
};

export const NOT_YET_NEW_ROLE_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	style: ButtonStyle.SECONDARY,
	label: 'Not yet',
	custom_id: 'NOT_YET_NEW_ROLE_BUTTON',
};

/**
 * Manage discord roles
 * @param message the component context
 */
export async function handleManageDiscordRoles(message: ComponentContext) {
	await message.send({
		content: 'I will manage Circle membership through Discord Roles. These roles will be managed exclusively by me (the bot) to ensure circle membership and Discord roles are in sync. Do you want me to create those roles now?',
		components: [{ type: ComponentType.ACTION_ROW, components: [YES_NEW_ROLE_BUTTON, NOT_YET_NEW_ROLE_BUTTON] }],
	});
}
