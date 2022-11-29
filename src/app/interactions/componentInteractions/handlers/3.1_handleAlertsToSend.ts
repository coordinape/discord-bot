import { ComponentContext } from 'slash-create';

/**
 * Alerts to send
 * @param message the component context
 */
export async function handleAlertsToSend(message: ComponentContext) {
	await message.send({ content: 'What Alerts would you like me to send?', components: [] });
}
