import fetch from 'node-fetch';

function fetchGraphQL(operationsDoc: string, operationName: string, variables: Record<string, any>) {
	return fetch('undefined', {
		method: 'POST',
		body: JSON.stringify({
			query: operationsDoc,
			variables,
			operationName,
		}),
	}).then(result => result.json());
}
  
const operation = `
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
  
function fetchMyCircles() {
	return fetchGraphQL(operation, MyCircles, {});
}
  
fetchMyCircles()
	.then(({ data, errors }) => {
		if (errors) {
			console.error(errors);
		}
		console.log(data);
	})
	.catch(error => {
		console.error(error);
	});