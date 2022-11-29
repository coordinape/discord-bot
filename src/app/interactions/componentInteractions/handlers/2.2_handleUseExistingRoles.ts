import { ComponentContext } from 'slash-create';

/**
 * Use existing roles flow
 * @param message the component context
 */
export async function handleUseExistingRoles(message: ComponentContext) {
	await message.send({ content: 'Not supported!' });
}
