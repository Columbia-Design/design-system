import React from "react";
import { Helmet } from "react-helmet";
import renderHTML from 'react-render-html';
import List from "../components/list";

class Lists extends React.Component {
  constructor(props) {
	super(props);
	this.state = {};
  }

  render(){

    return (
      <div>
        <Helmet>
          <title>Lists</title>
          <meta name="description" content="Page about Lists" />
        </Helmet>
        <div>
        	<h1>Lists</h1>
			<p>This page contains list elements</p>

			<h2>Examples</h2>
			<figure>
				{renderHTML(List)}
			</figure>

			<h2>Markup</h2>
			<figure className="highlight">
				<div><code>{List}</code></div>
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

export default Lists
