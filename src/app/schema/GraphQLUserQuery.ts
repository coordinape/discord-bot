import fetch from 'node-fetch';
import Log from '../utils/Log';

const graphQLUserQueryObj = {
	fetchGraphQLUser: async function(operationsDoc: string, operationName: string, variables: Record<string, any>) {
		const result = await fetch('undefined', {
			method: 'POST',
			body: JSON.stringify({
				query: operationsDoc,
				variables,
				operationName,
			}),
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