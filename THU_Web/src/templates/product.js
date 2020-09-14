import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons"
import { faStar as fasStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons" 
import Img from "gatsby-image"

import Tabs from "../components/tabs.js"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Product = ({ data }) => {

    return(
        <Layout>
            <SEO title="testing"/> 
            <div class="product-header"></div>
            <div class="container">
                <div class="flex space_between" id="product">
                    <div id="product-image">
                        {data.product.productImages.map(image => <Img fluid = {image.fluid} key = {image.fluid.src} alt={image.title}></Img>)}
                    </div>
                    <div id="product-info">
                        <div id="product-name-rating">
                            <h2>{data.product.productName}</h2>
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
                            <h3>${data.product.price}</h3>
                            <div dangerouslySetInnerHTML={{__html: data.product.description.description}}/>
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
                                        <td>{data.product.sizing}</td>
                                    </tr>
                                    <tr>
                                        <th>Strap Size:</th>
                                        <td>61cm/121cm</td>
                                    </tr>
                                    <tr>
                                        <th>Colours:</th>
                                        <td>{data.product.colours.map(colour => <p>{colour}</p>)}</td>
                                    </tr>
                                    <tr>
                                        <th>Material</th>
                                        <td>{data.product.material}</td>
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
    query($path: String!){
        product: contentfulProduct(path: {eq: $path }){
            category
            collection
            colours
            customisable
            productName
            productType
            size
            sizing
            id
            material
            price
            description {
              description
            }
            productImages {
              fluid {
                ...GatsbyContentfulFluid
              }
            }

        }
    }
`;

export default Product;
