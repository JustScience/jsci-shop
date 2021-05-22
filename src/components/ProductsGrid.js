import React from 'react'
import styled from 'styled-components'
import ProductTile from './ProductTile'

const ProductsGridWrap = styled.section``

export default function ProductsGrid({products}) {
    
    return (
        <ProductsGridWrap>
            {products.map(product => {
                return(
                    <ProductTile 
                        key={product.shopifyId}
                        image={product.images[0]}
                        title={product.title}
                        description={product.description}
                        minPrice={product.priceRange.minVariantPrice.amount}
                        handle={product.handle} 
                    />
                )
            })}
        </ProductsGridWrap>
    )
}
