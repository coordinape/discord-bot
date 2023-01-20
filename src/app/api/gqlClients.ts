import { Chain, Subscription } from './zeus';
import { getHasuraUrl, getHasuraWsUrl } from '@api/constants';

const hasuraUrl = getHasuraUrl();
const hasuraWsUrl = getHasuraWsUrl();

export const gqlBot = Chain(hasuraUrl, {
	headers: {
		'authorization': process.env.DISCORD_BOT_AUTHORIZATION_HEADER || 'no_secret',
	},
});

export const chain = Chain(hasuraUrl, {
	headers: {
		'x-hasura-admin-secret': 'admin-secret',
	},
});

export const wsChain = Subscription(hasuraWsUrl, {
	get headers() {
		return { 'x-hasura-admin-secret': 'admin-secret' };
	},
});
