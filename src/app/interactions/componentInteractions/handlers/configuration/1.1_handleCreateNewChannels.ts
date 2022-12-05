import { ComponentContext } from 'slash-create';
import { handleManageDiscordRoles } from '.';

/**
 * Create a new Channel for each Circle in the Coordinape Category
 * @param message the component context
 */
export async function handleCreateNewChannels(message: ComponentContext) {
	await message.send({ content: 'TODO: Create new channels flow', components: [] });

	// Next
	return handleManageDiscordRoles(message);
}
