import {graphql} from 'gatsby'

export const productFields = graphql`
    fragment ShopifyProductFields on ShopifyProduct {
        shopifyId
        handle
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
        priceRange {
            minVariantPrice {
                amount
            }
        }
    }
`