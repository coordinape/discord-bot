import { gqlApiKey } from './gqlClients';

type Props = {
	apiKey: string;
	circleId: string;
	profileId: string;
}

export async function findUserId({ apiKey, circleId, profileId }: Props): Promise<string | null> {
	const { users } = await gqlApiKey(apiKey)('query')({
		users: [
			{ where: { circle_id: { _eq: circleId }, profile: { id: { _eq: profileId } } } },
			{ id: true },
		],
	});

	if (!users || users.length === 0) {
		return null;
	}

	if (users.length > 1) {
		throw new Error('Something is wrong, please contact coordinape');
	}

	return String(users[0].id);
}
