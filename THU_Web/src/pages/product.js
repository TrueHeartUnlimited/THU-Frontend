import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons"
import { faStar as fasStar, faStarHalfAlt, faImage } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="(Product Name)" />
    <div class="product-header"></div>
    <div class="container">
        <div class="flex space_between" id="product">
            <div id="product-image">
                <FontAwesomeIcon icon={faImage}/>
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
                    <h3>$320.00</h3>
                    <p>This handbag is fully lined in kangaroo leather with an internal zip pocket. It comes with two interchangeable straps in different length.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nibh sed elimttis adipiscing. Fusce in hendrerit purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nibh sed elimttis adipiscing. Fusce in hendrerit purus.</p>
                </div>
                <div id="product-colour">
                    <p>Colour:</p>
                    <Link to="/">Custom Colour</Link>
                </div>
            </div>
        </div>
        <div id="product-table">
            <ul class="nav-tabs">
                <li class="active"><Link to="#productInfo">Information</Link></li>
                <li><Link to="#reviews">Reviews</Link></li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="productInfo">
                    <table>
                        <tbody>
                            <tr>
                                <th>Size:</th>
                                <td>30cm x 30cm</td>
                            </tr>
                            <tr>
                                <th>Strap Size:</th>
                                <td>61cm/121cm</td>
                            </tr>
                            <tr>
                                <th>Colours:</th>
                                <td>Orange, Blue</td>
                            </tr>
                            <tr>
                                <th>Material</th>
                                <td>100% Kangaroo Leather</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="tab-pane" id="reviews">
                    <div class="review">
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim ornare nisi, vitae mattis nulla ante id dui.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </Layout>
)

export default SecondPage
