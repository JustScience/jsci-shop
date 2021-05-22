import React from 'react'
import CartContext from '../context/CartContext'

export default function RemoveLineItem({lineItemId}) {
    const {removeLineItem} = React.useContext(CartContext)

    const handleClick = () => {
        removeLineItem(lineItemId)
    }

    return (
        <div onClick={handleClick}>
            X
        </div>
    )
}
