import React from "react";
import { Helmet } from "react-helmet";
import Alert from "../react-components/alert";
import PrintComponent from "../util/print-component";

class Alerts extends React.Component {
  constructor(props) {
		super(props);
  }

  render(){

	const defaultAlert = <Alert class="alert-cuprimary" text="This is the primary alert style"/>;
	const successAlert = <Alert class="alert-cusuccess" text="This is the success alert style"/>;
	const warningAlert = <Alert class="alert-cuwarning" text="This is the warning alert style"/>;
	const dangerAlert = <Alert class="alert-cudanger" text="This is the danger alert style"/>;

    return (
      <div>
        <Helmet>
          <title>Alerts</title>
          <meta name="description" content="Page about Alerts" />
        </Helmet>
        <div>
        	<h1>Alerts</h1>
					<p>This page describes the alert component</p>

					<h2>Examples</h2>
					<figure>
						{defaultAlert}
						{successAlert}
						{warningAlert}
						{dangerAlert}
					</figure>

					<h2>Markup</h2>
					<PrintComponent component={defaultAlert} figcaption="Primary Alert" language="html" />
					<PrintComponent component={successAlert} figcaption="Success Alert" language="html" />
					<PrintComponent component={warningAlert} figcaption="Warning Alert" language="html" />
					<PrintComponent component={dangerAlert} figcaption="Danger Alert" language="html" />

        </div>
      </div>
    )
  }

}

export default Alerts
