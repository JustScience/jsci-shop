import React from 'react'
import styled from 'styled-components'
import CartContext from '../context/CartContext'
import QuantityAdjuster from '../components/QuantityAdjuster'
import RemoveLineItem from '../components/RemoveLineItem'

const CartItem = styled.div`
    border-bottom: 1px solid #999;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const CartFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export default function CartContents() {
    const {checkout, updateLineItem} = React.useContext(CartContext)
    console.log(checkout?.lineItems)

    const handleAdjustQuantity = ({quantity, variantId}) => {
        updateLineItem({quantity, variantId})
    }

    return (
        <section>
            <h1>Shopping Cart</h1>
            {checkout?.lineItems?.map(item => (
                <CartItem key={item.variant.id}>
                    <div>
                        {item.title}
                    </div>
                    <div>
                        {item.variant.title === 'Default Title' ? '' : item.variant.title}
                    </div>
                    <div>
                        $ {item.variant.price}
                    </div>
                    <div>
                        <QuantityAdjuster item={item} onAdjust={handleAdjustQuantity} />
                    </div>
                    <div>
                        $ {(item.quantity * item.variant.price).toFixed(2)}
                    </div>
                    <div>
                        <RemoveLineItem lineItemId={item.id} />
                    </div>
                </CartItem>
            ))}
            <CartFooter><strong>Total: </strong><span>$ {checkout?.totalPrice}</span></CartFooter>
        </section>
    )
}
