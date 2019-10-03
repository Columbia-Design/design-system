import React from "react";
import { Helmet } from "react-helmet";
import Alert from "../react-components/alert";
import PrintComponent from "../util/print-component";

class Alerts extends React.Component {
  constructor(props) {
		super(props);
  }

  render(){

	const defaultAlert = <Alert class="alert-secondary" text="This is the secondary alert style from Bootstrap"/>;
	const successAlert = <Alert class="alert-success" text="This is the success alert style from Bootstrap"/>;
	const warningAlert = <Alert class="alert-cu-alert-warning" text="This is the warning alert style from Bootstrap"/>;
	const dangerAlert = <Alert class="alert-cu-alert-danger" text="This is the danger alert style from Bootstrap"/>;

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
					<PrintComponent component={defaultAlert} figcaption="Secondary Alert" language="html" />
					<PrintComponent component={successAlert} figcaption="Success Alert" language="html" />
					<PrintComponent component={warningAlert} figcaption="Warning Alert" language="html" />
					<PrintComponent component={dangerAlert} figcaption="Danger Alert" language="html" />

        </div>
      </div>
    )
  }

}

export default Alerts
