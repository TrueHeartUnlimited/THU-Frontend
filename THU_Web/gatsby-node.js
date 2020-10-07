const path = require('path');
const slash = require('slash');
const { faMapPin } = require('@fortawesome/free-solid-svg-icons');
const { any } = require('prop-types');
const { resolve } = require('path');

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
                context:{
                    path: product.node.path,
                },
            })
        })
    }).catch(error => console.log("Error with contentful data", error))
}


