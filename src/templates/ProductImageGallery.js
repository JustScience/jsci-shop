import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ImageThumbnail from '../components/ImageThumbnail'

const ProductImageGalleryWrap = styled.section`
    max-width: 240px;
`
const ThumbnailGalleryWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
`


export default function ProductImageGallery({images}) {
    const [activeImageThumbnail, setActiveImageThumbnail] = React.useState(
        images[0]
    )
    const mainImage = getImage(activeImageThumbnail.localFile)

    const handleClick = image => {
        setActiveImageThumbnail(image)
    }

    return (
        <ProductImageGalleryWrap>
            <GatsbyImage image={mainImage} alt="Product Feature" />
            <ThumbnailGalleryWrap>
                {images.map(image => {
                    return (
                        <ImageThumbnail 
                            key={image.id} 
                            image={image}
                            alt="Product Thumbnail"
                            isActive={activeImageThumbnail.id === image.id}
                            onClick={handleClick}
                        />
                    )
                })}
            </ThumbnailGalleryWrap>
        </ProductImageGalleryWrap>
    )
}
