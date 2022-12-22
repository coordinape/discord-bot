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
import { DiscordService } from 'src/app/service/DiscordService';
import { extractCircleId } from 'src/app/utils/extractCircleId';

type Props = {
	componentContext: ComponentContext;
	discordService: DiscordService;
}

export async function handleComponentInteraction({ componentContext, discordService }: Props): Promise<void> {
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
	case CREATE_NEW_ENTITIES_HANDLER_INTERACTIONS.Link: {
		try {
			const channel = await discordService.findTextChannelById(componentContext.channelID);
			const circleId = extractCircleId(componentContext.message.content);
			// the bot inserts a row in the discord.circle_api_tokens table
			// containing a `circle_id` and the `channel_snowflake` and begins listening for the token to be added
			// to that row via a subscription
			// await componentContext.editParent({ components: disableAllComponents(componentContext) });
			await componentContext.send(`(mutation) Inserting a row in \`discord.circle_api_tokens\` with \`{ channel_snowflake: ${channel?.id}, circleId: ${circleId} }\``);
		} catch (error) {
			await componentContext.send('Something went wrong, please contact coordinape support');
		}
		break;
	}
	case CREATE_NEW_ENTITIES_HANDLER_INTERACTIONS.Skip:
		await componentContext.editParent({ components: disableAllComponents(componentContext) });
		break;
	default:
		break;
	}
}
