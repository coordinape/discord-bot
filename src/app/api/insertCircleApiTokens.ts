import { gqlBot } from './gqlClients';

type Props = {
    circleId: number;
	channelSnowflake: string;
}

export async function insertCircleApiTokens({ circleId, channelSnowflake }: Props) {
	const { insert_discord_circle_api_tokens } = await gqlBot('mutation')({
		insert_discord_circle_api_tokens: [
			{ objects: [{ circle_id: circleId, channel_snowflake: channelSnowflake }] },
			{
				affected_rows: true,
				returning: {
					id: true,
				},
			}],
	});
	
	const { affected_rows, returning } = insert_discord_circle_api_tokens || {};
	if (!affected_rows || affected_rows === 0 || affected_rows > 1) {
		throw new Error('Something is wrong, please contact coordinape');
	}
	
	return { success: affected_rows === 1, rowId: returning?.[0].id };
}
