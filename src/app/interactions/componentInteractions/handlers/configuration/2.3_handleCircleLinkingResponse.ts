/* eslint-disable no-console */
import { findApiKey } from '@api/findApiKey';
import { findCircle } from '@api/findCircle';
import { wsChain } from '@api/gqlClients';
import { ComponentContext } from 'slash-create';
import { sleep } from 'src/app/utils/sleep';
import { disableAllComponents } from '../common';
import { handleSendAlerts } from './3_handleSendAlerts';

export async function handleCircleLinkingResponse(ctx: ComponentContext): Promise<void> {
	await ctx.defer();

	console.log('## ctx#interactionID', ctx.interactionID);
	console.log('## ctx#customID', ctx.customID);

	const apiKey = await findApiKey({ channelId: ctx.channelID });
	if (!apiKey) {
		throw new Error('Api key not found!');
	}

	const { circle } = await findCircle({ channelId: ctx.channelID, apiKey });

	console.log('## circle', circle);

	if (!circle.id) {
		throw new Error('Missing channel or circle');
	}

	const onDiscordCircleApiToken = wsChain('subscription')({
		discord_circle_api_tokens: [
			{ where: { circle_id: { _eq: circle.id } } },
			{ circle_id: true, token: true },
		],
	});

	onDiscordCircleApiToken.on(async ({ discord_circle_api_tokens }) => {
		const circleApiToken = discord_circle_api_tokens.find(
			({ circle_id }) => circle_id === circle.id,
		);

		console.log('## circleApiToken', circleApiToken);

		if (circleApiToken && circleApiToken.token) {
			onDiscordCircleApiToken.ws.close();

			disableAllComponents(ctx);

			console.log('## ctx', ctx);

			await ctx.send({
				content: `<@${ctx.user.id}>, you've linked the circle successfully!`,
			});

			// Just to improve message flow
			await sleep(3000);

			// Next question
			return handleSendAlerts(ctx);
		}
	});
	return;
}
