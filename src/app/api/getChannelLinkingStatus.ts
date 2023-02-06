import { gqlBot } from './gqlClients';

export async function getChannelLinkingStatus({ channelId }: { channelId: string }) {
	const { discord_circle_api_tokens } = await gqlBot('query')({
		discord_circle_api_tokens: [
			{ where: { channel_snowflake: { _eq: channelId } } },
			{ token: true },
		],
	});

	if (discord_circle_api_tokens.length === 0) {
		return false;
	}

	if (discord_circle_api_tokens.length > 1) {
		throw new Error('Something is wrong, please contact coordinape');
	}

	return !!discord_circle_api_tokens[0].token;
}
