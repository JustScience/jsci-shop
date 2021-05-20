import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'

export const query = graphql`
    query ProductQuery($shopifyId: String) {
        product: shopifyProduct(shopifyId: {eq: $shopifyId}) {
            title
            description
            images {
                localFile {
                    childImageSharp {
                        gatsbyImageData(width:300)
                    }
                }
            }
        }
    }
`;

export default function ProductTemplate({data}) {
    const { title, description } = data.product
    const image = getImage(data.product.images[0].localFile)
    console.log(data)
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <GatsbyImage image={image} alt="product shot" />
        </div>
    )
}
