import React from "react";
import { Helmet } from "react-helmet";
import renderHTML from 'react-render-html';
import PrintComponent from "../util/print-component";

const Headings = `
<h1>h1. Heading</h1>
<h2>h2. Heading</h2>
<h3>h3. Heading</h3>
<h4>h4. Heading</h4>
<h5>h5. Heading</h5>
<h6>h6. Heading</h6>`.trim();

const HeadingsClasses = `
<p class="h1">h1. Bootstrap heading</p>
<p class="h2">h2. Bootstrap heading</p>
<p class="h3">h3. Bootstrap heading</p>
<p class="h4">h4. Bootstrap heading</p>
<p class="h5">h5. Bootstrap heading</p>
<p class="h6">h6. Bootstrap heading</p>`.trim();

const InlineText = `
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
`.trim();

const Abbreviations = `
<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
`.trim();

const Blockquotes = `
<blockquote class="blockquote">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
`.trim();

const Lists = `
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
`.trim();

class Typography extends React.Component {
  constructor(props) {
		super(props);
		this.state = {};
  }

  render(){

    return (
      <div>
        <Helmet>
          <title>Typography</title>
          <meta name="description" content="Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more." />
        </Helmet>
        <div>
        	<h1>Typography</h1>
					<p>Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.</p>


					<h2>Headings</h2>
					<p>All HTML headings, <code>{`<h1>`}</code> through <code>{`<h6>`}</code>, are available.</p>
					<figure>
						{renderHTML(Headings)}
					</figure>

					<PrintComponent component={Headings} language="html" plainHtml="true" figcaption="Markup" />


					<h2>Headings Classes</h2>
					<p><code>{`.h1`}</code> through <code>{`.h6`}</code> classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.</p>
					<figure>
						{renderHTML(HeadingsClasses)}
					</figure>

					<PrintComponent component={HeadingsClasses} language="html" plainHtml="true" figcaption="Markup" />


					<h2>Inline text elements</h2>
					<p>Styling for common inline HTML5 elements.</p>
					<figure>
						{renderHTML(InlineText)}
					</figure>

					<PrintComponent component={InlineText} language="html" plainHtml="true" figcaption="Markup" />


					<h2>Abbreviations</h2>
					<p>Stylized implementation of HTML’s {`<abbr>`} element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.</p>
					<p>Add <code>.initialism</code> to an abbreviation for a slightly smaller font-size.</p>
					<figure>
						{renderHTML(Abbreviations)}
					</figure>

					<PrintComponent component={Abbreviations} language="html" plainHtml="true" figcaption="Markup" />


					<h2>Blockquotes</h2>
					<p>For quoting blocks of content from another source within your document. Wrap <code>{`<blockquote class="blockquote">`}</code> around any HTML as the quote.</p>
					<figure>
						{renderHTML(Blockquotes)}
					</figure>

					<PrintComponent component={Blockquotes} language="html" plainHtml="true" figcaption="Markup" />


					<h2>Lists</h2>
					<figure>
						{renderHTML(Lists)}
					</figure>

					<PrintComponent component={Lists} language="html" plainHtml="true" figcaption="Markup" />


        </div>
      </div>
    )
  }

}

export default Typography
