import { gqlBot } from './gqlClients';

export async function getLinkingStatus(userId: string) {
	const { discord_users: discordUsers } = await gqlBot('query')({
		discord_users: [
			{ where: { user_snowflake: { _eq: userId } } },
			{ user_snowflake: true },
		],
	});

	if (discordUsers.length > 1) {
		throw new Error('Something is wrong, please contact coordinape');
	}

	return discordUsers.length === 1;
}
