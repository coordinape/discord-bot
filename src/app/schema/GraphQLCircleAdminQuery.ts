// @nonsense, I refactored these methods here in schema to make the graphql call reusable, 
// but let me know if you want to keep the pattern you made

import GraphQL from '../utils/GraphQL';

const operationsDoc = `
      query GetCircleAdminByProfileId ($profile_id: bigint!) {
        users(where: {profile: {id: {_eq: $profile_id}}, role: {_eq: 1}}) {
          circle_id
        }
      }
    `;

const graphQLCircleAdminQuery = async function(profileId: number) {
	return GraphQL.fetch(operationsDoc, 'GetCircleAdminByProfileId', { profile_id: profileId });
};

export default graphQLCircleAdminQuery;