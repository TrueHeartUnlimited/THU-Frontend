import React from "react"
import { graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Display from "../components/shopDisplay"
import StyledBackgroundSection from '../components/BackgroundSection'


const shop = ({data}) => {
  return(
    <Layout>
          <SEO title="Shop" />
    <StyledBackgroundSection class="header">
        <h1>Shop</h1>
    </StyledBackgroundSection>
    <div class="container">
      <Display items={data.products}/>
    </div>
    </Layout>

  )
}
/*   <Layout>
    <SEO title="Shop" />
    <div class="header">
        <h1>Shop</h1>
    </div>
    <div class="container">

        <div id="filter">
            <ul>
                <li>Bags <FontAwesomeIcon icon={ faChevronDown }/>
                    <ul class="shop-dropdown">
                        <li>Bags</li>
                        <li>Accessories</li>
                    </ul>
                </li>
                <li>All Shapes <FontAwesomeIcon icon={ faChevronDown }/>
                    <ul class="shop-dropdown">
                        <li>Handbags</li>
                        <li>Tote Bags</li>
                        <li>Clutches</li>
                        <li>Cardholders & Pouches</li>
                        <li>Belts</li>
                    </ul>
                </li>
                <div class="seperator"></div>
                <li>Colours <FontAwesomeIcon icon={ faChevronDown }/>
                    <ul class="shop-dropdown">
                        <li>Black</li>
                        <li>Brown</li>
                        <li>Blue</li>
                        <li>Pink</li>
                        <li>Beige</li>
                        <li>Orange</li>
                        <li>Multicolour</li>
                        <li>White</li>
                    </ul>
                </li>
                <div class="seperator"></div>
                <li>Sort By <FontAwesomeIcon icon={ faChevronDown }/>
                    <ul class="shop-dropdown">
                        <li>Featured</li>
                        <li>New Products</li>
                    </ul>
                </li>
            </ul>
        </div>
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
                name="Ella Handbag"
                price="350"
            />
        </div>
        <div class="flex space_between grid">
            <Product
                name="Petra Handbag"
                price="600"
            />
            <Product
                name="Paddy Compendium"
                price="250"
            />
            <Product
                name="Maura Tote Bag"
                price="500"
            />
        </div>
    </div>
  </Layout>
 */
export const query = graphql `
  {
    products: allContentfulProduct {
      edges {
        node {
          path
          price
          price2
          type
          size
          collection
          colours
          customisable
          category
          style
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
`
export default shop
