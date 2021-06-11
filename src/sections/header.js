import React from 'react';
import { NavLink } from "react-router-dom";

import Global from "../global";
import CuCrown from  "../react-components/cu-crown";

function Header() {
  const links = Global.pages.map((item, index) => (item.display) ? <li key={index} className="nav-item"><NavLink to={item.path} exact={item.exact} className="nav-link" activeClassName="active">{item.name}</NavLink></li> : null);

  return (
		<header role="banner">
			<div id="nav-wrapper">
				<div className="container">

					<div className="row">
						<div className="col-sm-11">
							<a href="http://www.columbia.edu">Columbia University in the City of New York</a>
						</div>
					</div>

				</div>
			</div>

			<div id="brand-wrapper" className="d-block d-sm-none">
				<div id="brand-wrapper-inner">
					<NavLink to="/" exact className="nav-link">
						<span className="brand">Columbia University Design System</span>
					</NavLink>
				</div>
			</div>

			<div className="nav-lined-container">
				<div id="navbar" className="container-fluid">

					<ul className="nav nav-lined">
						<li className="nav-item ds-home-link">
							<NavLink to="/" exact>
								<span className="navbar-brand">
									{CuCrown()}
								</span>
								Design System
							</NavLink>
						</li>
						{links}
					</ul>
				</div>
			</div>
		</header>

	)
}

export default Header
