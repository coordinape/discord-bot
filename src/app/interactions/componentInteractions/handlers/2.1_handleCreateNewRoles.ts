import { ComponentContext } from 'slash-create';
import { handleSendAlerts } from './3_handleSendAlerts';

/**
 * Create a new Role for each Circle
 * @param message the component context
 */
export async function handleCreateNewRoles(message: ComponentContext) {
	await message.send({ content: 'TODO: Create new roles flow', components: [] });
	handleSendAlerts(message);
}