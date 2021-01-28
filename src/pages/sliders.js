import React from "react";
import { Helmet } from "react-helmet";
import Slider from "../react-components/slider";
import PrintComponent from "../util/print-component";


class Sliders extends React.Component {
  constructor(props) {
		super(props);
		this.state = {};
  }

  render(){
		const mainSlider = <Slider class="main switch" id="slider-1" />;
		return (
			<div>
				<Helmet>
					<title>Toggle Switch</title>
					<meta name="description" content="Page about toggle switches" />
				</Helmet>
				<div>
					<h1>Toggle Switch</h1>
					<p>Toggle switches, or on-off buttons, allow users to choose between two, usually oppositional, values, e.g. on and off, yes and no, red and blue.</p>
          
          <h2>Usage</h2>
          <p>Toggle switches should be clearly labeled, and the default behavior should be option users are most likely to choose or assume to be true.</p>

  				<h2>Example</h2>
  				<figure>
  					{mainSlider}
  				</figure>
  				<PrintComponent component={mainSlider} language="html" figcaption="Toggle switch markup"/>

				</div>
			</div>
		)
	}

}

export default Sliders;
