import React from "react"
import {connect} from 'react-redux'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cart from "../components/cart/popCart"

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
      <div class="header">
          <h1>Calculator</h1>
      </div>
      <div class="container">
          <div class="invoice-box" id="calc-table">
            <Cart products={products}/>
            <button onClick={()=>submitForm()}>test</button>
          </div>
          <div class="invoice-box">
            <form>
              <input type="text" id="name" placeholder="John Doe"></input><br/>
              <input type="email" id="email" placeholder="email@email.com"></input><br/>
              <input type="tel" pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" id="phone number" placeholder="(01) 2345 6789"></input><br/>
              <input type="submit" value="Submit"/>
            </form>
          </div>
      </div>
    </Layout>
  )
}

export default connect(mapStateToProps)(CartPage)
