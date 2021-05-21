import React from 'react'
import styled from 'styled-components'
import CartContext from '../context/CartContext'

const Input = styled.input`
    /* border: 2px solid red; */
`

export default function ProductQuantityAdder({variantId, available}) {
    const [quantity, setQuantity] = React.useState(1)
    const {updateLineItem} = React.useContext(CartContext)

    const handleQuantityChange = (e) => {
        setQuantity(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        updateLineItem({variantId, quantity: parseInt(quantity, 10)})
    }
    return (
        <div>
            <span>Quantity</span>
            <form onSubmit={handleSubmit}>
                <Input 
                    disabled={!available}
                    type="number" 
                    min="1"
                    step="1"
                    value={quantity} 
                    onChange={handleQuantityChange} 
                />
                <button 
                    type="submit" 
                    disabled={!available}
                >
                    Add to Cart
                </button>
            </form>
        </div>
    )
}
