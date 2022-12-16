import {
	ComponentActionRow,
	ComponentContext,
	ComponentSelectMenu,
	ComponentType,
} from 'slash-create';
import {
	NEW_CHANNELS_BUTTON,
	EXISTING_CHANNELS_BUTTON,
} from '../../service/components/getConfigureComponents';
import {
	ALERTS_FREQUENCY_SELECT_CANCEL_BUTTON,
	ALERTS_FREQUENCY_SELECT_CONFIRM_BUTTON,
	ALERTS_SELECT_CANCEL_BUTTON,
	ALERTS_SELECT_CONFIRM_BUTTON,
	handleAlertsToSend,
	handleCreateNewChannels,
	handleFinalMessage,
	handleFrequencyOfAlertsToSend,
	handleUseExistingChannels,
	LINK_CIRCLE_INTERACTIONS,
	NO_SEND_ALERTS_BUTTON,
	YES_SEND_ALERTS_BUTTON,
} from './handlers';
import { disableAllComponents } from './handlers/common';
import {
	CIRCLE_SELECT_HELP_BUTTON,
	CIRCLE_SELECT_NEXT_BUTTON,
	CIRCLE_SELECT_SKIP_BUTTON,
} from './handlers/configuration/2_handleLinkCircles';

export async function handleComponentInteraction(
	componentContext: ComponentContext,
): Promise<void> {
	switch (componentContext.customID) {
	case NEW_CHANNELS_BUTTON.custom_id:
		handleCreateNewChannels(componentContext);
		break;
	case EXISTING_CHANNELS_BUTTON.custom_id:
		handleUseExistingChannels(componentContext);
		break;
	case YES_SEND_ALERTS_BUTTON.custom_id:
		handleAlertsToSend(componentContext);
		break;
	case NO_SEND_ALERTS_BUTTON.custom_id:
		handleFinalMessage(componentContext);
		break;
	case ALERTS_SELECT_CONFIRM_BUTTON.custom_id: {
		componentContext.editParent({
			components: disableAllComponents(componentContext),
		});
		// TODO Confirmation message?
		handleFrequencyOfAlertsToSend(componentContext);
		break;
	}
	case ALERTS_SELECT_CANCEL_BUTTON.custom_id: {
		componentContext.editParent({
			components: disableAllComponents(componentContext),
		});
		// TODO No worries message?
		handleFrequencyOfAlertsToSend(componentContext);
		break;
	}
	case ALERTS_FREQUENCY_SELECT_CONFIRM_BUTTON.custom_id: {
		componentContext.editParent({
			components: disableAllComponents(componentContext),
		});
		// TODO Confirmation message?
		handleFinalMessage(componentContext);
		break;
	}
	case ALERTS_FREQUENCY_SELECT_CANCEL_BUTTON.custom_id: {
		componentContext.editParent({
			components: disableAllComponents(componentContext),
		});
		// TODO No worries message?
		handleFinalMessage(componentContext);
		break;
	}
	case 'CIRCLE_SELECT': {
		if (componentContext.componentType === ComponentType.STRING_SELECT) {
			const actionRowComponents = componentContext.message.components as ComponentActionRow[];
			const select = actionRowComponents[0].components[0] as ComponentSelectMenu;

			const options = select.options?.map((option) => {
				if (componentContext.values.includes(option.value)) {
					option.default = true;
				}
				return option;
			});

			const selectComponent = {
				type: ComponentType.STRING_SELECT,
				options,
				placeholder: 'Please select the circles here',
				custom_id: 'CIRCLE_SELECT',
				min_values: 0,
				max_values: 3,
			};

			const selectActionRow = { type: ComponentType.ACTION_ROW, components: [selectComponent] } as ComponentActionRow;

			const nextButton = { type: ComponentType.ACTION_ROW, components: [ CIRCLE_SELECT_NEXT_BUTTON, CIRCLE_SELECT_SKIP_BUTTON, CIRCLE_SELECT_HELP_BUTTON ] } as ComponentActionRow;

			componentContext.editParent({ components: [selectActionRow, nextButton] });
		}
		break;
	}
	case CIRCLE_SELECT_NEXT_BUTTON.custom_id: {
		componentContext.editParent({ components: disableAllComponents(componentContext) });
		handleCreateNewChannels(componentContext);
		break;
	}
	case LINK_CIRCLE_INTERACTIONS.Link:
		componentContext.editParent({ components: disableAllComponents(componentContext) });
		break;
	case LINK_CIRCLE_INTERACTIONS.Skip:
		componentContext.editParent({ components: disableAllComponents(componentContext) });
		break;
	default:
		break;
	}
}
