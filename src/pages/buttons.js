import React from "react";
import { Helmet } from "react-helmet";
import Button from "../react_components/button";

import ReactDOMServer from 'react-dom/server';

class Buttons extends React.Component {
  constructor(props) {
	super(props);
	this.state = {};
  }

  render(){

	const primaryButtonElement = <Button class="btn btn-primary" text="Primary button"/>;
	const secondaryButtonElement = <Button class="btn btn-secondary" text="Secondary button"/>;
	const activePrimaryButtonElement = <Button class="btn btn-primary active" text="Active Primary button"/>;
	const grayButtonElement = <Button class="btn btn-gray" text="Gray button"/>;
    return (
      <div>
        <Helmet>
          <title>Buttons</title>
          <meta name="description" content="Page about Buttons" />
        </Helmet>
        <div>
        	<h1>Buttons</h1>
			<p>This page contains short list of availabe button elements</p>

			<h2>Examples</h2>
			<figure>
				{primaryButtonElement}
				{secondaryButtonElement}
				{activePrimaryButtonElement}
				{grayButtonElement}
			</figure>

			<h2>Markup</h2>
			<figure className="highlight">
				<div><code>{ReactDOMServer.renderToStaticMarkup(primaryButtonElement)}</code></div>
				<div><code>{ReactDOMServer.renderToStaticMarkup(secondaryButtonElement)}</code></div>
				<div><code>{ReactDOMServer.renderToStaticMarkup(activePrimaryButtonElement)}</code></div>
				<div><code>{ReactDOMServer.renderToStaticMarkup(grayButtonElement)}</code></div>
			</figure>


			<h2>Styles</h2>
			<figure className="highlight">
			<div><code>Place to hold styles</code></div>
			</figure>

        </div>
      </div>
    )
  }

}

export default Buttons
