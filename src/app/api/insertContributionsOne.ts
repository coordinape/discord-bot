import { gqlApiKey } from './gqlClients';

type Props = {
    apiKey: string;
    userId: string;
	description: string;
	circleId: string;
}

export async function insertContributionsOne({ apiKey, userId, description, circleId }: Props) {
	const { insert_contributions_one } = await gqlApiKey(
		apiKey,
		{ 'x-hasura-circle-id': circleId },
	)('mutation')({
		insert_contributions_one: [
			{ object: { user_id: userId, description } },
			{ id: true },
		],
	});
	
	const { id } = insert_contributions_one || {};

	if (!id) {
		throw new Error('Something is wrong, please contact coordinape');
	}
	
	return { success: !!id, id };
}
