import { gqlBot } from './gqlClients';

export async function getLinkedCircles(): Promise<number[]> {
	const { discord_circle_api_tokens } = await gqlBot('query')({
		discord_circle_api_tokens: [
			{},
			{ circle_id: true },
		],
	});

	return discord_circle_api_tokens.map(({ circle_id }) => Number(circle_id));
}
