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
        <div class="invoice-box" id="calc-table">
            <div class="invoice-container">
                <form>
                    <table id="invoice-table">
                        <tr>
                            <th class="remove"></th>
                            <th class="product" colspan="2">Product</th>
                            <th class="color">Colour</th>
                            <th class="quantity">Quantity</th>
                            <th class="unit">Unit Price</th>
                            <th class="total">Total</th>
                        </tr>
                        <Product
                            name="Petra Handbag"
                            color="Red & Black"
                            price="600"
                        />
                        <Product
                            name="Leila Handbag"
                            color="Blue"
                            price="320"
                        />
                        <Product
                            name="Paddy Compendium"
                            color="Brown"
                            price="250"
                        />
                        <tr>
                            <td colspan="7">
                                <input type="submit" value="Update Invoice" class="btn submit table-submit"/>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
        <div class="flex space_between">
            <div class="invoice-box invoice-half" id="calc-ship">
                <div class="invoice-container" id="shipping">
                    <h3>Calculate Shipping</h3>
                    <p>This calculates shipping in Australia for international countries please get in contact for shipping prices.</p>
                    <form>
                        <div class="separator">
                            <p>Suburb/Town</p>
                            <input type="text" name="suburb" class="shipping-input"/>
                        </div>
                        <div class="flex space_between">
                            <div class="half-width">
                                <p>State</p>
                                <select name="state" class="shipping-input">
                                    <option value="QLD">QLD</option>
                                    <option value="NSW">NSW</option>
                                    <option value="VIC">VIC</option>
                                    <option value="ACT">ACT</option>
                                    <option value="TAS">TAS</option>
                                    <option value="NT">NT</option>
                                    <option value="SA">SA</option>
                                    <option value="WA">WA</option>
                                </select>
                            </div>
                            <div class="half-width">
                                <p>Postcode</p>
                                <input type="number" name="postcode" class="shipping-input"/>
                            </div>
                        </div>
                        <div>
                            <input type="submit" value="Update Totals" class="btn submit table-submit"/>
                        </div>
                    </form>
                </div>
            </div>
            <div class="invoice-box invoice-half" id="total-table">
                <div class="invoice-container">
                    <h3>Totals</h3>
                    <table>
                        <tr>
                            <th>Invoice Subtotal</th>
                            <td>$1,170.00</td>
                        </tr>
                        <tr>
                            <th>Shipping</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Order Total</th>
                            <td id="invoice-total">$1,170.00</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
  </Layout>
)

export default SecondPage
