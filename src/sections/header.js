import React from 'react';
import { NavLink } from "react-router-dom";

import Global from "../global";
import CuCrown from  "../react-components/cu-crown";

function Header() {
  const links = Global.pages.map((item, index) => (item.display) ? <li key={index} className="nav-item"><NavLink to={item.path} exact={item.exact} className="nav-link" activeClassName="active">{item.name}</NavLink></li> : null);

  return (
		<header role="banner">
			<div id="nav-wrapper">
				<div className="container-fluid">

					<div className="row">
						<div className="col-sm-11">
							<a href="http://www.columbia.edu">Columbia University in the City of New York</a>
						</div>
					</div>

				</div>
			</div>

			<div id="brand-wrapper" className="container-fluid">
				<div className="row">
					<div className="col">
						<a href="/">
							<span className="brand">Columbia | Design System</span>
						</a>
					</div>
				</div>
			</div>

			<div id="navbar" className="container-fluid">
				<div className="row">
					<ul className="nav nav-lined">
						{links}
					</ul>
				</div>
			</div>
		</header>

	)
}

export default Header
