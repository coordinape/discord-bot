import { gqlBot } from './gqlClients';

export async function findProfile({ profileId }: { profileId: number }): Promise<{
	address: string;
	name: string;
} | null> {
	const { profiles } = await gqlBot('query')({
		profiles: [
			{ where: { id: { _eq: profileId } } },
			{ address: true, name: true },
		],
	});

	if (!profiles || profiles.length === 0) {
		return null;
	}

	if (profiles.length > 1) {
		throw new Error('Something is wrong, please contact coordinape');
	}

	return { address: profiles[0].address, name: String(profiles[0]) };
}
