import { Chain, Subscription } from './zeus';
import { getHasuraUrl, getHasuraWsUrl } from '@api/constants';

const hasuraUrl = getHasuraUrl();
const hasuraWsUrl = getHasuraWsUrl();

export const gqlApiKey = (apiKey: string) => Chain(hasuraUrl, {
	headers: {
		'Authorization': `Bearer ${apiKey}`,
		'content-type': 'application/json',
	},
});

export const gqlBot = Chain(hasuraUrl, {
	headers: {
		'authorization': process.env.DISCORD_BOT_AUTHORIZATION_HEADER || 'no_secret',
		'x-hasura-role': 'discord-bot',
	},
});

export const wsChain = Subscription(hasuraWsUrl, {
	get headers() {
		return {
			'authorization': process.env.DISCORD_BOT_AUTHORIZATION_HEADER || 'no_secret',
			'x-hasura-role': 'discord-bot',
		};
	},
});
