import fetch from 'node-fetch';
import Log from '../utils/Log';

const graphQLQueryObj = {
    fetchGraphQL: async function (operationsDoc: string, operationName: string, variables: Record<string, any>) {
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
      
    operation: `
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
      `;
      
    fetchMyCircles: function () {
        return this.fetchGraphQL(this.operation, 'MyCircles', {});
    }
}

const graphQLCirclesQuery = graphQLQueryObj.fetchMyCircles()
  .then(({ data, errors }) => {
    if (errors) {
      Log.error(errors);
    }
    Log.log(data);
  })
  .catch((error: any) => {
    Log.error(error);
  });

  export { graphQLQueryObj, graphQLCirclesQuery };