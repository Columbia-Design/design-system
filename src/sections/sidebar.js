import React from 'react'
import { withRouter, NavLink } from "react-router-dom"
import Global from "../global"

class SidebarComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: 0,
    };
    this.renderSidebar = this.renderSidebar.bind(this);
  }
  renderSidebar() {
    //check if pathname starts with the same pathname as the global.pages[item].pathname
    let sidebarLinks = [];

    Global.pages.forEach((item) => {
      let pathMatch = (this.props.location.pathname.indexOf(item.path) === 0) ? true : false;
      if(item.items && pathMatch){
        item.items.map((item) => sidebarLinks.push(item));
      }
    });

    return (
      <div role="navigation" className="col-md-3 sidebar py-4 ds-sidebar">
        <ul className="nav flex-md-column">
          { sidebarLinks.map((item, index) => <li key={index} className="nav-item"><NavLink to={item.path} exact={item.exact} className="nav-link" activeClassName="active">{item.name}</NavLink></li>) }
        </ul>
      </div>
    )
  }
  render() {
    //only render sidebar when needed, for right now just the /components, /content path
    // modify pathMatch rule if sidebar is needed elsewhere
    // console.log("location: ", this.props.location);
    let pathMatch = (
      this.props.location.pathname.indexOf('/start') === 0 ||
			this.props.location.pathname.indexOf('/components') === 0 ||
			this.props.location.pathname.indexOf('/content') === 0
		) ? true : false;
    return (pathMatch) ? this.renderSidebar() : null;
  }
}

const Sidebar = withRouter(SidebarComponent);

export default Sidebar
