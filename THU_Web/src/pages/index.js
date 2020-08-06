import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./main.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="carousel"></div>
    <div class="container center" id="home-intro">
        <h2>Lorem Ipsum Dolor Sit Amet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt vel sem in placerat. Fusce consectetur ultricies tempus. In et purus felis. Curabitur pellentesque mollis porttitor. Nulla sed elit eu quam porttitor porta. Nam dignissim, urna semper rhoncus facilisis, ipsum turpis ornare lacus, aliquam egestas sem nibh vel dolor.</p>
    </div>
    <div id="call-to-action">
        <div>
            Like what you see
        </div>
    </div>
  </Layout>
)

export default IndexPage
