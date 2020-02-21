import React from "react";
import { Helmet } from "react-helmet";
import CuCarousel from "../react-components/cu-carousel";
import PrintComponent from "../util/print-component";

class CuCarousels extends React.Component {
  render(){
		const defaultCarousel = <CuCarousel class="" id="defaultCarousel" delay="2000"/>;
		const altCarousel = <CuCarousel	 class="carousel-indicators-below" id="altCarousel" delay="2000"/>;
	
    return (
      <div>
        <Helmet>
          <title>Carousel</title>
          <meta name="description" content="Documentation and examples for a carousel." />
        </Helmet>
        <div>
        	<h1>Carousel</h1>
					<p>Documentation and examples for a carousel.</p>

					<h2>Examples</h2>
					<h3>Default Carousel</h3>
					<p>Carousel that auto-rotates with a 2000ms interval.</p>
					<figure>
						{defaultCarousel}
					</figure>

					<h3>Alternate Carousel</h3>
					<p>Carousel with slide indicators positioned below the slides; auto-rotates with a 2000ms interval.</p>
					<figure>
						{altCarousel}
					</figure>

        </div>
      </div>
    )
  }

}

export default CuCarousels
