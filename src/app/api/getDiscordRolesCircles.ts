import { gqlBot } from './gqlClients';

export async function getDiscordRolesCircles({ channelId }: {channelId: string}) {
	const { discord_roles_circles } = await gqlBot('query')({
		discord_roles_circles: [
			{ where: { discord_channel_id: { _eq: channelId } } },
			{
				id: true,
				circle_id: true,
				discord_role_id: true,
				discord_channel_id: true,
			},
		],
	});

	if (discord_roles_circles.length === 0) {
		throw new Error(`No role id found for discord channel id ${channelId}`);
	}

	if (discord_roles_circles.length > 1) {
		throw new Error('Something is wrong, please contact coordinape');
	}

	return discord_roles_circles[0];
}
