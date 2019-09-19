import React from "react";
import {PrismCode} from './prism-component';
import { html_beautify } from 'js-beautify';
import ReactDOMServer from 'react-dom/server';

import 'prismjs/themes/prism.css';

class PrintComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	parseString(string){
		return html_beautify(string, {
			"indent-size": 4,
			"inline" : []
		});
	}

	render(){

		const component = (this.props.plainHtml) ? this.props.component : ReactDOMServer.renderToStaticMarkup(this.props.component);

		return (
			<figure className="highlight">
				<figcaption>{this.props.figcaption}</figcaption>
				<PrismCode
					code={this.parseString(component)}
					language={this.props.language} />
			</figure>
		)
	}

}

export default PrintComponent;