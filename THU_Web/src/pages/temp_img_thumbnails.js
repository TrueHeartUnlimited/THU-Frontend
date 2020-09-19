
import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";


//So I think this needs to be integrated into the home page and the shop
import layout from "../components/layout"
import SEO from "../components/seo"
import ProductPreview from "../components/productPreview"

//This is the part where stuff is made pretty
const Products = ({data}) => {

    return (
        <layout>
            <SEO title="Products" />
            {data.products.map(product => (
                <ProductPreview
                    title={product.productName}
                    path={product.path}
                    imagefuild={product.productImages[0].fluid}
                    imagesrc={product.productImages[0].fluid.src}
                    imagealt={product.productImages[0]}
                    price={product.price}
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
        products: allContentfulProduct {
            edges {
              node {
                productName
                price
                path
                productImages {
                  fluid{
                      ...GatsbyContentfulFluid
                  }
                }
              }
            }
        }

    }
`;

export default Products;

