import { getDiscordRolesCirclesAlerts } from '@api/getDiscordRolesCirclesAlerts';
import { ButtonStyle, ComponentButton, ComponentContext, ComponentType } from 'slash-create';
import { CustomId } from 'src/app/interactions/customId';
import Log from 'src/app/utils/Log';
import { disableAllParentComponents, getAlertsText } from '../common';
import { errorMessageOptions } from '../common/errorMessageOptions';
import { getUniqueAlertKeys } from './handleAlertsToSend';

const LINKED_CHANNEL_ALERTS_UPDATE_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	style: ButtonStyle.PRIMARY,
	label: 'Update',
	custom_id: CustomId.LinkedChannelAlertsUpdateButton,
};

const LINKED_CHANNEL_ALERTS_CANCEL_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	style: ButtonStyle.DESTRUCTIVE,
	label: 'Cancel',
	custom_id: CustomId.LinkedChannelAlertsCancelButton,
};

export async function handleUpdateAlertsButton(ctx: ComponentContext): Promise<void> {
	try {
		await disableAllParentComponents(ctx);
	
		const { alerts } = await getDiscordRolesCirclesAlerts({ channelId: ctx.channelID });
	
		if (!alerts || Object.keys(alerts).length === 0) {
			await ctx.send({
				content: ('You are not receiving any alerts.'),
				components: [{ type: ComponentType.ACTION_ROW, components: [LINKED_CHANNEL_ALERTS_UPDATE_BUTTON, LINKED_CHANNEL_ALERTS_CANCEL_BUTTON] }],
				ephemeral: true,
			});
			return;
		}
	
		const uniqueAlertKeys = getUniqueAlertKeys(alerts);
	
		await ctx.send({
			content: getAlertsText(uniqueAlertKeys),
			components: [{ type: ComponentType.ACTION_ROW, components: [LINKED_CHANNEL_ALERTS_UPDATE_BUTTON, LINKED_CHANNEL_ALERTS_CANCEL_BUTTON] }],
			ephemeral: true,
		});
	} catch (error) {
		await ctx.send(errorMessageOptions({ handlerName: 'handleUpdateAlertsButton', error }));
		Log.error(error);
	}
}
