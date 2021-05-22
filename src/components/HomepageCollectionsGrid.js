import React from 'react'
import CollectionTile from './CollectionTile'

export default function HomepageCollectionsGrid({collections}) {
    const dealsCollection = collections.find(collection => collection.title === "Deals")
    const standardCollections = collections.filter(collection => collection.title !== "Deals")

    return (
        <div>
            {!!dealsCollection && (
                <CollectionTile 
                    title={dealsCollection.title}
                    description={dealsCollection.description}
                    image={dealsCollection.image}
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
