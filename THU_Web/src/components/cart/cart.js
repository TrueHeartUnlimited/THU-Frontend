import React from "react"
import PropTypes from 'prop-types'
import {connect} from "react-redux"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

import {removeFromCartMessage} from "../../store/actions";

function ccyFormat(num){
  return `$${num/100}`;
}

function Table(props){
  const {products, removeFromCart} = props;

  if(products.length < 1) return "Your cart is empty";

  const subtotal = products.reduce((sum, {count, product})=>{
    return sum + count * product.price;
  }, 0);

  return(
    <div class="invoice-container">
      <form>
        <table id="invoice-table">
            <tr>
                <th class="remove"></th>
                <th class="product" colspan="2">Product</th>
                <th class="color">Colour</th>
                <th class="quantity">Quantity</th>
                <th></th>
                <th class="unit">Unit Price</th>
                <th class="total">Total</th>
            </tr>
            {products.map(({product, count})=>(
              <tr>
                  <td class="remove"><FontAwesomeIcon icon={ faTimes }/></td>
                  <td class="image"><div class="image-image"></div></td>
              <td class="product"><Link to={product.path}>{product.productName}</Link></td>
                  <td class="color">{product.colours.toString()}</td>
                  <td class="quantity">
                      <input type="button" class="quantity-change" value="-"/>
                      <input type="text" class="qty" value="1"/>
                      <input type="button" class="quantity-change" value="+"/>
                  </td>
                  <td><button onClick={()=>removeFromCart(product)}>Remove</button></td>
                  <td class="unit">${product.price}</td>
              <td class="total">${props.price}</td>
            </tr>
            ))}
            <tr>
                <td colspan="7">
                    <input type="submit" value="Update Invoice" class="btn submit table-submit"/>
                </td>
            </tr>
          </table>
        </form>
      </div>
  );
}

Table.propTypes = {
  products: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
}

const mapDispatchToProps ={
  removeFromCart: product => removeFromCartMessage(product.id)
}

export default connect(null, mapDispatchToProps)(Table);