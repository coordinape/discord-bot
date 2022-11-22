/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n    mutation deleteDiscordUsers($userSnowflake: String!) {\n      delete_discord_users(where: { user_snowflake: { _eq: $userSnowflake } }) {\n        affected_rows\n      }\n    }\n": types.DeleteDiscordUsersDocument,
    "\n    query getCircles {\n        circles {\n            id\n            name\n            users {\n                address\n                name\n                role\n            }\n        }\n    }\n": types.GetCirclesDocument,
    "\n    query getDiscordUsers($userSnowflake: String!) {\n      discord_users(where: { user_snowflake: { _eq: $userSnowflake } }) {\n        id\n        user_snowflake\n      }\n    }\n": types.GetDiscordUsersDocument,
    "\n    query getInit {\n        organizations {\n            id\n            name\n            circles {\n                id\n                name\n            }\n        }\n    }\n": types.GetInitDocument,
    "\n    query getOrganizations {\n        organizations {\n            id\n            name\n        }\n    }\n": types.GetOrganizationsDocument,
};

export function graphql(source: "\n    mutation deleteDiscordUsers($userSnowflake: String!) {\n      delete_discord_users(where: { user_snowflake: { _eq: $userSnowflake } }) {\n        affected_rows\n      }\n    }\n"): (typeof documents)["\n    mutation deleteDiscordUsers($userSnowflake: String!) {\n      delete_discord_users(where: { user_snowflake: { _eq: $userSnowflake } }) {\n        affected_rows\n      }\n    }\n"];
export function graphql(source: "\n    query getCircles {\n        circles {\n            id\n            name\n            users {\n                address\n                name\n                role\n            }\n        }\n    }\n"): (typeof documents)["\n    query getCircles {\n        circles {\n            id\n            name\n            users {\n                address\n                name\n                role\n            }\n        }\n    }\n"];
export function graphql(source: "\n    query getDiscordUsers($userSnowflake: String!) {\n      discord_users(where: { user_snowflake: { _eq: $userSnowflake } }) {\n        id\n        user_snowflake\n      }\n    }\n"): (typeof documents)["\n    query getDiscordUsers($userSnowflake: String!) {\n      discord_users(where: { user_snowflake: { _eq: $userSnowflake } }) {\n        id\n        user_snowflake\n      }\n    }\n"];
export function graphql(source: "\n    query getInit {\n        organizations {\n            id\n            name\n            circles {\n                id\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query getInit {\n        organizations {\n            id\n            name\n            circles {\n                id\n                name\n            }\n        }\n    }\n"];
export function graphql(source: "\n    query getOrganizations {\n        organizations {\n            id\n            name\n        }\n    }\n"): (typeof documents)["\n    query getOrganizations {\n        organizations {\n            id\n            name\n        }\n    }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;