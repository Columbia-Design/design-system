import React from "react";
import { Helmet } from "react-helmet";
import Alert from "../react-components/alert";
import PrintComponent from "../util/print-component";

class Alerts extends React.Component {
  constructor(props) {
		super(props);
  }

  render(){

	const defaultAlert = <Alert class="alert-cuprimary" text="This is the primary alert style. <a href='#'>Link to more information</a>"/>;
	const successAlert = <Alert class="alert-cusuccess" text="This is the success alert style. <a href='#'>Link to the documentation</a>"/>;
	const warningAlert = <Alert class="alert-cuwarning" text="This is the warning alert style. <a href='#'>Link to the warning document</a>"/>;
	const dangerAlert = <Alert class="alert-cudanger" text="This is the danger alert style. <a href='#'>Link to the alert document</a>"/>;

    return (
      <div>
        <Helmet>
          <title>Alerts</title>
          <meta name="description" content="Page about Alerts" />
        </Helmet>
        <div>
        	<h1>Alerts</h1>
			<p>An alert displays at the top of every page of a website or app screen, and is used to notify users of important, time-sensitive information. They are also a distinctive color based on the type of information being communicated: green for documentation, orange for time-sensitive information, red for emergencies. Users can close the alerts with one click.</p>
			
			<h2>Usage</h2>
			<p>Use alerts to communicate deadlines, changes to important information, and emergencies. But use them sparingly—if users become accustomed to seeing an alert frequently, they may become desensitized to it.</p>

			<h2>Examples</h2>
			
			<h3>Primary Alert</h3>
			<figure>{defaultAlert}</figure>
			<PrintComponent component={defaultAlert} language="html" />
			
			<h3>Success Alert</h3>
			<figure>{successAlert}</figure>
			<PrintComponent component={successAlert} language="html" />
			
			<h3>Warning Alert</h3>
			<figure>{warningAlert}</figure>
			<PrintComponent component={warningAlert} language="html" />
			
			<h3>Danger Alert</h3>
			<figure>{dangerAlert}</figure>
			<PrintComponent component={dangerAlert} language="html" />					

        </div>
      </div>
    )
  }

}

export default Alerts
