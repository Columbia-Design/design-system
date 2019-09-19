import React from 'react'
import { Route, Switch } from "react-router-dom"

import Sidebar from './sidebar';

import Home from "../pages/home"
import About from "../pages/about"
import Buttons from "../pages/buttons"
import Lists from "../pages/lists"
import Sliders from "../pages/sliders"

import NoMatch from "../pages/404"

function Main() {
  return (
    <React.Fragment>
      <Sidebar />
      <main role="main" className="container-fluid">
        {/* this is where router will input react componets */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/components/buttons" component={Buttons} />
          <Route path="/components/lists" component={Lists} />
          <Route path="/components/sliders" component={Sliders} />
          <Route component={NoMatch} />
        </Switch>
      </main>
    </React.Fragment>
  )
}

export default Main
