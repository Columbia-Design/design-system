import React from "react";
import { Helmet } from "react-helmet";
import BrandBar from "../react-components/brand-bar";
import PrintComponent from "../util/print-component";


class BrandBars extends React.Component {
  constructor(props) {
		super(props);
		this.id = {};
  }

  render(){
		const mainBrandBar = <BrandBar class="brand-bar" id="brand-bar" />;
		return (
			<div>
				<Helmet>
					<title>Brand Bar</title>
					<meta name="description" content="Page about Brand Bars" />
				</Helmet>
				<div>
					<h1>Brand Bar</h1>
					<p>To maintain brand consistency, Columbia Design Systems has developed a lockup system on which the official identification of all academic and administrative units should be based.</p>

				<h2>Examples</h2>
				<figure>
					<figcaption>Example</figcaption>
					{mainBrandBar}
				</figure>

				<h2>Markup</h2>
				<PrintComponent component={mainBrandBar} language="html" />

				</div>
			</div>
		)
	}

}

export default BrandBars;
