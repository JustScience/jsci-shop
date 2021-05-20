const path = require('path');

exports.createPages = async ({graphql, actions}) => {
    const {data} = await graphql(`
        query Products {
            allShopifyProduct {
                edges {
                    node {
                        handle
                        shopifyId
                    }
                }
            }
        }
    `)
    data.allShopifyProduct.edges.forEach(({node}) => {
        actions.createPage({
            path: '/products/' + node.handle,
            component: path.resolve('src/templates/ProductTemplate.js'),
            context: {shopifyId: node.shopifyId,}
        })
    })
};
