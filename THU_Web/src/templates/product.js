import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

//post.relationships.field_product_image.localFile.publicURL
//'/static/1134a3571a054aa5a72be5beca5577c7/AdeleClutchpurpleandpink.jpg'

const Product = ({data}) => {
    const post = data.nodeProduct;

    return(
        <Layout>
            <h1>{post.title}</h1>
            <img
                src={post.relationships.field_product_image[0].localFile.publicURL}
                alt={post.field_product_image.alt}
            />
            <div dangerouslySetInnerHTML={{__html: post.body.processed}}
            />
            <p>{post.field_size}</p>
            <p>{post.field_strap_size}</p>
            <p>{post.field_price}</p>
            <p>{post.field_material}</p>
            <p>{post.relationships.field_colour[1].name}</p>
        </Layout>
    );
};

Product.propTypes = {
    data: PropTypes.object.isRequired,
};

export const query = graphql`
    query($ProductID: String!){
        nodeProduct(id: {eq: $ProductID }){
            id
            title
            body {
                processed
                summary
            }
            field_size
            field_strap_size
            field_price
            field_material
            field_product_image {
                alt
            }
            relationships {
                field_product_image {
                    localFile {
                        publicURL
                    }
                    filename
                }
                field_colour {
                    name
                }
            }
        }
    }
`;

export default Product;