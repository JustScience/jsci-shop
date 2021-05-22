import {graphql} from 'gatsby'

export const productFields = graphql`
    fragment ShopifyProductFields on ShopifyProduct {
        shopifyId
        title
        description
        images {
            id
            localFile {
                childImageSharp {
                    gatsbyImageData(width:240, height:240)
                }
            }
        }
    }
`