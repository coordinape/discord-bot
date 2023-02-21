import { gqlApiKey } from './gqlClients';

type Props = {
	channelId: string;
	apiKey: string
}

export async function findCircle({ channelId, apiKey }: Props) {
	const { discord_roles_circles } = await gqlApiKey(apiKey)('query')({
		discord_roles_circles: [
			{ where: { discord_channel_id: { _eq: channelId } } },
			{ circle: { id: true, name: true } },
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
