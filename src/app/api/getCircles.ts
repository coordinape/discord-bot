import { getProfileId } from './getProfileId';
import { gqlBot } from './gqlClients';

export type Circle = {
	name: string;
	id: number;
};

export async function getCircles({ userId }: { userId: string }): Promise<Circle[]> {
	const profileId = await getProfileId({ userId });

	if (!profileId) {
		throw new Error('profileId is required to get the circles');
	}

	const { circles } = await gqlBot('query')({
		circles: [
			{ where:{ users: { profile: { id: { _eq: profileId } }, role: { _eq: 1 } } } },
			{ id: true, name: true },
		],
	});

	return circles.map(({ id, name }) => ({ id: Number(id), name }));
}
