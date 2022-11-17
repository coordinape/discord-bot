import { graphql } from './gql/gql';

export const getOrganizationsQueryDocument = graphql(`
    query getOrganizations {
        organizations {
            id
            name
        }
    }
`);