import { gqlBot } from './gqlClients';

export type Circle = {
	name: string;
	id: number;
};

export async function getCircles(): Promise<Circle[]> {
	const { circles } = await gqlBot('query')({
		circles: [
			{ where:{ users: { profile: { id: { _eq: 1 } }, role: { _eq: 1 } } } },
			{ id: true, name: true },
		],
	});

	return circles.map(({ id, name }) => ({ id: Number(id), name }));
}
