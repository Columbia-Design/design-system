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
					<title>Sliders</title>
					<meta name="description" content="Page about Sliders" />
				</Helmet>
				<div>
					<h1>Sliders</h1>
					<p>This page contains short list of availabe slider elements</p>

				<h2>Examples</h2>
				<figure>
					<figcaption>Example 1</figcaption>
					{mainSlider}
				</figure>

				<h2>Markup</h2>
				<PrintComponent component={mainSlider} language="html" />

				</div>
			</div>
		)
	}

}

export default Sliders;
