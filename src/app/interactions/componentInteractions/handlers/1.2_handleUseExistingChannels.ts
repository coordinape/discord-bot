import { ComponentContext } from 'slash-create';
import { handleManageDiscordRoles } from './2_handleManageDiscordRoles';

/**
 * For each Channel ask the user which Circle should map to it.
 * @param message the component context
 */
export async function handleUseExistingChannels(message: ComponentContext) {
	await message.send({ content: 'TODO: Existing channels flow', components: [] });
	handleManageDiscordRoles(message);
}
