import React from "react"
import {connect} from 'react-redux'


import Layout from "../components/layout"
import SEO from "../components/seo"
import Cart from "../components/cart/popCart"

import {getAllProducts} from "../store/selectors";

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg ={
  to: 'test@example.com', // Change to your recipient
  from: 'test@example.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}


function mapStateToProps({ cartReducer }){
  return{
    products: getAllProducts(cartReducer)
  };
}
function test (){
  sgMail
  .send(msg)
  .then(() => {console.log('Email sent')})
  .catch((error) => {console.error(error)})
}

const CartPage = ({products}) => {
  test();
  return(
    <Layout>
      <SEO title="Shop" />
      <div class="header">
          <h1>Calculator</h1>
      </div>
      <div class="container">
          <div class="invoice-box" id="calc-table">
            <Cart products={products}/>
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
}

export default connect(mapStateToProps)(CartPage)
