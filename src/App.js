import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Header from './sections/header';
import Main from './sections/main';
import Footer from './sections/footer';
import Sidebar from './sections/sidebar';

import './styles/sass/overrides.scss';

class App extends Component {
  render() {
    return (
      <Router basename={'/design-system'}>
        <Header />
				<div className="container-fluid">
					<div className="row flex-xl-nowrap">
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
