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
          <meta name="description" content="Documentation and examples for a breadcrumb with a cited source." />
        </Helmet>
        <div>
        	<h1>Breadcrumb</h1>
					<p>Documentation and examples for a breadcrumb with a cited source.</p>

					<h2>Basic Example</h2>
					<figure>
						{renderHTML(Breadcrumb1)}
					</figure>

					<h2>Markup</h2>
					<PrintComponent component={Breadcrumb1} language="html" plainHtml="true" figcaption="Breadcrumb example markup" />

        </div>
      </div>
    )
  }

}

export default Breadcrumb
