import { gql } from "graphql-request";

export const PAGES_SLUG_REQUEST = gql`
query GetPagesSlug{
  data:pages(where: {slug_not_in: ["home", "projects","events"]}) {
    slug
  }
}
`

export const PAGE_REQUEST = gql`
query GetPageBySlug($slug: String!, $locale: Locale!) {
  data: page(locales: [$locale], where: {slug: $slug}) {
    id
    slug
    title
    navigationLabel
    blocs(locales: [$locale]) {
      ... on Carousel {
        typename: __typename
        id
        slides {
          id
          description
          title
          ctas {
            ... on Link {
              id
              isExternal
              label
              href
            }
          }
          image(locales: en) {
            url
          }
        }
      }
      ... on Section {
        typename: __typename
        id
        title
        description
      }
      ... on ProjectsContainer {
        typename: __typename
        id
        projects(locales: [$locale]) {
          id
          slug
          name
          details
          image(locales: en) {
            url
          }
        }
      }
      ... on Hero {
        typename: __typename
        id
        title
        description
        image(locales: en) {
          url
        }
      }
      ... on SectionWithImage {
        typename: __typename
        id
        image(locales: en) {
          url
        }
        title
        description
      }
      ... on AssociationProfileSection {
        typename: __typename
        id
        backgroundImage(locales: en) {
          url
        }
        slogan
        facts {
          id
          title
          description
        }
      }
      ... on JoinUsSection {
        typename: __typename
        id
        bgColor {
          hex
        }
        description
        title
        ctas {
          id
          label
        }
      }

      ... on TeamSection {
        typename: __typename
        id
        title
        people(locales: en) {
          id
          name
          position
          photo(locales: en) {
            url
          }
        }
      }
      ... on SponsorSection {
        typename: __typename
        id
        title
        sponsors {
          id
          name
          description
          link
          logo(locales: en) {
            url
            width
            height
          }
        }
      }

      ... on Grid {
        typename: __typename
        id
        title
        description
        bgColor {
          css
        }
        children(locales: [$locale]) {
          typename: __typename
          ... on Service {
            id
            title
            description
            icon
          }
          ... on Event {
            id
            title
            details
            startDate
            endDate
          }
          ... on Person {
            id
            name
            position
            photo(locales: en) {
              url
            }
          }
          ... on Sponsor {
            id
            name
            description
            link
            logo(locales: en) {
              url
            }
          }
        }
      }
    }
  }
}
`;


export const EVENTS_PAGE_REQUEST = gql`

`;