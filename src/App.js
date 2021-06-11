import React, { Component } from 'react';
import { Helmet } from "react-helmet"
import { BrowserRouter as Router } from "react-router-dom";

import Header from './sections/header';
import Main from './sections/main';
import Footer from './sections/footer';
import Sidebar from './sections/sidebar';

import './styles/sass/app_includes.scss';

class App extends Component {
  render() {
    return (
      <Router>
			  <Helmet>
					<script src="https://use.typekit.net/rke7urc.js" type="text/javascript" />
				</Helmet>
        <Header />
				<div className="container-fluid">
					<div className="row justify-content-start">
						<Sidebar />
						<Main />
					</div>
				</div>
				<Footer />
      </Router>
    );
  }
}

export default App;
