import React from 'react'
import { withRouter } from "react-router-dom"

class SidebarCheck extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: 0,
    }
    this.renderSidebar = this.renderSidebar.bind(this);
  }
  renderSidebar() {
    //available props {this.props.location.pathname}
    return (
      <div role="navigation" className="sidebar container-fluid">

      </div>
    )
  }
  render() { //only render sidebar when needed
    return (this.props.location.pathname !== "/") ? this.renderSidebar() : null;
  }
}

const RenderSidebar = withRouter(SidebarCheck);


export default RenderSidebar
