// import Log from '../utils/Log';
import GraphQL from '../utils/GraphQL';

// TODO logs
// TODO think of a good refactoring to avoid code repetition here in `schema`

const operationsDoc = `
      query GetProfileByDiscordId ($user_snowflake: String!) {
        discord_users(where: {user_snowflake: {_eq: $user_snowflake}}) {
          profile {
            id
          }
        }
      }
    `;

const graphQLDiscordProfileQuery = async function(discordUserId: string) {
	return GraphQL.fetch(operationsDoc, 'GetProfileByDiscordId', { user_snowflake: discordUserId });
};

export default graphQLDiscordProfileQuery;