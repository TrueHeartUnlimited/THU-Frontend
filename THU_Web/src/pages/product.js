import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="(Product Name)" />
    <div class="product-header"></div>
    <div class="container">
        <div class="flex">
            <div id="product-image">
            </div>
            <div id="product-info">
                <h2>(Product Name)</h2>
                <p>Reviews</p>
            </div>
        </div>
        <div id="product-table">
        </div>
    </div>
  </Layout>
)

export default SecondPage
