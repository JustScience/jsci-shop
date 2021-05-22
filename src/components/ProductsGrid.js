import React from 'react'
import styled from 'styled-components'

const ProductsGridWrap = styled.section``

export default function ProductsGrid({products}) {
    console.log(products)
    return (
        <ProductsGridWrap>
            {products.map(product => {
                return(
                    <div key={product.shopifyId}>
                        {product.title}
                    </div>
                )
            })}
        </ProductsGridWrap>
    )
}
