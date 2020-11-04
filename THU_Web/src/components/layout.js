/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight, faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { faFacebookSquare, faInstagramSquare, faPinterestSquare } from "@fortawesome/free-brands-svg-icons"

import { Search, Header, Navigation } from "./header"
//import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Search/>
      <Header/>
      <Navigation/>
        <main>{children}</main>
        <div class="flex" id="social">
            <div>
                <Link to="https://www.facebook.com/True-Heart-Unlimited-128173950686532"><FontAwesomeIcon icon={ faFacebookSquare }/></Link>
            </div>
            <div>
                <Link to="https://www.instagram.com/explore/locations/128173950686532/true-heart-unlimited/?hl=en"><FontAwesomeIcon icon={ faInstagramSquare }/></Link>
            </div>
            <div>
                <Link to=""><FontAwesomeIcon icon={ faPinterestSquare }/></Link>
            </div>
        </div>
        <footer>
            <div id="footer-lists">
                <div class="list">
                    <h3>Product</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={ faCaretRight }/><Link to="/custom/">Bespoke Pieces</Link></li>
                        {/*<li><FontAwesomeIcon icon={ faCaretRight }/><Link to="/bulk_custom/">Bulk Custom Items</Link></li>*/}
                    </ul>
                </div>
                <div class="list">
                    <h3>About</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={ faCaretRight }/><Link to="/about_us/">Our Company</Link></li>
                        <li><FontAwesomeIcon icon={ faCaretRight }/><Link to="/about_kangaroo/">Sustainability</Link></li>
                    </ul>
                </div>
                <div class="list">
                    <h3>Stockists</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={ faCaretRight }/><Link to="https://adaverafootwear.com.au/">Adavera</Link></li>
                        <li><FontAwesomeIcon icon={ faCaretRight }/><Link to="https://artisan.org.au/">Artisan</Link></li>
                        <li><FontAwesomeIcon icon={ faCaretRight }/><Link to="https://www.vuiwithfriends.com/">Vui with Friends</Link></li>
                    </ul>
                </div>
                <div class="list">
                    <h3>Contact</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={ faPhoneAlt }/>0402 904 970</li>
                        <li><FontAwesomeIcon icon={ faEnvelope }/>thu@chooseaustralian.com.au</li>
                        <li><FontAwesomeIcon icon={ faMapMarkerAlt }/>37 Judge Street Petrie Terrace, QLD</li>
                    </ul>
                </div>
            </div>
            <div id="copy">
            © TRUE HEART UNLIMITED {new Date().getFullYear()} | ABN 27 459 675 260
            <a href="https://www.contentful.com/" rel="nofollow" target="_blank"><img src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg" alt="Powered by Contentful" id="contentful-img"/></a>
            </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
