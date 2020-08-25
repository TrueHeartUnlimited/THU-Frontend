import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Product = props => (
    <tr>
        <td class="remove"><FontAwesomeIcon icon={ faTimes }/></td>
        <td class="image"><div class="image-image"></div></td>
		<td class="product"><Link to="/product/">{props.name}</Link></td>
        <td class="color">{props.color}</td>
        <td class="quantity">
            <input type="button" class="quantity-change" value="-"/>
            <input type="text" class="qty" value="1"/>
            <input type="button" class="quantity-change" value="+"/>
        </td>
        <td class="unit">${props.price}</td>
		<td class="total">${props.price}</td>
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
            <form>
                <table>
                    <tr>
                        <th class="remove"></th>
                        <th class="product" colspan="2">Product</th>
                        <th class="color">Colour</th>
                        <th class="quantity">Quantity</th>
                        <th class="unit">Unit Price</th>
                        <th class="total">Total</th>
                    </tr>
                    <Product
                        name="Handbag"
                        color="Blue"
                        price="320"
                    />
                    <Product
                        name="Handbag"
                        color="Orange"
                        price="320"
                    />
                    <Product
                        name="Handbag"
                        color="Pink"
                        price="320"
                    />
                </table>
            </form>
        </div>
    </div>
  </Layout>
)

export default SecondPage
