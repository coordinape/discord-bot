import { graphql } from './gql/gql';

export const getDiscordUsersQueryDocument = graphql(`
    query getDiscordUsers($userSnowflake: String!) {
      discord_users(where: { user_snowflake: { _eq: $userSnowflake } }) {
        id
        user_snowflake
      }
    }
`);
