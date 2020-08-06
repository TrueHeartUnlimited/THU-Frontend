import { Link } from "gatsby"
import React from "react"

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
                <li><Link to="/about_us/">About</Link>
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
