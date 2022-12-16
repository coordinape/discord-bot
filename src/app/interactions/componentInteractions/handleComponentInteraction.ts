import { ComponentContext } from 'slash-create';
import { NEW_CHANNELS_BUTTON, EXISTING_CHANNELS_BUTTON } from '../../service/components/getConfigureComponents';
import { disableAllComponents } from './handlers/common';
import {
	ALERTS_FREQUENCY_SELECT_CANCEL_BUTTON,
	ALERTS_FREQUENCY_SELECT_CONFIRM_BUTTON,
	ALERTS_SELECT_CANCEL_BUTTON,
	ALERTS_SELECT_CONFIRM_BUTTON,
	CIRCLE_SELECT_NEXT_BUTTON,
	CREATE_NEW_ENTITIES_HANDLER_INTERACTIONS,
	LINK_CIRCLE_HANDLER_INTERACTIONS,
	NO_SEND_ALERTS_BUTTON,
	YES_SEND_ALERTS_BUTTON,
	handleAlertsToSend,
	handleCircleSelect,
	handleCreateNewEntities,
	handleFinalMessage,
	handleFrequencyOfAlertsToSend,
	handleUseExistingChannels,
} from './handlers';

export async function handleComponentInteraction(componentContext: ComponentContext): Promise<void> {
	switch (componentContext.customID) {
	case NEW_CHANNELS_BUTTON.custom_id:
		await handleCreateNewEntities(componentContext);
		break;
	case EXISTING_CHANNELS_BUTTON.custom_id:
		await handleUseExistingChannels(componentContext);
		break;
	case YES_SEND_ALERTS_BUTTON.custom_id:
		await handleAlertsToSend(componentContext);
		break;
	case NO_SEND_ALERTS_BUTTON.custom_id:
		await handleFinalMessage(componentContext);
		break;
	case ALERTS_SELECT_CONFIRM_BUTTON.custom_id: {
		await componentContext.editParent({ components: disableAllComponents(componentContext) });
		// TODO Confirmation message?
		await handleFrequencyOfAlertsToSend(componentContext);
		break;
	}
	case ALERTS_SELECT_CANCEL_BUTTON.custom_id: {
		await componentContext.editParent({ components: disableAllComponents(componentContext) });
		// TODO No worries message?
		await handleFrequencyOfAlertsToSend(componentContext);
		break;
	}
	case ALERTS_FREQUENCY_SELECT_CONFIRM_BUTTON.custom_id: {
		await componentContext.editParent({ components: disableAllComponents(componentContext) });
		// TODO Confirmation message?
		await handleFinalMessage(componentContext);
		break;
	}
	case ALERTS_FREQUENCY_SELECT_CANCEL_BUTTON.custom_id: {
		await componentContext.editParent({ components: disableAllComponents(componentContext) });
		// TODO No worries message?
		await handleFinalMessage(componentContext);
		break;
	}
	case LINK_CIRCLE_HANDLER_INTERACTIONS.Select: {
		await handleCircleSelect(componentContext);
		break;
	}
	case CIRCLE_SELECT_NEXT_BUTTON.custom_id: {
		await componentContext.editParent({ components: disableAllComponents(componentContext) });
		await handleCreateNewEntities(componentContext);
		break;
	}
	case CREATE_NEW_ENTITIES_HANDLER_INTERACTIONS.Link:
		await componentContext.editParent({ components: disableAllComponents(componentContext) });
		break;
	case CREATE_NEW_ENTITIES_HANDLER_INTERACTIONS.Skip:
		await componentContext.editParent({ components: disableAllComponents(componentContext) });
		break;
	default:
		break;
	}
}
