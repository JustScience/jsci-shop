import React from 'react'
import { graphql } from 'gatsby'
import ProductImageGallery from './ProductImageGallery'

export const query = graphql`
    query ProductQuery($shopifyId: String) {
        product: shopifyProduct(shopifyId: {eq: $shopifyId}) {
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
    }
`;

export default function ProductTemplate({data}) {
    const { title, description } = data.product
    const images = data.product.images

    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <ProductImageGallery images={images} />
        </div>
    )
}
