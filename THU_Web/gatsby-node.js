/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const { faMapPin } = require('@fortawesome/free-solid-svg-icons');
const { any } = require('prop-types');

exports.createPages = async({ actions, graphql}) => {
    const { createPage } = actions;

    const products = await graphql(`
        {
            allNodeProduct {
                nodes {
                    id
                    title
                    path {
                        alias
                    }
                }
            }
        }
    `)

    products.data.allNodeProduct.nodes.map(productData => 
        createPage({
            path: productData.path.alias,
            component: path.resolve('src/templates/product.js'),
            context: {
                ProductID: productData.id,
            },
        })
    );
}