import fetch from 'node-fetch';

const GraphQL = {
	fetch: async function(operationsDoc: string, operationName: string, variables: Record<string, any>) {
		try {
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

			const res = await result.json();
			if(res.errors) {
				throw Error(`node-fetch error. data: ${res.data}`);
			}
			return res;
		} catch(e) {
			throw Error(`Hasura connection error: ${e}`);
		}
	},
};

export default GraphQL;