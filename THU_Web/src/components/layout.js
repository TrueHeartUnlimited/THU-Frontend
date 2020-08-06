/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Header, Navigation } from "./header"
//import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <Navigation/>
        <main>{children}</main>
        <div id="social">
            <div>
                <Link to="">Facebook</Link>
            </div>
            <div>
                <Link to="">Instagram</Link>
            </div>
            <div>
                <Link to="">Pinterest</Link>
            </div>
        </div>
        <footer>
            <div id="footer-lists">
                <div class="list">
                    <h3>Product</h3>
                    <ul>
                        <li><Link to="/">Our Company</Link></li>
                        <li><Link to="/">Custom Pieces</Link></li>
                        <li><Link to="/">Bulk Custom Items</Link></li>
                    </ul>
                </div>
                <div class="list">
                    <h3>About</h3>
                    <ul>
                        <li><Link to="/">Our Company</Link></li>
                        <li><Link to="/">Sustainability</Link></li>
                    </ul>
                </div>
                <div class="list">
                    <h3>Legal</h3>
                    <ul>
                        <li><Link to="/">Privacy Policy</Link></li>
                        <li><Link to="/">Terms and Conditions</Link></li>
                        <li><Link to="/">Return and Exchange Policy</Link></li>
                    </ul>
                </div>
                <div class="list">
                    <h3>Contact</h3>
                    <ul>
                        <li>0402 904 970</li>
                        <li>tpngueyn1312@gmail.com</li>
                        <li>37 Judge Street Petrie Terrace, QLD</li>
                    </ul>
                </div>
            </div>
            <div id="copy">
                © TRUE HEART UNLIMITED {new Date().getFullYear()} | ABN 27 459 675 260
            </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
