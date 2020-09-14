/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const slash = require('slash');
const { faMapPin } = require('@fortawesome/free-solid-svg-icons');
const { any } = require('prop-types');

exports.createPages = ({ actions, graphql}) => {
    const { createPage } = actions

    return graphql(`
        {
            allContentfulProduct {
                edges {
                    node {
                      path
                    }
                  }
            }
        }
    
    `).then(result => {
        if (result.errors){
            console.log("Error with conetntful data", result.errors)
        }

        const productTemplate = path.resolve('./src/templates/product.js')

        result.data.allContentfulProduct.edges.forEach(product => {
            createPage({
                path: `${product.node.path}`,
                component: slash(productTemplate),
                conetxt:{
                    path: product.node.path,
                },
            })
        })
    }).catch(error => console.log("Error with contentful data", error))
}



 /*    const products = await graphql(`
        {
            allContentfulProduct {
                edges {
                  node {
                    id
                    productName
                    path
                  }
                }
            }
        }
    `) */



/*     products.data.allContentfulProduct.edges.forEach(({node}) => {
        createPage({
            path: node.path,
            component: path.resolve('src/templates/product.js'),
            context: {
                ProductID: node.id,
            },
        })
    }); */

