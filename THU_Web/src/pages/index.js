import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight, faPlus } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./main.css"

const Product = props => (
    <div class="product">
        <div class="product-info">
            <h3>{props.name}</h3>
            <p class="price">{props.price}</p>
            <Link to="/">View <FontAwesomeIcon icon={ faPlus }/> Details</Link>
        </div>
    </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="flex" id="carousel">
        <FontAwesomeIcon icon={ faAngleLeft }/>
        <h2>2020 Collection</h2>
        <FontAwesomeIcon icon={ faAngleRight }/>
    </div>
    <div class="container center" id="home-intro">
        <h2>Lorem Ipsum Dolor Sit Amet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt vel sem in placerat. Fusce consectetur ultricies tempus. In et purus felis. Curabitur pellentesque mollis porttitor. Nulla sed elit eu quam porttitor porta. Nam dignissim, urna semper rhoncus facilisis, ipsum turpis ornare lacus, aliquam egestas sem nibh vel dolor.</p>
    </div>
    <div id="call-to-action">
        <div>
            Like what you see
        </div>
    </div>
    <div class="container" id="featured">
        <div class="flex row">
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
        <div class="flex row">
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
