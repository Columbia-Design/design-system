import React from "react";
import { Helmet } from "react-helmet";
import ProgressBar from "../react-components/progress-bar";
import PrintComponent from "../util/print-component";

class ProgressBars extends React.Component {
  constructor(props) {
		super(props);
  }

  render(){

		const defaultBar = <ProgressBar />;

    return (
      <div>
        <Helmet>
          <title>Progress Bar</title>
          <meta name="description" content="Page about Progress Bars" />
        </Helmet>
        <div>
        	<h1>Progress Bar</h1>
					<p>This page describes the progress bar component</p>

					<h2>Examples</h2>
					<figure>
						{defaultBar}
					</figure>

					<h2>Markup</h2>
					<PrintComponent component={defaultBar} figcaption="Progress Bar" language="html" />

        </div>
      </div>
    )
  }

}

export default ProgressBars
