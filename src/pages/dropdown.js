import React from "react";
import { Helmet } from "react-helmet";
import renderHTML from 'react-render-html';
import PrintComponent from "../util/print-component";

class Dropdown extends React.Component {
  constructor(props) {
		super(props);
		this.state = {};
  }

  render(){
		const Dropdown1 = `
			<nav class="navbar navbar-expand-md navbar-light bg-light with-megamenu p-0">
				<button class="navbar-toggler mx-4 my-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav">
						<li class="nav-item"><a class="nav-link py-2 px-4" href="#">Link</a></li>
						<li class="nav-item"><a class="nav-link py-2 px-4" href="#">Link</a></li>
						<li class="nav-item dropdown megamenu position-static">
							<a class="nav-link py-2 px-4 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Dropdown
							</a>
							<ul class="list-unstyled p-4 dropdown-menu border-0 rounded-0 m-0 w-100" aria-labelledby="navbarDropdown">
								<li><a href="#">Lorem ipsum dolor</a></li>
								<li><a href="#">Sit amet consectetur</a></li>
								<li><a href="#">Adipiscing elit sed do eiusmod</a></li>
								<li><a href="#">Tempor incididunt ut labore</a></li>
								<li><a href="#">Et dolore magna aliqua</a></li>
								<li><a href="#">Ut enim ad minim veniam quis nostrud</a></li>
								<li><a href="#">Exercitation ullamco</a></li>
								<li><a href="#">Laboris nisi ut aliquip ex ea commodo</a></li>
							</ul>
						</li>
						<li class="nav-item"><a class="nav-link py-2 px-4" href="#">Link</a></li>
					</ul>
				</div>
			</nav>`.trim();

    return (
      <div>
        <Helmet>
          <title>Dropdown</title>
          <meta name="description" content="Documentation and examples for a dropdown." />
        </Helmet>
        <div>
        	<h1>Drop Down</h1>
					<p>A drop down is a navigational element that allows users to choose one item from a list in order to move throughout a website or app. The first item in the list is the parent and is the only item visible on page load; subordinate items expand when the user hovers over the parent item.</p>
          
          <h2>Usage</h2>
          <p>Drop downs are essential navigation elements. Use them at the top of web pages and app screens to allow users to orient themselves and control their experience with a website or app.</p>

					<h2>Example</h2>
					<figure>
						{renderHTML(Dropdown1)}
					</figure>
					<PrintComponent component={Dropdown1} language="html" plainHtml="true" figcaption="Dropdown markup" />

        </div>
      </div>
    )
  }

}

export default Dropdown
