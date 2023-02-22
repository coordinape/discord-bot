import { gqlBot } from './gqlClients';

export async function getCircle({ channelId }: {channelId: string}) {
	const { discord_roles_circles } = await gqlBot('query')({
		discord_roles_circles: [
			{ where: { discord_channel_id: { _eq: channelId } } },
			{ circle: { name: true } },
		],
	});

	if (discord_roles_circles.length === 0) {
		throw new Error(`No circle found for discord channel id ${channelId}`);
	}

	if (discord_roles_circles.length > 1) {
		throw new Error('Something is wrong, please contact coordinape');
	}

	return discord_roles_circles[0];
}