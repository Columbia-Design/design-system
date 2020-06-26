import React from 'react'
import { Route, Switch, withRouter} from "react-router-dom"

import Global from "../global"

class MainComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    let routesArray = [];

    Global.pages.forEach((item) => {
      if(item.items){
        item.items.map((item) => routesArray.push(item));
      }
      routesArray.push(item);
    });

    const routes = routesArray.map((item, index) => <Route key={index} path={item.path} exact={item.exact} component={item.component} />);

    // console.log("location prop in main.js: ", this.props.location);
    let mainClass = (
      this.props.location.pathname.indexOf('/start') === 0 ||
			this.props.location.pathname.indexOf('/components') === 0 ||
			this.props.location.pathname.indexOf('/content') === 0
		) ? 'ds-main container-fluid col-md-9 py-4 with-sidebar' : 'ds-main container py-4 no-sidebar';
    return (
      <main role="main" className={`${mainClass}`}>
        <Switch>{ routes }</Switch>
      </main>
    )
  }
}

const Main = withRouter(MainComponent);

export default Main
