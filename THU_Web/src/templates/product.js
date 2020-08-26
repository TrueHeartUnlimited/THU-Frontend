import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons"
import { faStar as fasStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons"

import Tabs from "../components/tabs.js"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Product = ({data}) => {
    const post = data.nodeProduct;

    return(
        <Layout>
            <SEO title="(Product Name)" />
            <div class="product-header"></div>
            <div class="container">
                <div class="flex space_between" id="product">
                    <div id="product-image">
                        <img 
                            src={post.relationships.field_product_image[0].localFile.publicURL}
                            alt={post.field_product_image[0].alt}
                            width="100%"
                        />
                    </div>
                    <div id="product-info">
                        <div id="product-name-rating">
                            <h2>Handbag</h2>
                            <p>2 Reviews</p>
                            <p class="rating">
                                <FontAwesomeIcon icon={ fasStar }/>
                                <FontAwesomeIcon icon={ fasStar }/>
                                <FontAwesomeIcon icon={ fasStar }/>
                                <FontAwesomeIcon icon={ faStarHalfAlt }/>
                                <FontAwesomeIcon icon={ farStar }/>
                            </p>
                        </div>
                        <div id="product-price-description">
                            <h3>${post.field_price}</h3>
                            <div dangerouslySetInnerHTML={{__html: post.body.processed}}/>
                        </div>
                        <div class="flex space_between" id="product-customisation">
                            <div class="customisation">
                                <p>Colour: Blue</p>
                                <p><Link to="/">Custom Colour</Link></p>
                                <div class="flex" id="swatches">
                                    <Link to="">
                                        <dl class="swatch-dl">
                                            <dt class="swatch-dt selected">
                                                <span class="swatch-color blue-swatch">
                                                    <span class="swatch-color"></span>
                                                </span>
                                            </dt>
                                            <dd class="text-color">
                                                <div class="color-alt">
                                                    <span class="text-color">Blue</span>
                                                </div>
                                            </dd>
                                        </dl>
                                    </Link>
        
                                    <Link to="">
                                        <dl class="swatch-dl">
                                            <dt class="swatch-dt">
                                                <span class="swatch-color orange-swatch">
                                                    <span class="swatch-color"></span>
                                                </span>
                                            </dt>
                                            <dd class="text-color">
                                                <div class="color-alt">
                                                    <span class="text-color">Orange</span>
                                                </div>
                                            </dd>
                                        </dl>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="product-table">
                    <Tabs class="tab-content">
                        <div class="tab-pane active" label="Product Information">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Size:</th>
                                        <td>{post.field_size[0]}cm x {post.field_size[1]}cm</td>
                                    </tr>
                                    <tr>
                                        <th>Strap Size:</th>
                                        <td>61cm/121cm</td>
                                    </tr>
                                    <tr>
                                        <th>Colours:</th>
                                        <td>{post.relationships.field_colour[0].name}</td>
                                    </tr>
                                    <tr>
                                        <th>Material</th>
                                        <td>{post.field_material}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-pane" label="Reviews" id="reviews">
                            <div class="review flex space_between">
                                <div class="name-rating">
                                    <p>Jane Doe</p>
                                    <p class="rating">
                                        <FontAwesomeIcon icon={ fasStar }/>
                                        <FontAwesomeIcon icon={ fasStar }/>
                                        <FontAwesomeIcon icon={ fasStar }/>
                                        <FontAwesomeIcon icon={ faStarHalfAlt }/>
                                        <FontAwesomeIcon icon={ farStar }/>
                                    </p>
                                </div>
                                <div class="review-message">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim ornare nisi, vitae mattis nulla ante id dui.</p>
                                </div>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
      </Layout>
    );
};

Product.propTypes = {
    data: PropTypes.object.isRequired,
};

export const data = graphql`
    query($ProductID: String!){
        nodeProduct(id: {eq: $ProductID }){
            id
            title
            body {
                processed
                summary
            }
            field_size
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
