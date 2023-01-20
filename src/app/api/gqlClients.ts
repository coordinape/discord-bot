import { Chain, Subscription } from './zeus';

export const gqlBot = Chain('http://localhost:8080/v1/graphql', {
	headers: {
		'authorization': process.env.DISCORD_BOT_AUTHORIZATION_HEADER || 'no_secret',
	},
});

export const chain = Chain('http://localhost:8080/v1/graphql', {
	headers: {
		'x-hasura-admin-secret': 'admin-secret',
	},
});

export const wsChain = Subscription('ws://localhost:8080/v1/graphql', {
	get headers() {
		return { 'x-hasura-admin-secret': 'admin-secret' };
	},
});
