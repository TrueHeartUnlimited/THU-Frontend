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
            <form>
                <table id="product-table">
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
                        <td colspan="6">
                            <input type="submit" value="Update Invoice"/>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
        <div class="flex space_between">
            <div class="invoice-box half-width" id="calc-ship">
                <h3>Calculate Shipping</h3>
                <p>This calculates shipping in Australia for international countries please get in contact for shipping prices.</p>
                <form>
                    <div>
                        <p>Suburb/Town</p>
                        <input type="text" name="suburb"/>
                    </div>
                    <div class="flex space_between">
                        <div>
                            <p>State</p>
                            <select name="state">
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
                        <div>
                            <p>Postcode</p>
                            <input type="number" name="postcode" class="half-width"/>
                        </div>
                        <div>
                            <input type="submit" value="Update Totals"/>
                        </div>
                    </div>
                </form>
            </div>
            <div class="invoice-box half-width" id="total-table">
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
                        <td id="invoice-total"></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  </Layout>
)

export default SecondPage
