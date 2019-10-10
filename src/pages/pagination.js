import React from "react";
import { Helmet } from "react-helmet";
import renderHTML from 'react-render-html';
import { Pagination1, Pagination2 } from "../components/pagination";
import PrintComponent from "../util/print-component";

class Pagination extends React.Component {
  constructor(props) {
		super(props);
		this.state = {};
  }

  render(){

    return (
      <div>
        <Helmet>
          <title>Pagination</title>
          <meta name="description" content="Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages." />
        </Helmet>
        <div>
        	<h1>Pagination</h1>
					<p>Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.</p>

					<h2>Basic Example</h2>
					<figure>
						{renderHTML(Pagination1)}
					</figure>

					<h2>Markup</h2>
					<PrintComponent component={Pagination1} language="html" plainHtml="true" figcaption="Page navigation example markup" />

					<h2>Example with Disabled and Active States</h2>
					<figure>
						{renderHTML(Pagination2)}
					</figure>

					<h2>Markup</h2>
					<PrintComponent component={Pagination2} language="html" plainHtml="true" figcaption="Page navigation with disabled and active states example markup" />

        </div>
      </div>
    )
  }

}

export default Pagination
