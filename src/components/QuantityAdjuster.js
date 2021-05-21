import React from 'react'
import styled from 'styled-components'

const QuantityAdjusterWrap = styled.div``

export default function QuantityAdjuster({item, onAdjust}) {
    const {quantity} = item

    const handleDecrementQuantity = () => {
        onAdjust({variantId: item.vairant.id, quantity: -1})
    }
    const handleIncrementQuantity = () => {
        onAdjust({variantId: item.variant.id, quantity: 1})
    }

    return (
        <QuantityAdjusterWrap>
            <span onClick={handleDecrementQuantity}>-</span>
            {quantity}
            <span onClick={handleIncrementQuantity}>+</span>
        </QuantityAdjusterWrap>
    )
}
