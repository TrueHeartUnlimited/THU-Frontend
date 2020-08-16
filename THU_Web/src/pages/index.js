import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight, faPlus } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./main.css"

const Product = props => (
    <figure class="effect-chico">
		<img src="https://tympanus.net/Development/HoverEffectIdeas/img/15.jpg" alt="img15"/>
		<figcaption>
			<h2>{props.name}</h2>
            <p class="price">${props.price}</p>
			<Link to="/product/">View Details</Link>
		</figcaption>
	</figure>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="flex space_between" id="carousel">
        <FontAwesomeIcon icon={ faAngleLeft }/>
        <h2>2020 Collection</h2>
        <FontAwesomeIcon icon={ faAngleRight }/>
    </div>
    <div class="container center" id="home-intro">
        <h2>Kangaroo leather is a beautiful and strong natural material</h2>
        <p>True Heart Unlimited manufatures all-Australian products through all stages of the sourcing, design and production process. The designs are stylish and original. The leather is sourced from one of Australia's few remaining tanneries, which specialisese in kangaroo. The goal of True Heart Unlimited is to turn kangaroo leather into a range of practical yet creative designs that can make Australians proud of their kangaroos.</p>
    </div>
    <div id="call-to-action">
        <div>
            <p>
                Like what you see
                <Link to="/shop/">Shop Now</Link>
            </p>
        </div>
    </div>
    <div class="container" id="featured">
        <div class="flex space_between grid">
            <Product
                name="Handbag"
                price="320"
            />
            <Product
                name="Handbag"
                price="320"
            />
            <Product
                name="Handbag"
                price="320"
            />
        </div>
        <div class="flex space_between grid">
            <Product
                name="Handbag"
                price="320"
            />
            <Product
                name="Handbag"
                price="320"
            />
            <Product
                name="Handbag"
                price="320"
            />
        </div>
    </div>
  </Layout>
)

export default IndexPage
