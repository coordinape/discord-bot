import { ComponentContext } from 'slash-create';
import { handleManageDiscordRoles } from '.';

/**
 * For each Channel ask the user which Circle should map to it.
 * @param message the component context
 */
export async function handleUseExistingChannels(message: ComponentContext) {
	await message.send({ content: 'TODO: Existing channels flow', components: [] });

	// Next
	return handleManageDiscordRoles(message);
}
