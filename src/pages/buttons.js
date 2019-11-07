import React from "react";
import { Helmet } from "react-helmet";
import Button from "../react-components/button";
import PrintComponent from "../util/print-component";

class Buttons extends React.Component {
  constructor(props) {
		super(props);
		this.state = {};
  }

  render(){

		const buttonPrimary = <Button class="btn btn-primary" text="Primary button"/>;
		const buttonSecondary = <Button class="btn btn-secondary" text="Secondary button"/>;
		const buttonDisabled = <Button class="btn btn-primary" text="Disabled button" disabled="true"/>;

    return (
      <div>
        <Helmet>
          <title>Buttons</title>
          <meta name="description" content="Page about Buttons" />
        </Helmet>
        <div>
        	<h1>Buttons</h1>
					<p>This page contains short list of availabe button elements</p>

					<h2>Examples</h2>
					<figure>
						{buttonPrimary} &nbsp;
						{buttonSecondary} &nbsp;
						{buttonDisabled}
					</figure>

					<h2>Markup</h2>
					<PrintComponent component={buttonPrimary} figcaption="Primary Button" language="html" />
					<PrintComponent component={buttonSecondary} figcaption="Secondary Button" language="html" />
					<PrintComponent component={buttonDisabled} figcaption="Disabled Button" language="html" />

        </div>
      </div>
    )
  }

}

export default Buttons
