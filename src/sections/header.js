import React from 'react'
import { NavLink } from "react-router-dom"

import Global from "../global"

function Header() {
  const links = Global.pages.map((item, index) => (item.display) ? <li key={index} className="nav-item"><NavLink to={item.path} className="nav-link" activeClassName="active">{item.name}</NavLink></li> : null);

  return (
    <header role="banner" className="container-fluid">
      <nav className="nav">
        <NavLink to="/" exact className="nav-link">
          <h1>Columbia University Design System</h1>
        </NavLink>
        <ul className="nav justify-content-end col d-none d-md-flex secondary">
          {links}
        </ul>
      </nav>
    </header>
  )
}

export default Header


// <li className="nav-item"><NavLink to="/typography" className="nav-link" activeClassName="active">Typography</NavLink></li>
// <li className="nav-item"><NavLink to="/components/buttons" className="nav-link" activeClassName="active">Buttons</NavLink></li>
// <li className="nav-item"><NavLink to="/components/lists" className="nav-link" activeClassName="active">Lists</NavLink></li>
// <li className="nav-item"><NavLink to="/components/sliders" className="nav-link" activeClassName="active">Sliders</NavLink></li>
// <li className="nav-item"><NavLink to="/components/alerts" className="nav-link" activeClassName="active">Alerts</NavLink></li>
// <li className="nav-item"><NavLink to="/components/pagination" className="nav-link" activeClassName="active">Pagination</NavLink></li>
// <li className="nav-item"><NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink></li>