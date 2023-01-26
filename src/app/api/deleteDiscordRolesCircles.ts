import { gqlBot } from './gqlClients';

type Props = {
    circleId: number;
}

export async function deleteDiscordRolesCircles({ circleId }: Props) {
	const { delete_discord_roles_circles } = await gqlBot('mutation')({
		delete_discord_roles_circles: [
			{ where: { circle_id: { _eq: circleId } } },
			{ affected_rows: true },
		],
	});
	
	const { affected_rows } = delete_discord_roles_circles || {};
	if (!affected_rows || affected_rows === 0 || affected_rows > 1) {
		throw new Error('Something is wrong, please contact coordinape');
	}
	
	return { success: affected_rows === 1 };
}
