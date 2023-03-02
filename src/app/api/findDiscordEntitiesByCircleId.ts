import { gqlBot } from './gqlClients';

type Props = {
	circleId: number;
}

type R = Promise<{ channelId: string | null; roleId: string| null; }>

export async function findDiscordEntitiesByCircleId({ circleId }: Props): R {
	const { discord_roles_circles } = await gqlBot('query')({
		discord_roles_circles: [
			{ where: { circle_id: { _eq: circleId } } },
			{ discord_channel_id: true, discord_role_id: true },
		],
	});

	if (discord_roles_circles.length === 0) {
		return { channelId: null, roleId: null };
	}

	if (discord_roles_circles.length > 1) {
		throw new Error('You have more than one roles circles, please contact coordinape');
	}

	const { discord_channel_id, discord_role_id } = discord_roles_circles[0];

	return { channelId: discord_channel_id, roleId: discord_role_id };
}
