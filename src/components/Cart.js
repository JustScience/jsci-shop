import React from 'react'
import styled from 'styled-components'
import CartContext from '../context/CartContext'
import { Link } from 'gatsby'

const CartWrap = styled.div``

export default function Cart() {
    const {checkout} = React.useContext(CartContext)

    let totalQuantity = 0
    if(checkout){
        checkout.lineItems.forEach(lineItem => {
            totalQuantity = totalQuantity + lineItem.quantity
        });
    }

    return (
        <Link to="/cart"> 
            <CartWrap>
                {totalQuantity} item(s) 
                $ {checkout?.totalPrice || '0.00'}
            </CartWrap>
        </Link>
    )
}
