import React from "react";
import { Helmet } from "react-helmet";
import renderHTML from 'react-render-html';
import PrintComponent from "../util/print-component";

class Breadcrumb extends React.Component {
  render(){
		const Breadcrumb1 = `
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb p-0 w-100 d-flex flex-nowrap rounded-0">
						<li class="breadcrumb-item"><a href="#">Home</a></li>
						<li class="breadcrumb-item"><a href="#">Link Name</a></li>
						<li class="breadcrumb-item"><a href="#">Link Name</a></li>
						<li class="breadcrumb-item active" aria-current="page"><span class="current">Current Page Name</span></li>
				</ol>
			</nav>`.trim();

    return (
      <div>
        <Helmet>
          <title>Breadcrumb</title>
          <meta name="description" content="Documentation and examples for a breadcrumb." />
        </Helmet>
        <div>
        	<h1>Breadcrumb</h1>
					<p>A breadcrumb is a series of links that lays out the hierarchical relationship between the current page and the overall site or app structure. Breadcrumbs provide secondary navigation that allows users to move freely through a series of pages and leap backward or forward more than one page at a time. They facilitate users being able to orient themselves within the breadth of an app or website.</p>
          
          <h2>Usage</h2>
          <p>Breadcrumbs are essential navigation elements; every website should have one.</p>

					<h2>Example</h2>
					<figure>
						{renderHTML(Breadcrumb1)}
					</figure>
					<PrintComponent component={Breadcrumb1} language="html" plainHtml="true" figcaption="Breadcrumb markup"/>

        </div>
      </div>
    )
  }

}

export default Breadcrumb
