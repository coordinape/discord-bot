import { ComponentContext } from 'slash-create';
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
	ALL_CIRCLES_LINKED_CONTINUE_BUTTON,
	ALL_CIRCLES_LINKED_SKIP_BUTTON,
	handleAlertsToSend,
	handleCircleSelect,
	handleCreateNewEntities,
	handleFinalMessage,
	// handleFrequencyOfAlertsToSend,
	handleLinkCircles,
	handleRequestApiKeys,
} from './handlers';
import { DiscordService } from 'src/app/service/DiscordService';
import { CONFIG_NEXT_BUTTON } from 'src/app/service/components/getConfigureComponents';

type Props = {
	ctx: ComponentContext;
	discordService: DiscordService;
}

export async function handleComponentInteraction({ ctx, discordService }: Props): Promise<void> {
	switch (ctx.customID) {
	case CONFIG_NEXT_BUTTON.custom_id:
		return handleLinkCircles(ctx);
	case YES_SEND_ALERTS_BUTTON.custom_id:
		return handleAlertsToSend(ctx);
	case NO_SEND_ALERTS_BUTTON.custom_id:
		return handleFinalMessage(ctx);
	case ALERTS_SELECT_CONFIRM_BUTTON.custom_id:
		// TODO Phase 2
		// return handleFrequencyOfAlertsToSend(ctx);
		return handleFinalMessage(ctx);
	case ALERTS_SELECT_CANCEL_BUTTON.custom_id:
		return handleFinalMessage(ctx);
	case ALERTS_FREQUENCY_SELECT_CONFIRM_BUTTON.custom_id:
		return handleFinalMessage(ctx);
	case ALERTS_FREQUENCY_SELECT_CANCEL_BUTTON.custom_id:
		return handleFinalMessage(ctx);
	case LINK_CIRCLE_HANDLER_INTERACTIONS.Select:
		return handleCircleSelect(ctx);
	case CIRCLE_SELECT_NEXT_BUTTON.custom_id:
		return handleCreateNewEntities(ctx);
	case CREATE_NEW_ENTITIES_HANDLER_INTERACTIONS.Link:
		return handleRequestApiKeys(ctx, discordService);
	case CREATE_NEW_ENTITIES_HANDLER_INTERACTIONS.Skip:
		return handleFinalMessage(ctx);
	case ALL_CIRCLES_LINKED_CONTINUE_BUTTON.custom_id:
		return handleAlertsToSend(ctx);
	case ALL_CIRCLES_LINKED_SKIP_BUTTON.custom_id:
		return handleFinalMessage(ctx);
	default:
		break;
	}
}
