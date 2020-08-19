import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Product = props => (
    <tr>
        <td><FontAwesomeIcon icon={ faTimes }/></td>
		<td><Link to="/product/">{props.name}</Link></td>
        <td>1</td>
        <td>${props.price}</td>
		<td>${props.price}</td>
	</tr>
)

const SecondPage = () => (
  <Layout>
    <SEO title="Shop" />
    <div class="header">
        <h1>Calculator</h1>
    </div>
    <div class="container">
        <div id="calc-table">
            <table>
                <tr>
                    <th></th>
                    <th>Product</th>
                    <th>QTY</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                </tr>
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
            </table>
        </div>
    </div>
  </Layout>
)

export default SecondPage
