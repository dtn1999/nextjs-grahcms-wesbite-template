import { gql } from "graphql-request";

export const PROJECTS_HOME_REQUEST = gql`
    query GetProject {
        data:projects {
            id
            slug
            name
            details
            image(locales: [en]) {
            url
            }
            
        }
    }
`