// import Log from '../utils/Log';
import GraphQL from '../utils/GraphQL';

// TODO logs
// TODO think of a good refactoring to avoid code repetition here in `schema`

const operationsDoc = `
      mutation InsertDiscordRolesCirclesOne ($circle_id: bigint!, $role: String!) {
        insert_discord_roles_circles_one(
          object: {circle_id: $circle_id, role: $role}, 
          on_conflict: {constraint: roles_circles_circle_id_key, update_columns: role}) {
          id
        }
      }
    `;

const graphQLRoleCircleMutation = async function(circleId: number, discordRoleId: string) {
	return GraphQL.fetch(operationsDoc, 'InsertDiscordRolesCirclesOne', { circle_id: circleId, role: discordRoleId });
};

export default graphQLRoleCircleMutation;