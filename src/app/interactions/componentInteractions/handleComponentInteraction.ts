import { ComponentContext } from 'slash-create';
import { NEW_CHANNELS_BUTTON, EXISTING_CHANNELS_BUTTON } from '../../service/components/getConfigureComponents';
import { handleAlertsToSend, handleCreateNewChannels, handleFinalMessage, handleUseExistingChannels, NO_SEND_ALERTS_BUTTON, YES_SEND_ALERTS_BUTTON } from './handlers';
import { handleCreateNewRoles } from './handlers/2.1_handleCreateNewRoles';
import { YES_NEW_ROLE_BUTTON, NOT_YET_NEW_ROLE_BUTTON } from './handlers/2_handleManageDiscordRoles';
import { handleUseExistingRoles } from './handlers/2.2_handleUseExistingRoles';

export async function handleComponentInteraction(message: ComponentContext): Promise<void> {
	switch (message.customID) {
	case NEW_CHANNELS_BUTTON.custom_id:
		handleCreateNewChannels(message);
		break;
	case EXISTING_CHANNELS_BUTTON.custom_id:
		handleUseExistingChannels(message);
		break;
	case YES_NEW_ROLE_BUTTON.custom_id:
		handleCreateNewRoles(message);
		break;
	case NOT_YET_NEW_ROLE_BUTTON.custom_id:
		handleUseExistingRoles(message);
		break;
	case YES_SEND_ALERTS_BUTTON.custom_id:
		handleAlertsToSend(message);
		break;
	case NO_SEND_ALERTS_BUTTON.custom_id:
		handleFinalMessage(message);
		break;
	default:
		break;
	}
}
