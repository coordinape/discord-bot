/* eslint-disable no-console */
import { AnyComponentButton, ComponentType, ButtonStyle, ComponentContext } from 'slash-create';
import { CallbackComponent } from '../types';
import Log from '../../utils/Log';
import { DiscordService } from '../DiscordService';

type GetAssignationComponentsProps = {
	client: DiscordService;
}

export async function getAssignationComponents({ client }: GetAssignationComponentsProps): Promise<CallbackComponent[]> {

	const ASSIGN_BUTTON: AnyComponentButton = {
		type: ComponentType.BUTTON,
		style: ButtonStyle.PRIMARY,
		label: 'ASSIGN',
		custom_id: 'ASSIGN_BUTTON',
	};

	const UNASSIGN_BUTTON: AnyComponentButton = {
		type: ComponentType.BUTTON,
		style: ButtonStyle.DESTRUCTIVE,
		label: 'UNASSIGN',
		custom_id: 'UNASSIGN_BUTTON',
	};
	
	const components = [ASSIGN_BUTTON, UNASSIGN_BUTTON];

	const CALLBACKS = {
		[ASSIGN_BUTTON.custom_id]: async (componentContext: ComponentContext) => {
			try {
				console.log(client.roles?.toJSON());
				await componentContext.send({ content: `Assign (roles: ${client.roles?.toJSON()})` });
			} catch (error) {
				await componentContext.send({ content: 'An error has occured, please contact coordinape\'s support' });
				Log.error(error);
			}
		},
		[UNASSIGN_BUTTON.custom_id]: async (componentContext: ComponentContext) => {
			try {
				await componentContext.send({ content: 'Unassign' });
			} catch (error) {
				await componentContext.send({ content: 'An error has occured, please contact coordinape\'s support' });
				Log.error(error);
			}
		},
	};

	return components.map(component => ({ component, callback: CALLBACKS[component.custom_id] }));
}
