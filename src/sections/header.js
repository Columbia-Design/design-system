import React from 'react'
import { NavLink } from "react-router-dom"

import '../styles/header.css'

function Header() {
  return (
    <header role="banner" className="container">
      <nav className="nav">
        <NavLink to="/" className="nav-link">
          <h1>Design System</h1>
        </NavLink>
        <ul className="nav justify-content-end col d-none d-md-flex secondary">
          <li className="nav-item"><NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink></li>
          <li className="nav-item"><NavLink to="/components/buttons" className="nav-link" activeClassName="active">Buttons</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
