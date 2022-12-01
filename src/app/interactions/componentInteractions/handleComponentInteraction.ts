import { ComponentContext } from 'slash-create';
import { NEW_CHANNELS_BUTTON, EXISTING_CHANNELS_BUTTON } from '../../service/components/getConfigureComponents';
import { ALERTS_FREQUENCY_SELECT_CANCEL_BUTTON, ALERTS_FREQUENCY_SELECT_CONFIRM_BUTTON, ALERTS_SELECT_CANCEL_BUTTON, ALERTS_SELECT_CONFIRM_BUTTON, handleAlertsToSend, handleCreateNewChannels, handleCreateNewRoles, handleFinalMessage, handleFrequencyOfAlertsToSend, handleUseExistingChannels, handleUseExistingRoles, NOT_YET_NEW_ROLE_BUTTON, NO_SEND_ALERTS_BUTTON, YES_NEW_ROLE_BUTTON, YES_SEND_ALERTS_BUTTON } from './handlers';
import { disableAllComponents } from './handlers/common';

export async function handleComponentInteraction(componentContext: ComponentContext): Promise<void> {
	switch (componentContext.customID) {
	case NEW_CHANNELS_BUTTON.custom_id:
		handleCreateNewChannels(componentContext);
		break;
	case EXISTING_CHANNELS_BUTTON.custom_id:
		handleUseExistingChannels(componentContext);
		break;
	case YES_NEW_ROLE_BUTTON.custom_id:
		handleCreateNewRoles(componentContext);
		break;
	case NOT_YET_NEW_ROLE_BUTTON.custom_id:
		handleUseExistingRoles(componentContext);
		break;
	case YES_SEND_ALERTS_BUTTON.custom_id:
		handleAlertsToSend(componentContext);
		break;
	case NO_SEND_ALERTS_BUTTON.custom_id:
		handleFinalMessage(componentContext);
		break;
	case ALERTS_SELECT_CONFIRM_BUTTON.custom_id: {
		componentContext.editParent({ components: disableAllComponents(componentContext) });
		// TODO Confirmation message?
		handleFrequencyOfAlertsToSend(componentContext);
		break;
	}
	case ALERTS_SELECT_CANCEL_BUTTON.custom_id: {
		componentContext.editParent({ components: disableAllComponents(componentContext) });
		// TODO No worries message?
		handleFrequencyOfAlertsToSend(componentContext);
		break;
	}
	case ALERTS_FREQUENCY_SELECT_CONFIRM_BUTTON.custom_id: {
		componentContext.editParent({ components: disableAllComponents(componentContext) });
		// TODO Confirmation message?
		handleFinalMessage(componentContext);
		break;
	}
	case ALERTS_FREQUENCY_SELECT_CANCEL_BUTTON.custom_id: {
		componentContext.editParent({ components: disableAllComponents(componentContext) });
		// TODO No worries message?
		handleFinalMessage(componentContext);
		break;
	}
	default:
		break;
	}
}
