import { ButtonStyle, ComponentButtonLink, ComponentContext, ComponentType, Message } from 'slash-create';
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
	handleLinkCircles,
} from './handlers';
import { DiscordService } from 'src/app/service/DiscordService';
import { extractCircleId } from 'src/app/utils/extractCircleId';
import { CONFIG_NEXT_BUTTON } from 'src/app/service/components/getConfigureComponents';
import { insertCircleApiTokens } from '@api/insertCircleApiTokens';
import { wsChain } from '@api/gqlClients';

type Props = {
	componentContext: ComponentContext;
	discordService: DiscordService;
}

export async function handleComponentInteraction({ componentContext, discordService }: Props): Promise<void> {
	switch (componentContext.customID) {
	case CONFIG_NEXT_BUTTON.custom_id:
		await handleLinkCircles(componentContext);
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
			if (!channel || !circleId) {
				throw new Error('Missing channel or circle');
			}
			// the bot inserts a row in the discord.circle_api_tokens table containing
			// a `circle_id` and the `channel_snowflake` and begins listening for the token to be added
			// to that row via a subscription
			await componentContext.editParent({ components: disableAllComponents(componentContext) });
			const { success, rowId } = await insertCircleApiTokens({ circleId, channelSnowflake: channel?.id });
			if (!success) {
				throw new Error('Something went wrong, please contact coordinape support');
			}

			const AUTHORIZE_LINK_CIRCLE_BUTTON: ComponentButtonLink = {
				type: ComponentType.BUTTON,
				label: 'Authorize',
				style: ButtonStyle.LINK,
				url: `http://localhost:3000/discord/link?id=${rowId}&circleId=${circleId}`,
			};

			const message = await componentContext.send({
				content: 'Click on the button below to authorize', components: [
					{ type: ComponentType.ACTION_ROW, components: [AUTHORIZE_LINK_CIRCLE_BUTTON] },
				],
			});

			const onDiscordCircleApiToken = wsChain('subscription')({
				discord_circle_api_tokens: [
					{ where: { circle_id: { _eq: circleId } } },
					{ circle_id: true, token: true },
				],
			});
			onDiscordCircleApiToken.on(async ({ discord_circle_api_tokens }) => {
				const circleApiToken = discord_circle_api_tokens.find(({ circle_id }) => circle_id === circleId);
				if (circleApiToken && circleApiToken.token) {
					onDiscordCircleApiToken.ws.close();
					if (isMessage(message)) {
						message.edit({ components: [{ type: ComponentType.ACTION_ROW, components: [{ ...AUTHORIZE_LINK_CIRCLE_BUTTON, disabled: true }] }] });
					}
					await componentContext.send({ content: `<@${componentContext.user.id}>, you've linked the circle successfully!` });
				}
			});
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

function isMessage(message: boolean | Message): message is Message {
	return (message as Message).edit !== undefined;
}
