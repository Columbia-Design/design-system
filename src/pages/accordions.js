import React from "react";
import { Helmet } from "react-helmet";
import Accordion from "../react-components/accordion";
import PrintComponent from "../util/print-component";

class Accordions extends React.Component {
  constructor(props) {
	super(props);
	this.state = {};
  }

  render(){
	const ac1 =  [
		{
			"title": "Deadline and Decisions",
			"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
		},
		{
			"title": "Admissions Advisement",
			"innerHeading": "Inner Heading",
			"text": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			"title": "Course Requirements",
			"innerHeading": "Subject",
			"text": "Sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
	];

	const ac2 =  [
		{
			"title": "Shut down and unplug your machine",
			"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			"title": "Remove Screws",
			"innerHeading": "Be sure to remove all screws",
			"text": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			"title": "Take out component",
			"innerHeading": "Subject",
			"text": "Sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
	];


	const accordionPlain = <Accordion data={ac1} type="plain" />;

	const accordionNumeric = <Accordion data={ac2} type="numeric" />;

    return (
      <div>
        <Helmet>
          <title>Accordions</title>
          <meta name="description" content="Accordion Component Page" />
        </Helmet>
        <div>
			<h1>Accordion</h1>
			<p>Accordions should have at minimun two items, with first item expanded by default</p>
			<p>Numeric VS Plain</p>
			<p>Numeric is good for outlining procedure</p>

			<figure>
				{accordionPlain}
				{accordionNumeric}
			</figure>

			<h2>Markup</h2>
			<PrintComponent component={accordionPlain} figcaption="Simple Accordion" language="html" />
			<PrintComponent component={accordionNumeric} figcaption="Numeric Accordion" language="html" />

        </div>
      </div>
    )
  }

}

export default Accordions
