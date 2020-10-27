import React, { useState } from "react"
import {connect} from 'react-redux'
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight, faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

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
  //needs to be implemented properly

/*   const [formState, setFromState] = useState({
    name:"",
    email: "",
    number: "",
  })

  const handleChange = (e) =>{
    setFromState({...formState, [e.target.name]: e.target.value});
    console.log(formState)
  }


  const submitForm = async (e) => {
     {products.map(({product, count, colour})=>{
      const item = useState({
        name: product.productName,
        colour: colour,
        quantity: count,
        price: product.price
      })
      setFromState(...formState,)
    })} 
    try{
      const response = await fetch("/.netlify/functions/invoiceemail", {
        method: "POST",
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        alert("success")
        //not 200 response
        return
      }

      //all OK

    } catch(e){
      alert("fail")
      //error
    }
  } */

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
        <div class="flex space_between">
            <div class="invoice-box invoice-half">
                <div class="invoice-container">
                    <p>Like what you have saved? Get in contact and we can begin the process of making your order.</p>
                    <form id="invoiceForm" action="https://formsubmit.co/thu@chooseaustralia.com.au" method="POST">
                        <div class="flex space_between">
                            <div class="form-half-width">
                                <p>Name<span class="red">*</span></p>
                                <input type="text" id="name" required/>
                            </div>
                            <div class="form-half-width">
                                <p>Email<span class="red">*</span></p>
                                <input type="email" id="email" required/>
                            </div>
                        </div>
                        <div>
                            <p>Phone Number<span class="red">*</span></p>
                            <input type="tel" pattern="[0-9]{2}[0-9]{4}[0-9]{4}" id="phone number" required/>
                        </div>
                        
                          <p>Your Order<span class="red">*</span></p>
                          <textarea name="order" placeholder="Add what you added to your cart! For example: Adele Blue x2"required/>
                        
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
            <div class="invoice-box invoice-half">
                <div class="invoice-container" id="stockists">
                    <h3>Stockists</h3>
                    <div class="stockist">
                        <p class="stockist-name">Adavera</p>
                        <p><FontAwesomeIcon icon={ faMapMarkerAlt }/> Shop 1/237 Given Terrace, Brisbane QLD</p>
                        <p><FontAwesomeIcon icon={ faPhoneAlt }/> (07) 3148 3958</p>
                        <Link to="https://adaverafootwear.com.au/" class="stockist-website">adaverafootwear.com.au</Link>
                    </div>
                    <div class="stockist separator">
                        <p class="stockist-name">Artisan</p>
                        <p><FontAwesomeIcon icon={ faMapMarkerAlt }/> 45 King Street, Bowen Hills QLD</p>
                        <p><FontAwesomeIcon icon={ faPhoneAlt }/> (07) 3215 0800</p>
                        <Link to="https://artisan.org.au/" class="stockist-website">artisan.org.au</Link>
                    </div>
                    <div class="stockist separator">
                        <p class="stockist-name">Vui with Friends</p>
                        <p><FontAwesomeIcon icon={ faMapMarkerAlt }/> 233 Johnston Street, Abbotsford VIC</p>
                        <Link to="https://www.vuiwithfriends.com/" class="stockist-website">www.vuiwithfriends.com</Link>
                    </div>
                </div>
            </div>
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
