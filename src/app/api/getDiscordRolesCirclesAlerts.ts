import { gqlBot } from './gqlClients';

export async function getDiscordRolesCirclesAlerts({ channelId }: {channelId: string}) {
	const { discord_roles_circles } = await gqlBot('query')({
		discord_roles_circles: [
			{ where: { discord_channel_id: { _eq: channelId } } },
			{ discord_channel_id: true, alerts: [{ }, true] },
		],
	});

	return discord_roles_circles[0] as {
		discord_channel_id: string;
		alerts: Record<string, boolean>;
	};
}
