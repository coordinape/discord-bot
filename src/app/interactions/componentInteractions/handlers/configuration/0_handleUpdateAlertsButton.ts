import { getDiscordRolesCirclesAlerts } from '@api/getDiscordRolesCirclesAlerts';
import { ButtonStyle, ComponentButton, ComponentContext, ComponentType } from 'slash-create';
import { CustomId } from 'src/app/interactions/customId';
import { disableAllComponents, getAlertsText } from '../common';
import { getUniqueAlertKeys } from './3.2_handleAlertsToSend';

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
	await ctx.editParent({ components: disableAllComponents(ctx) });

	const { alerts } = await getDiscordRolesCirclesAlerts({ channelId: ctx.channelID });

	if (!alerts || Object.keys(alerts).length === 0) {
		await ctx.send({
			content: ('You are not receiving any alerts.'),
			components: [{ type: ComponentType.ACTION_ROW, components: [LINKED_CHANNEL_ALERTS_UPDATE_BUTTON, LINKED_CHANNEL_ALERTS_CANCEL_BUTTON] }],
		});
		return;
	}

	const uniqueAlertKeys = getUniqueAlertKeys(alerts);

	await ctx.send({
		content: getAlertsText(uniqueAlertKeys),
		components: [{ type: ComponentType.ACTION_ROW, components: [LINKED_CHANNEL_ALERTS_UPDATE_BUTTON, LINKED_CHANNEL_ALERTS_CANCEL_BUTTON] }],
	});
}
