import fetch from 'node-fetch';
import Log from '../utils/Log';

const graphQLUserQueryObj = {
	fetchGraphQLUser: async function(operationsDoc: string, operationName: string, variables: Record<string, any>) {
		const result = await fetch(process.env.NODE_HASURA_URL, {
			method: 'POST',
			body: JSON.stringify({
				query: operationsDoc,
				variables,
				operationName,
			}),
			headers: {
				'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
				'Hasura-Client-Name': 'discord-serverless-bot',
			},
		});
		return await result.json();
	},
      
	operationsDoc: `
        query MyCircles {
            circles {
                name
                users {
                    id
                    name
                    profile {
                        discord_username
                    }
                }
            }
        }
      `,
      
	fetchMyCircles: function() {
		return this.fetchGraphQLUser(this.operationsDoc, 'MyCircles', {});
	},
};

const graphQLCirclesQuery = graphQLUserQueryObj.fetchMyCircles()
	.then(({ data, errors }) => {
		if (errors) {
			Log.error(errors);
		}
		Log.log(data);
	}).catch((error: any) => {
		Log.error(error);
	});

export { graphQLUserQueryObj, graphQLCirclesQuery };