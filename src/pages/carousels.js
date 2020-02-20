import React from "react";
import { Helmet } from "react-helmet";
import renderHTML from 'react-render-html';
import PrintComponent from "../util/print-component";

class Carousels extends React.Component {
  render(){
		const Carousel1 = `
			<div id="uniqueCarouselID" class="carousel slide" data-ride="carousel">
				<ol class="carousel-indicators">
					<li data-target="#uniqueCarouselID" data-slide-to="0" class="active"></li>
					<li data-target="#uniqueCarouselID" data-slide-to="1"></li>
					<li data-target="#uniqueCarouselID" data-slide-to="2"></li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<div style="height:30vh;background-color:red"></div>
					</div>
					<div class="carousel-item">
						<div style="height:30vh;background-color:green"></div>
					</div>
					<div class="carousel-item">
						<div style="height:30vh;background-color:blue"></div>
					</div>
				</div>
				<a class="carousel-control-prev" href="#uniqueCarouselID" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next" href="#uniqueCarouselID" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>`.trim();

    return (
      <div>
        <Helmet>
          <title>Carousel</title>
          <meta name="description" content="Documentation and examples for a carousel." />
        </Helmet>
        <div>
        	<h1>Carousel</h1>
					<p>Documentation and examples for a carousel.</p>

					<h2>Basic Example</h2>
					<figure>
						{renderHTML(Carousel1)}
					</figure>

					<h2>Markup</h2>
					<PrintComponent component={Carousel1} language="html" plainHtml="true" figcaption="Carousel example markup" />

        </div>
      </div>
    )
  }

}

export default Carousels
