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
		{	"id": "simple",
			"active": 1,
			"title": "Deadline and Decisions",
			"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
		},
		{	
			"id": "simple",
			"active": 1,
			"title": "Admissions Advisement",
			"innerHeading": "Inner Heading",
			"text": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			"id": "simple",
			"active": 0,
			"title": "Course Requirements",
			"innerHeading": "Subject",
			"text": "Sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
	];

	const ac2 =  [
		{
			"id": "numeric",
			"active": 1,
			"title": "Shut down and unplug your machine",
			"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			"id": "numeric",
			"active": 0,
			"title": "Remove Screws",
			"innerHeading": "Be sure to remove all screws",
			"text": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			"id": "numeric",
			"active": 0,
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
			<p>An accordion is a vertical list of items, including text, tables, or images, in expandable tabs, one item per tab. The default behavior expands the first item with other items collapsed and displays the items in the order they are entered. The list can also be displayed as a numbered list. Users can expand or contract an accordion with one click.</p>
			
			<h2>Usage</h2>
			<p>Use alerts to communicate deadlines, changes to important information, and emergencies. But use them sparingly—if users become accustomed to seeing an alert frequently, they may become desensitized to it.</p>
			
			<h2>Examples</h2>
			<h3>Simple Accordion</h3>
			<figure>
				{accordionPlain}
			</figure>

			<h4>Markup</h4>
			<PrintComponent component={accordionPlain} figcaption="Simple Accordion" language="html" />

			<h3>Numeric Accordion</h3>
			<figure>
				{accordionNumeric}
			</figure>

			<h4>Markup</h4>
			<PrintComponent component={accordionNumeric} figcaption="Numeric Accordion" language="html" />

        </div>
      </div>
    )
  }

}

export default Accordions
