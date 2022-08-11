import { gql } from "graphql-request";

export const EVENTS_PAGE_BLOCKS = gql`
`





export const EVENTS_SLUGS_REQUEST = gql`
    query GetEventsSlugs {
    data: events {
        slug
    }
}
`

export const EVENT_REQUEST = gql`
    query GetSingleEvent($locale: Locale!, $slug: String!) {
    data: event(locales: [$locale], where: { slug: $slug}) {
        slug
        id
        title
        details
        startDate
        endDate
        image(locales: de) {
        url
        width
        height
        }
        description {
            raw
        }
    }

    events(locales: [$locale], first: 3) {
        slug
        id
        title
        details
        startDate
        endDate
        image(locales: de) {
        url
        width
        height
        }
    }

    page(locales: [$locale], where: {slug: "events"}) {
        id
        blocs(locales: [$locale]){
            typename:__typename
            ... on Hero {
                id
                title
                description
                image(locales: en) {
                    url
                }
            }
        }
    }
}
`


export const EVENTS_REQUEST = gql`
    query GetEvents($locale: Locale!) {
    data: events(locales: [$locale]) {
        slug
        id
        title
        details
        startDate
        endDate
        image(locales: en) {
        url
        width
        height
        }
    }
}
`