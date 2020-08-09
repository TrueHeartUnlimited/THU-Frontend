import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Product = props => (
    <div class="product">
        <div class="product-info">
            <h3>{props.name}</h3>
            <p class="price">{props.price}</p>
            <Link to="/">View <FontAwesomeIcon icon={ faPlus }/> Details</Link>
        </div>
    </div>
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
        <div class="flex row">
            <Product
                name="Handbag"
                price="320"
            />
        </div>
    </div>
  </Layout>
)

export default SecondPage
