import { insertCircleApiTokens } from '@api/insertCircleApiTokens';
import { ButtonStyle, ComponentButton, ComponentContext, ComponentType } from 'slash-create';
import { CustomId } from 'src/app/interactions/customId';
import { DiscordService } from 'src/app/service/DiscordService';
import { extractCircleId } from 'src/app/utils/extractCircleId';
import { disableAllComponents } from '../common';

/**
 * Request API keys flow
 * @param ctx the context
 * @param discordService the discord service
 */
export async function handleRequestApiKeys(ctx: ComponentContext) {
	await ctx.editParent({ components: disableAllComponents(ctx) });
	
	await ctx.defer();

	const discordService = new DiscordService(ctx);

	const channel = await discordService.findTextChannelById(ctx.channelID);
	const circleId = extractCircleId(ctx.message.content);

	if (!channel || !circleId) {
		throw new Error('Missing channel or circle');
	}

	const { success, rowId } = await insertCircleApiTokens({ circleId, channelSnowflake: channel?.id });
	if (!success) {
		throw new Error('Something went wrong, please contact coordinape support');
	}

	const AUTHORIZE_LINK_CIRCLE_BUTTON: ComponentButton = {
		type: ComponentType.BUTTON,
		label: 'Listen for Authorization',
		style: ButtonStyle.PRIMARY,
		custom_id: CustomId.AuthorizeLinkCircleButton,
	};

	await ctx.send({
		content: `In order for discord to detect your authorization please click the button below, then go to the following link https://coordinape-git-staging-coordinape.vercel.app/discord/link?id=${rowId}&circleId=${circleId}`,
		components: [
			{ type: ComponentType.ACTION_ROW, components: [AUTHORIZE_LINK_CIRCLE_BUTTON] },
		],
	});
}
