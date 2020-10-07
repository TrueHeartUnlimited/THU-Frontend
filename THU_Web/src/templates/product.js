import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { graphql, Link, StaticQuery } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons"
import { faStar as fasStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons"
import Img from "gatsby-image"
import {connect} from "react-redux"

import Tabs from "../components/tabs.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {addToCartMessage} from "../store/actions"

const mapDispatchToProps = {
  addToCart: product => addToCartMessage(product, 1)
};

//{data.product.productImages.map(image => <Img fluid = {image.fluid} key = {image.fluid.src} alt={image.title}></Img>)}

const Product = ({ addToCart, data }) => {
    return(
        <Layout>
            <SEO title={data.product.productName}/>
            <div class="product-header"></div>
            <div class="container">
                <div class="flex space_between" id="product">
                    <div id="product-image">

                    </div>
                    <div id="product-info">
                        <div id="product-name-rating">
                            <h2>{data.product.productName}</h2>
                        </div>
                        <div id="product-price-description">
                            {data.product.price2 != null
                              ? <h3>${data.product.price}-{data.product.price2}</h3>
                              : <h3>${data.product.price}</h3>
                            }
                            <div dangerouslySetInnerHTML={{__html: data.product.description.description}}/>
                        </div>
                        <div id="add-invoice">
                          <button onClick={()=> addToCart(data.product)}>Add to cart</button>
{/*                             <form>
                                <input type="button" class="quantity-change" value="-"/>
                                <input type="text" class="qty" value="1"/>
                                <input type="button" class="quantity-change" value="+"/>
                                <input type="submit" value="Update Invoice" class="btn submit table-submit"/>
                            </form> */}
                        </div>
                        <div class="flex space_between" id="product-customisation">
                            <div class="customisation">
                              {data.product.customisable === true &&
                                <p><Link to="/">Custom Colour</Link></p>
                              }
                            </div>
                        </div>
                    </div>
                </div>
                <div id="product-table">
                    <Tabs class="tab-content">
                        <div class="tab-pane active" label="Product Information">
                            <table class="product-table">
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
                        <div class="tab-pane" label="Customisation">
                            <table class="product-table">
                                <tr>
                                    <th>Colour</th>
                                    <td class="flex" id="swatches">
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
                                    </td>
                                </tr>
                                <tr>
                                    <th>Strap Length</th>
                                    <td>
                                        <ul>
                                            <li>Strap Length 1</li>
                                            <li>Strap Length 2</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>
                            <div class="flex space_between">
                                <p id="customisation">Bag not perfect? Get it customised further. Contact us to get exactly what you want</p>
                                <p style={{marginTop:"10px"}}><Link to="/custom" class="btn" id="custom-btn">Get Custom</Link></p>
                            </div>
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
            style
            size
            sizing
            id
            material
            price
            price2
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

export default connect(null, mapDispatchToProps)(Product)
