import { graphql } from './gql/gql';

export const getInitQueryDocument = graphql(`
    query getInit {
        organizations {
            id
            name
            circles {
                id
                name
            }
        }
    }
`);
