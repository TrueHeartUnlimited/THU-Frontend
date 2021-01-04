import React from "react"
import PropTypes from 'prop-types'
import {connect} from "react-redux"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import Img from "gatsby-image"

import {removeFromCartMessage, increaseCountMessage, decreaseCountMessage} from "../../store/actions";

function ccyFormat(num){
  return `$${num/100}`;
}

function Table(props){
  const {products, removeFromCart, increaseCount, decreaseCount} = props;

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
                <th class="unit">Unit Price</th>
                <th class="total">Total</th>
            </tr>
            {products.map(({product, count, colour})=>(
              <tr>
                  <td class="remove"><button onClick={()=>removeFromCart(product)}><FontAwesomeIcon icon={ faTimes }/></button></td>
                  <td class="image"><div class="image-image"><Img fluid ={product.productImages[0].fluid} src={product.productImages[0].fluid.src} alt={product.productImages[0].title}/></div></td>
              <td class="product"><Link to={product.path}>{product.productName}</Link></td>
                  <td class="color">{colour}</td>
                  <td class="quantity">
                      <button type="button" class="quantity-change" onClick={()=>decreaseCount(product)}>-</button>
                      <p>{count}</p>
                      <button type="button" class="quantity-change" onClick={()=>increaseCount(product)}>+</button>
                  </td>
                  {product.price2 != null ? <td class="unit">${product.price}-${product.price2}</td>
                  :<td class="unit">${product.price}</td>
                  }
                  {product.price2 != null ? <td class="total">${product.price * count}-${product.price2 * count}</td>
                  :<td class="total">${product.price * count}</td>
                  }

            </tr>
            ))}
            <tr>
                <td colspan="7">Total
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
  decreaseCount: PropTypes.func.isRequired,
  increaseCount: PropTypes.func.isRequired
}

const mapDispatchToProps ={
  removeFromCart: product => removeFromCartMessage(product.id),
  decreaseCount: product => decreaseCountMessage(product.id),
  increaseCount: product => increaseCountMessage(product.id)
}

export default connect(null, mapDispatchToProps)(Table);
