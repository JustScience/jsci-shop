import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const CollectionTileWrap = styled.div`
`

export default function CollectionTile({title, description, image}) {
    const collectionImage = getImage(image.localFile)

    return (
        <CollectionTileWrap>
            <GatsbyImage image={collectionImage} alt={title} />
            <h1>{title}</h1>
            <p>{description}</p>
        </CollectionTileWrap>
    )
}
