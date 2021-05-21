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
    const [product, setProduct] = React.useState(null)
    const [selectedVariant, setSelectedVariant] = React.useState(null)

    React.useEffect(() => {
        getProductById(shopifyId).then((result) => {
            setProduct(result)
            setSelectedVariant(result.variants[0])
        })
    },[getProductById, shopifyId, setProduct])

    const handleVariantChange = (e) => {
        setSelectedVariant(product && product.variants.find(v => v.id === e.target.value))
    }

    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            {product && product.availableForSale &&
                <>
                    <strong>File Types: </strong>
                    <select onBlur={handleVariantChange}>
                        {product && product.variants.map(v => (
                            <option 
                                key={v.id}
                                value={v.id}
                            >
                                {v.title}
                            </option>
                        ))}
                    </select>
                    {!!selectedVariant && 
                        <div>
                            <span>$</span>{selectedVariant.price}
                        </div>
                    }
                </>
            }
            <ProductImageGallery images={images} />
        </div>
    )
}
