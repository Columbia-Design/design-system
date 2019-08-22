import React from 'react'
import Home from "../pages/home"
import About from "../pages/about"
import Buttons from "../pages/buttons"
import { Route } from "react-router-dom"

function Main() {
  return (
    <main role="main" className="container">
      {/* this is where router will input react componets */}
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/components/buttons" component={Buttons} />
    </main>
  )
}

export default Main
