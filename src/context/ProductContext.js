import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  # fragment ProductTileFields on ShopifyProduct {
  #   handle
  #   priceRange {
  #     minVariantPrice {
  #       amount
  #     }
  #   }
  # }
  {
    # allShopifyProduct {
    #   edges {
    #     node {
    #       ...ShopifyProductFields
    #       ...ProductTileFields
    #     }
    #   }
    # }
    allShopifyCollection(sort: { fields: title, order: ASC }) {
      edges {
        node {
          products {
            shopifyId
            handle
            title
            description
            images {
                id
                localFile {
                    childImageSharp {
                        gatsbyImageData(width:240, height:240)
                    }
                }
            }
            priceRange {
                minVariantPrice {
                    amount
                }
            }
            # ...ShopifyProductFields
            # ...ProductTileFields
          }
          title
          description
          shopifyId
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width:240, height:240)
              }
            }
          }
        }
      }
    }
  }
`;

const defaultState = {
  products: [],
};

const ProductContext = React.createContext(defaultState);
export default ProductContext;

export function ProductContextProvider({ children }) {
  const { allShopifyCollection, allShopifyProduct } = useStaticQuery(query);

  return (
    <ProductContext.Provider
      value={{
        // products: allShopifyProduct.edges.map(({ node }) => node) || [],
        collections: allShopifyCollection.edges.map(({ node }) => node) || [],
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
