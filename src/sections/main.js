import React from 'react'
import { Route, Switch } from "react-router-dom"

import Sidebar from './sidebar';
import Global from "../global"

function Main() {
  let routesArray = [];

  Global.pages.forEach((item) => {
    if(item.items){
      item.items.map((item) => routesArray.push(item));
    }
    routesArray.push(item);
  });

  const routes = routesArray.map((item, index) => <Route key={index} path={item.path} exact={item.exact} component={item.component} />);

  return (
    <React.Fragment>
      <Sidebar />
      <main role="main" className="main container-fluid">
        <Switch>
          { routes }
        </Switch>
      </main>
    </React.Fragment>
  )
}

export default Main
