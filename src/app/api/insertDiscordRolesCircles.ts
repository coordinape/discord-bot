/* eslint-disable no-console */
import { gqlBot } from './gqlClients';

type Props = {
    circleId: number;
	channelId: string;
	roleId: string;
}

export async function insertDiscordRolesCircles({ circleId, channelId, roleId }: Props) {
	console.log('insertDiscordRolesCircles', { circleId, channelId, roleId });
	
	const { insert_discord_roles_circles_one } = await gqlBot('mutation')({
		insert_discord_roles_circles_one: [
			{ object: { circle_id: circleId, discord_channel_id: channelId, discord_role_id: roleId } },
			{
				id: true,
				circle_id: true,
				discord_channel_id: true,
				discord_role_id: true,
			},
		],
	});
	
	if (!insert_discord_roles_circles_one) {
		throw new Error('Something is wrong, please contact coordinape');
	}
	
	return { success: !!insert_discord_roles_circles_one, data: insert_discord_roles_circles_one };
}
