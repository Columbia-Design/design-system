import React from "react";
import { Helmet } from "react-helmet";
import renderHTML from 'react-render-html';
import PrintComponent from "../util/print-component";

class Pagination extends React.Component {
  constructor(props) {
		super(props);
		this.state = {};
  }

  render(){
		const Pagination1 = `
			<nav aria-label="Page navigation example">
				<ul class="pagination">
					<li class="page-item"><a class="page-link" href="#">Previous</a></li>
					<li class="page-item"><a class="page-link" href="#">1</a></li>
					<li class="page-item"><a class="page-link" href="#">2</a></li>
					<li class="page-item"><a class="page-link" href="#">3</a></li>
					<li class="page-item"><a class="page-link" href="#">Next</a></li>
				</ul>
			</nav>`.trim();

		const Pagination2 = `
			<nav aria-label="...">
				<ul class="pagination">
					<li class="page-item disabled">
						<a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
					</li>
					<li class="page-item"><a class="page-link" href="#">1</a></li>
					<li class="page-item active" aria-current="page">
						<a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
					</li>
					<li class="page-item"><a class="page-link" href="#">3</a></li>
					<li class="page-item">
						<a class="page-link" href="#">Next</a>
					</li>
				</ul>
			</nav>`.trim();

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
