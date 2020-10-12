import React from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types";
import Img from "gatsby-image";

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./main.css"
import ProductDisplay from "../components/productDisplay"
import StyledBackgroundSection from '../components/BackgroundSection'

const IndexPage = ({data}) => {

    return(
    <Layout>
        <SEO title="Home" />
        <div class="flex space_between" id="carousel">
        </div>
        <div class="container center" id="home-intro">
            <h2>{data.info.heading}</h2>
            <p dangerouslySetInnerHTML={{__html: data.info.homePara.internal.content}}/>
        </div>
        <div id="call-to-action">
            <div>
                Like what you see
                <Link to="/shop/" class="btn">Shop Now</Link>
            </div>
        </div>
        <div class="container" id="featured">
            <ProductDisplay items={data.products}/>
        </div>
    </Layout>
    )
}

export const query = graphql`
    {
        info: contentfulHome {
            homePara {
              internal {
                content
              }
            }
            heading
            carouselImages {
              fluid{
                ...GatsbyContentfulFluid
              }
            }
        }

        products: allContentfulProduct {
          edges {
            node {
              path
              price
              price2
              productName
              productImages {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
    }
`;

export default IndexPage
