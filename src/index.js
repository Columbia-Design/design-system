import React from 'react';
import { hydrate } from 'react-dom';
import { render } from 'react-snapshot';

import App from './App';
import * as serviceWorker from './serviceWorker';

// libraries that are needed for final output, please include each import in exports const over @ /exports.js
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

//custom jquery stuff
import './jquery.js';
import './assets/lib/breadcrumb.js'

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
