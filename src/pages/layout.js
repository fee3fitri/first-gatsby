import * as React from 'react'
import { Link } from 'gatsby'

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const Layout = ({ pageTitle, children }) => (
  <div style={pageStyles}>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>

    <main>
      <h1>{pageTitle}</h1>
      {children}
    </main>
  </div>
)

export default Layout