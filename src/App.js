import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Header from './sections/header';
import Main from './sections/main';
import Footer from './sections/footer';

import './styles/app.css';
import './styles/sass/overrides.scss';

class App extends Component {
  render() {
    return (
      <Router basename={'/desing-system'}>
        <Header />
				<Main />
				<Footer />
      </Router>
    );
  }
}

export default App;
