import { gqlBot } from './gqlClients';

export async function getProfileId({ userId }: { userId: string }): Promise<number | null> {
	const { discord_users: discordUsers } = await gqlBot('query')({
		discord_users: [
			{ where:{ user_snowflake: { _eq: userId } } },
			{ profile_id: true },
		],
	});

	if (!discordUsers || discordUsers.length === 0) {
		return null;
	}

	if (discordUsers.length > 1) {
		throw new Error('Something is wrong, please contact coordinape');
	}

	return Number(discordUsers[0].profile_id);
}
