import fetch from 'node-fetch';

const GraphQL = {
	fetch: async function(operationsDoc: string, operationName: string, variables: Record<string, any>) {
		const result = await fetch(
			process.env.NODE_HASURA_URL,
			{
				method: 'POST',
				body: JSON.stringify({
					query: operationsDoc,
					variables: variables,
					operationName: operationName,
				}),
				headers: {
					'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
					'Hasura-Client-Name': process.env.HASURA_CLIENT_NAME,
				},
			},
		);

		return await result.json();
	},
};

export default GraphQL;