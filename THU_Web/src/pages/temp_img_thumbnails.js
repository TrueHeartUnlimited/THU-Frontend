import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

//So I think this needs to be integrated into the home page and the shop 
import layout from "../components/layout"
import SEO from "../components/seo"
import ProductPreview from "../components/productPreview"

//This is the part where stuff is made pretty 
const Products = ({data}) => {
    const products = data.allNodeProduct.nodes;

    return (
        <layout>
            <SEO title="Products" />
            <h1> Products</h1>
            {products.map(product => (
                <ProductPreview
                    key={product.id}
                    title={product.title}
                    path={product.path.alias}
                    coverimage={product.relationships.field_product_image[0].localFile.publicURL}
                    previewimage={product.relationships.field_product_image[1].localFile.publicURL}
                    coveralt={product.field_product_image[0].alt}
                    previewalt={product.field_product_image[1].alt}
                    price={product.field_price}
                    colour={product.relationships.field_color}
                />
            ))}
        </layout>
    )

}

Products.propTypes = {
    data: PropTypes.object.isRequired,
};

export const data = graphql `

    {
        nodeHomePage {
            body {
              processed
            }
            title
            field_main_images {
              alt
            }
            relationships {
              field_main_images {
                localFile {
                  publicURL
                }
              }
            }
        }
    }
`;

export default Products;