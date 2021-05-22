import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

const ProductTileWrap = styled.div``

export default function ProductTile({title, description, image, minPrice, handle}) {
    const productImage = getImage(image.localFile)
    const productLink = '/products/' + {handle}
    console.log(productImage)

    return (
        <ProductTileWrap>
            <GatsbyImage image={productImage} alt={title} />
            <div>{title}</div>
            <div>{description}</div>
            <div>from $ {parseFloat(minPrice).toFixed(2)}</div>
            <Link to={'/products/' + handle}>View Product</Link>
        </ProductTileWrap>
    )
}
