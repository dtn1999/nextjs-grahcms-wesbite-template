import { gql } from "graphql-request";


export const GET_Page_BY_ID = gql`
 query GetPageById($id: ID!){
  data: page(where: {id: $id}) {
      id
      
    }
 }
`;



export const GET_LAYOUT_REQUEST = gql`
query GetLayoutByLocal($locale:Locale!) {
  data: layouts {
    navigation(locales: [$locale]) {
      logo {
        url
      }
      links:pages {
        label:navigationLabel
        href:slug
      }

      buttons:ctas {
        label
        href
      }
    }
    footer(locales: en) {
      title
      description
      columns{
        id
        title
        pages {
          id
          slug
          label:navigationLabel
        }
        contactCard {
          id
          email
          phoneNumber
          address
          socials {
            url
          }
        }
      }
      secondaryLinks {
        id
        href
        label
        isExternal
      }
    }
  }
}
`