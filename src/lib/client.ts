import {GraphQLClient} from "graphql-request"

const cmsEndpoint = String(process.env.GRAPH_CMS_ENDPOINT)
const authToken = String(process.env.GRAPH_CMS_AUTH_TOKEN)
const previewAuthToken = String(process.env.GRAPH_CMS_AUTH_TOKEN_PREVIEW)

export const createHygraphClient = (preview:boolean) => {
    return new GraphQLClient(cmsEndpoint, {
        headers: {
            Authorization: `Bearer ${preview ? previewAuthToken: authToken}`
        }
    })
}
