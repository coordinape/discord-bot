import fetch from 'node-fetch';
import Log from '../utils/Log';

const graphQLEpochQueryObj = {
	fetchGraphQLEpoch: async function(operationsDoc: string, operationName: string, variables: Record<string, any>) {
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
  
	operationsDoc: `
        query MyEpochs {
            epochs(order_by: {end_date: asc}) {
                id
                circle {
                    name
                }
                end_date
                start_date
            }
        }
    `,
  
	fetchMyEpochs: function() {
		return this.fetchGraphQLEpoch(this.operationsDoc, 'MyEpochs', {});
	},
};
  
const graphQLEpochQuery = graphQLEpochQueryObj.fetchMyEpochs()
	.then(({ data, errors }) => {
		if (errors) {
			Log.error(errors);
		}
		Log.log(data);
	}).catch((error: any) => {
		Log.error(error);
	});
  
export { graphQLEpochQueryObj, graphQLEpochQuery };