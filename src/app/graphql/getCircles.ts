import { graphql } from './gql/gql';

export const getCirclesQueryDocument = graphql(`
    query getCircles {
        circles {
            id
            name
            users {
                address
                name
                role
            }
        }
    }
`);