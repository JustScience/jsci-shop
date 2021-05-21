import React from 'react'
import { graphql } from 'gatsby'
import ProductImageGallery from './ProductImageGallery'
import CartContext from '../context/CartContext'

export const query = graphql`
    query ProductQuery($shopifyId: String) {
        product: shopifyProduct(shopifyId: {eq: $shopifyId}) {
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
    }
`;

export default function ProductTemplate({data}) {
    const { title, description, shopifyId } = data.product
    const images = data.product.images

    const {getProductById} = React.useContext(CartContext)

    React.useEffect(() => {
        getProductById(shopifyId).then((result) => {
            console.log(result)
        })
    },[getProductById, shopifyId])

    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <ProductImageGallery images={images} />
        </div>
    )
}
