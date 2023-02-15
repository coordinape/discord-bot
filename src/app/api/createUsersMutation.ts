import { gqlApiKey } from './gqlClients';

type Props = {
    circleId: number;
	users: {
		name: string;
		address: string;
	}[];
	apiKey: string;
}

export async function createUsersMutation({ circleId, users, apiKey }: Props) {
	const { createUsers } = await gqlApiKey(apiKey)('mutation')({
		createUsers: [
			{ payload: { circle_id: circleId, users } },
			{
				id: true,
				UserResponse: {
					address: true,
					profile: {
						name: true,
					},
				},
			}],
	});

	if (!createUsers || createUsers?.length === 0 || createUsers?.length > 1) {
		throw new Error('Something is wrong, please contact coordinape');
	}
	
	return createUsers[0];
}
