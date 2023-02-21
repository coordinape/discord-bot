import { gqlApiKey, gqlBot } from './gqlClients';

type Props = {
	channelId: string;
	apiKey?: string
}

export async function findCircle({ channelId, apiKey }: Props) {
	let result = null;

	if (!apiKey) {
		result = await gqlBot('query')({
			discord_roles_circles: [
				{ where: { discord_channel_id: { _eq: channelId } } },
				{
					circle: { name: true },
					circle_id: true,
				},
			],
		});
	} else {
		result = await gqlApiKey(apiKey)('query')({
			discord_roles_circles: [
				{ where: { discord_channel_id: { _eq: channelId } } },
				{
					circle: { name: true },
					circle_id: true,
				},
			],
		});
	}

	const { discord_roles_circles } = result;


	if (discord_roles_circles.length === 0) {
		throw new Error(`No circle found for discord channel id ${channelId}`);
	}

	if (discord_roles_circles.length > 1) {
		throw new Error('Something is wrong, please contact coordinape');
	}

	return discord_roles_circles[0];
}
