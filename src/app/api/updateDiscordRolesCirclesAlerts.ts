import { gqlBot } from './gqlClients';

type Props = {
	channelId: string;
	alerts: Record<string, boolean>;
}

export async function updateDiscordRolesCirclesAlerts({ channelId, alerts }: Props) {
	const { update_discord_roles_circles } = await gqlBot('mutation')({
		update_discord_roles_circles: [
			{
				where: { discord_channel_id: { _eq: channelId } },
				_append: {
					alerts: $`alerts`,
				},
			},
			{
				returning: {
					id: true,
					alerts: [{}, true],
				},
			},
		],
	}, { variables: { alerts } });

	if (!update_discord_roles_circles?.returning[0]) {
		throw new Error('Something is wrong, please contact coordinape');
	}
	
	return { success: !!update_discord_roles_circles.returning[0], data: update_discord_roles_circles.returning[0] };
}
