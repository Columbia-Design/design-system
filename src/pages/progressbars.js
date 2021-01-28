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
					<p>Progress bars list the steps in a process and identify which step a user is on.</p>
          
          <h2>Usage</h2>
          <p>Use progress bars to orient users within a series of steps in a process or to indicate level of progress toward completion of a goal or task.</p>

					<h2>Example</h2>
					<figure>
						{defaultBar}
					</figure>
					<PrintComponent component={defaultBar} figcaption="Progress bar markup" language="html" />

        </div>
      </div>
    )
  }

}

export default ProgressBars
