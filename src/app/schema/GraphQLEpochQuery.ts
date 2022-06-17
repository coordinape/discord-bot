import fetch from 'node-fetch';
import Log from '../utils/Log';

const graphQLEpochQueryObj = {
	fetchGraphQLEpoch: async function(operationsDoc: string, operationName: string, variables: Record<string, any>) {
		const result = await fetch(
			'https://coordinape-staging.hasura.app/v1/graphql',
			{
				method: 'POST',
				body: JSON.stringify({
					query: operationsDoc,
					variables: variables,
					operationName: operationName,
				}),
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