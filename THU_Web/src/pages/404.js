import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div class="header">
        <h1>404: Page Not Found</h1>
    </div>
    <div class="container">
        <div id="missing">
            <p id="missing-icon">404 <FontAwesomeIcon icon={ faFile }/></p>
            <p>Sorry, but the page you are looking for doesn't exist.</p>
            <div class="links flex space_between">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    </div>
  </Layout>
)

export default NotFoundPage
