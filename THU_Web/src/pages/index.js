import React from "react"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types";

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./main.css"
import Products from "./temp_img_thumbnails";

const Product = props => (
    <figure class="effect-chico">
		<img src="https://tympanus.net/Development/HoverEffectIdeas/img/15.jpg" alt="img15"/>
		<figcaption>
			<h3>{props.name}</h3>
            <p class="price">${props.price}</p>
			<Link to="/product/">View Details</Link>
		</figcaption>
	</figure>
)

const IndexPage = ({data}) => {
    //const homeInfo = data;

    return(
    <Layout>
        <SEO title="Home" />
        <div class="flex space_between" id="carousel">
            <FontAwesomeIcon icon={ faAngleLeft }/>
            <h2>2020 Collection</h2>
            <FontAwesomeIcon icon={ faAngleRight }/>
        </div>
        <div class="container center" id="home-intro">
            <h2></h2>
            <div/>
        </div>
        <div id="call-to-action">
            <div>
                <p>
                    Like what you see
                    <Link to="/shop/" class="btn">Shop Now</Link>
                </p>
            </div>
        </div>
        <div class="container" id="featured">
            <div class="flex space_between grid">
                <Product
                    name="Adelina Handbag"
                    price="250"
                />
                <Product
                    name="Anais Belt"
                    price="100"
                />
                <Product
                    name="Leila Handbag"
                    price="320"
                />
            </div>
            <div class="flex space_between grid">
                <Product
                    name="Adele Clutch"
                    price="120"
                />
                <Product
                    name="Alaia Clutch"
                    price="120"
                />
                <Product
                    name="Petra Handbag"
                    price="600"
                />
            </div>
        </div>
    </Layout>
    )
}

Products.propTypes = {
    data: PropTypes.object.isRequired,
}


/* export const query = graphql`
    {
        
    }
`;
 */
export default IndexPage
