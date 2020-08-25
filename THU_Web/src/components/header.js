import { Link } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faFileInvoiceDollar, faShoppingBag, faCalculator } from "@fortawesome/free-solid-svg-icons"

import "./header.css"

export function Header() {
    return(
      <header>
          <h1 style={{ margin: 0 }}>
            <Link  to="/">
              T<span class="lower_case">RUE</span> H<span class="lower_case">EART</span> U<span class="lower_case">NLIMITED</span>
            </Link>
          </h1>
      </header>
  )
}

export function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about_us/">About <FontAwesomeIcon icon={ faChevronDown }/></Link>
                    <ul class="dropdown">
                        <li><Link to="/about_us/">About Us</Link></li>
                        <li><Link to="/about_kangaroo/">About Kangaroo Leather</Link></li>
                    </ul>
                </li>
                <li><Link to="/shop/">Shop</Link></li>
                <li><Link to="/contact/">Contact</Link></li>
                <li><Link to="/invoice/"><FontAwesomeIcon icon={ faFileInvoiceDollar } id="invoice-icon"/> Invoice</Link></li>
            </ul>
        </nav>
    )
}
