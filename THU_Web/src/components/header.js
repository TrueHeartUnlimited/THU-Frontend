import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faFileInvoiceDollar, faSearch } from "@fortawesome/free-solid-svg-icons"

import "./header.css";

export function Search() {
    return(
        <div id="header-icons">
            <Link to="/invoice/"><FontAwesomeIcon icon={ faFileInvoiceDollar } id="invoice-icon"/></Link>
            <FontAwesomeIcon icon={ faSearch } id="search-icon"/>
        </div>
    )
}

export function Header({ data }) {
    return(
        <header>
            <h1>
                <Link to="/">
                    T<span class="lower_case">RUE</span> H<span class="lower_case">EART</span>
                </Link>
                <Link to="/">
                    <img src={'/final-logo.png'} alt="Logo" id="logo-img" />
                </Link>
                <Link to="/">
                    U<span class="lower_case">NLIMITED</span>
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
            </ul>
        </nav>
    )
}
