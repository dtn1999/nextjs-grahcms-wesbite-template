import { GRAPHCMS_ENDPOINT, GRAPHCMS_TOKEN, GRAPHCMS_TOKEN_PREVIEW } from "@app/utils/envVariables"
import {GraphQLClient, Variables} from "graphql-request"

export const createHygraphClient = (preview:boolean) => {
    return new GraphQLClient(GRAPHCMS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${preview ? GRAPHCMS_TOKEN_PREVIEW: GRAPHCMS_TOKEN}`
        }
    })
}

export const hygraph = createHygraphClient(false)

export function hygraphFetcher(query:string, variables?:Variables){
    console.log(query)
   return hygraph.request(query, variables)
}
