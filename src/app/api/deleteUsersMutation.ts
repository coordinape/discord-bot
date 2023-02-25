import { gqlApiKey } from './gqlClients';

type Props = {
    circleId: number;
	addresses: string[];
	apiKey: string;
}

export async function deleteUsersMutation({ circleId, addresses, apiKey }: Props) {
	const { deleteUsers } = await gqlApiKey(apiKey)('mutation')({
		deleteUsers: [
			{ payload: { circle_id: circleId, addresses } },
			{
				success: true,
			}],
	});

	if (!deleteUsers || !deleteUsers.success) {
		throw new Error('Something is wrong, please contact coordinape');
	}
	
	return deleteUsers.success;
}
