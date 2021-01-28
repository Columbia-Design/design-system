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
					<p>A button is a graphic used to direct users’ attention to a task or action by hyperlinking to relevant information. They are also called call-to-action buttons, or CTAs. They are pill-shaped and either compliment or contrast with the primary color of the site or app.</p>
					
					<h2>Usage</h2>
					<p>Use buttons to engage users to begin or complete a task.</p>

					<h2>Examples</h2>
					<h3>Primary Button</h3>
					<figure>{buttonPrimary}</figure>
					<PrintComponent component={buttonPrimary} language="html" figcaption="Primary button markup"/>
					
					<h3>Secondary Button</h3>
					<figure>{buttonSecondary}</figure>
					<PrintComponent component={buttonSecondary} language="html" figcaption="Secondary button markup"/>

					<h3>Disabled Button</h3>
					<figure>{buttonDisabled}</figure>
					<PrintComponent component={buttonDisabled} language="html" figcaption="Disabled button markup"/>

        </div>
      </div>
    )
  }

}

export default Buttons
