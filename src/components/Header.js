import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Cart from './Cart'

const HeaderWrap = styled.header`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 12px;
    width: 100%;
`

export default function Header() {
    return (
        <HeaderWrap>
            <Link to='/'>JSci Shop</Link>
            <Cart />
        </HeaderWrap>
    )
}
