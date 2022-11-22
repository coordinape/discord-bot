import { graphql } from './gql/gql';

export const deleteDiscordUserMutationDocument = graphql(`
    mutation deleteDiscordUsers($userSnowflake: String!) {
      delete_discord_users(where: { user_snowflake: { _eq: $userSnowflake } }) {
        affected_rows
      }
    }
`);
