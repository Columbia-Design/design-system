import React from "react";
import { Helmet } from "react-helmet";
import renderHTML from 'react-render-html';
import PrintComponent from "../util/print-component";

class Pullquote extends React.Component {
  constructor(props) {
		super(props);
		this.state = {};
  }

  render(){
		const Pullquote1 = `
			<blockquote class="blockquote pullquote">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
				<footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
			</blockquote>`.trim();

    return (
      <div>
        <Helmet>
          <title>Pull Quote</title>
          <meta name="description" content="Documentation and examples for a pull quote with a cited source." />
        </Helmet>
        <div>
        	<h1>Pullquote</h1>
					<p>Documentation and examples for a pull quote with a cited source.</p>

					<h2>Basic Example</h2>
					<figure>
						{renderHTML(Pullquote1)}
					</figure>

					<h2>Markup</h2>
					<PrintComponent component={Pullquote1} language="html" plainHtml="true" figcaption="Pullquote example markup" />

        </div>
      </div>
    )
  }

}

export default Pullquote
