import React from "react";
import { Helmet } from "react-helmet";
import Slider from "../react_components/slider";
import prism from 'prismjs';
import 'prismjs/themes/prism.css';
import ReactHtmlParser from 'react-html-parser';
import {PrismCode} from '../prism-component';

import ReactDOMServer from 'react-dom/server';



class Sliders extends React.Component {
  constructor(props) {
	super(props);
	this.state = {};
	this.ref = React.createRef();
  }

  componentDidMount() {
    this.highlight()
  }
  highlight = () => {
    if (this.ref && this.ref.current) {
	  //console.log(this.ref.current);
	  let element = document.getElementById(this.ref.current.props.id);
	  console.log(element);

    }
  }
  parseString(string){
	let html = prism.highlight(string, prism.languages.html, 'html');
	return {__html: html};
  }

  render(){

	//maybe we can have node render html as a string for later usage
	// see if we can reference the dom nodes created by react

	const mainSlider = <Slider class="main switch" id="slider-1" ref={this.ref}/>;
	const mainSliderString = ReactDOMServer.renderToStaticMarkup(mainSlider); // plain html markup
	//const rendereded = ReactDOMServer.renderToString(mainSlider); //creates markup with react elements in it

	const testString = `
		<div class="test">
			<h2>next line</h2>
			<div>
				<span>hello world</span>
				testing new line
			</div>
		</div>`;


	return (
      <div>
        <Helmet>
          <title>Sliders</title>
          <meta name="description" content="Page about Sliders" />
        </Helmet>
        <div>
        	<h1>Sliders</h1>
			<p>This page contains short list of availabe slider elements</p>

			<h2>Examples</h2>
			<figure>
				<figcaption>Example 1</figcaption>
				{mainSlider}
			</figure>

			<h2>Markup</h2>
			<figure className="highlight">
				<figcaption>Code example</figcaption>
				{/* <pre><code className="language-html" dangerouslySetInnerHTML={this.parseString(mainSliderString)}></code></pre> */}
				<pre><code className="language-html">{ReactHtmlParser(prism.highlight(mainSliderString, prism.languages.html, 'html'))}</code></pre>
			</figure>

			<figure className="highlight">
				<figcaption>Code example 2</figcaption>
				<PrismCode
					code={testString}
					language="html"
					plugins={["line-numbers"]} />
			</figure>


			<h2>Styles</h2>
			<figure className="highlight">
				<div><code>Place to hold styles</code></div>
			</figure>

        </div>
      </div>
    )
  }

}

export default Sliders
