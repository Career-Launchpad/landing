import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/logo.png"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <div className="top-menu">
        <div className="logo">
          <Link to="/" title="Prospect">
            <img alt="Logo" src={logo} />
          </Link>
        </div>

        <div className="get-started">
          <Link to="/contact">Get Demo</Link>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
