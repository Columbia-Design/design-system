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
					<p>Pagination divides content into sections that display on different pages and helps users consume content by making it more consumable and scannable.</p>
          
          <h2>Usage</h2>
          <p>Pagination should be used to list content such as news stories, events, person profiles, and other types of content that are typically consumed by date, in alphabetical order, or in categorial lists.</p>

					<h2>Examples</h2>
          <h3>Default</h3>
					<figure>
						{renderHTML(Pagination1)}
					</figure>
					<PrintComponent component={Pagination1} language="html" plainHtml="true" figcaption="Pagination markup" />

					<h3>Disabled and Active States</h3>
					<figure>
						{renderHTML(Pagination2)}
					</figure>
					<PrintComponent component={Pagination2} language="html" plainHtml="true" figcaption="Pagination with disabled and active states markup" />

        </div>
      </div>
    )
  }

}

export default Pagination
