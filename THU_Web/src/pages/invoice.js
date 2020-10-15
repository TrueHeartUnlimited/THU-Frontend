import React from "react"
import {connect} from 'react-redux'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cart from "../components/cart/popCart"
import StyledBackgroundSection from '../components/BackgroundSection'

import {getAllProducts} from "../store/selectors";

function mapStateToProps({ cartReducer }){
  return{
    products: getAllProducts(cartReducer)
  };
}


const CartPage = ({products}) => {

  const submitForm = async (e) => {
    var test = {email: "testingtruweb@gmail.com", message:"testing" }

    try{
      console.log("try");
      const response = await fetch("/.netlify/functions/invoiceemail", {
        method: "POST",
        body: JSON.stringify(test),
      })

      if (!response.ok) {
        console.log("in if")
        //not 200 response
        return
      }

      //all OK

    } catch(e){
      console.log("error")
      //error
    }
  }

  return(
    <Layout>
      <SEO title="Shop" />
      <StyledBackgroundSection class="header">
          <h1>Calculator</h1>
      </StyledBackgroundSection>
      <div class="container">
          <div class="invoice-box" id="calc-table">
            <Cart products={products}/>
          </div>
          <div class="invoice-box">
            <form action={()=>submitForm()}>
              <div>
                <p>Name<span class="red">*</span></p>
                <input type="text" id="name" placeholder="John Doe" required/>
              </div>
              <div>
                <p>Email<span class="red">*</span></p>
                <input type="email" id="email" placeholder="email@email.com" required/>
              </div>
              <div>
                <p>Phone Number<span class="red">*</span></p>
                <input type="tel" pattern="[0-9]{2}[0-9]{4}[0-9]{4}" id="phone number" placeholder="0123456789" required/>
              </div>
              <input type="submit" value="Submit"/>
            </form>
          </div>
{/*           <div class="flex space_between">
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
 */}      </div>
    </Layout>
  )
}

export default connect(mapStateToProps)(CartPage)
