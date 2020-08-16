import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

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

const SecondPage = () => (
  <Layout>
    <SEO title="Shop" />
    <div class="header">
        <h1>Shop</h1>
    </div>
    <div class="container">
        <div id="filter">
            <ul>
                <li>All Shapes <FontAwesomeIcon icon={ faChevronDown }/></li>
                <li>Colours <FontAwesomeIcon icon={ faChevronDown }/></li>
                <li>Sort By <FontAwesomeIcon icon={ faChevronDown }/></li>
            </ul>
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

export default SecondPage
