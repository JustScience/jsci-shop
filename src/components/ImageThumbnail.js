import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImageThumbnailWrap = styled.div`
    border: 1px solid ${props => props.isActive ? '#aaa' : '#eee'};
    box-sizing: border-box;
    padding: 2px;
    height: 60px;
    width: 60px;
`

export default function ImageThumbnail({isActive, onClick, image}) {
    const thumbnail = getImage(image.localFile)
    const handleClick = () => {
        onClick(image);
    }

    return (
        <ImageThumbnailWrap 
            onClick={handleClick}
            isActive={isActive}
        >
            <GatsbyImage image={thumbnail} alt="product thumbnail" />
        </ImageThumbnailWrap>
    )
}
