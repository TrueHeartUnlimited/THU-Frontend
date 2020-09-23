import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons"
import { faStar as fasStar, faStarHalfAlt, faImage } from "@fortawesome/free-solid-svg-icons"

import Tabs from "../components/tabs.js"
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
                    <h2>Leila Handbag</h2>
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
            </div>
        </div>
        <div id="product-table">
            <Tabs class="tab-content">
                <div class="tab-pane active" label="Customisation">
                    <table class="product-table">
                        <tbody>
                            <tr>
                            <th>Colour:</th>
                                <td>
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
                                </td>
                            </tr>
                            <tr>
                                <th>Strap Length:</th>
                                <td>
                                    <ul>
                                        <li>Length 1</li>
                                        <li>Length 2</li>
                                        <li>Length 3</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="flex space_between">
                        <p id="customisation">Bag not perfect? Get it customised further. Contact us to get exactly what you want</p>
                        <p style={{marginTop:"10px"}}><Link to="/custom" class="btn" id="custom-btn">Get Custom</Link></p>
                    </div>
                </div>
                <div class="tab-pane active" label="Product Information">
                    <table class="product-table">
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
                <div class="tab-pane" label="Reviews" id="reviews">
                    <div class="review flex space_between">
                        <div class="name-rating">
                            <p>Jane Doe</p>
                            <p class="rating">
                                <FontAwesomeIcon icon={ fasStar }/>
                                <FontAwesomeIcon icon={ fasStar }/>
                                <FontAwesomeIcon icon={ fasStar }/>
                                <FontAwesomeIcon icon={ fasStar }/>
                                <FontAwesomeIcon icon={ fasStar }/>
                            </p>
                        </div>
                        <div class="review-message">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim ornare nisi, vitae mattis nulla ante id dui.</p>
                        </div>
                    </div>
                    <div class="review flex space_between">
                        <div class="name-rating">
                            <p>Jane Doe</p>
                            <p class="rating">
                                <FontAwesomeIcon icon={ fasStar }/>
                                <FontAwesomeIcon icon={ fasStar }/>
                                <FontAwesomeIcon icon={ farStar }/>
                                <FontAwesomeIcon icon={ farStar }/>
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
)

export default SecondPage
