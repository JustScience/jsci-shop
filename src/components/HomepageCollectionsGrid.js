import React from 'react'
import CollectionTile from './CollectionTile'

export default function HomepageCollectionsGrid({collections}) {
    const featuredCollection = collections.find(collection => collection.title === "Featured")
    const standardCollections = collections.filter(collection => collection.title !== "Featured")

    return (
        <div>
            {!!featuredCollection && (
                <CollectionTile 
                    title={featuredCollection.title}
                    description={featuredCollection.description}
                    image={featuredCollection.image}
                />
            )}
            {standardCollections.map(collection => {
                return (
                    <CollectionTile 
                        title={collection.title}
                        description={collection.description}
                        image={collection.image}
                        key={collection.shopifyId} 
                    />
                )
            })}
        </div>
    )
}
