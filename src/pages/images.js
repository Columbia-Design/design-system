import React from "react";
import { Helmet } from "react-helmet";
import renderHTML from 'react-render-html';
import PrintComponent from "../util/print-component";
import logoBlack from "../assets/img/logo-black.jpg";

const ResponsiveImages = `
<img src="` + logoBlack + `" class="img-fluid" alt="Responsive image">`.trim();

const ImageThumbnails = `
<img src="` + logoBlack + `" alt="..." class="img-thumbnail">
`.trim();

const AligningImages1 = `
<img src="` + logoBlack + `" class="w-25 rounded float-left" alt="...">
<img src="` + logoBlack + `" class="w-25 rounded float-right" alt="...">
`.trim();

const AligningImages2 = `
<div class="text-center">
  <img src="` + logoBlack + `" class="w-25 rounded" alt="...">
</div>
`.trim();

class Images extends React.Component {
  constructor(props) {
		super(props);
		this.state = {};
  }

  render(){

    return (
      <div>
        <Helmet>
          <title>Images</title>
          <meta name="description" content="Documentation and examples for opting images into responsive behavior" />
        </Helmet>
        <div>
        	<h1>Images</h1>
					<p>Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes.</p>


					<h2>Responsive images</h2>
					<p>Images in Bootstrap are made responsive with <code>{`.img-fluid`}</code>.</p>
					<p><code>{`max-width: 100%;`}</code> and <code>{`height: auto;`}</code> are applied to the image so that it scales with the parent element.</p>
					<figure>
						{renderHTML(ResponsiveImages)}
					</figure>

					<PrintComponent component={ResponsiveImages} language="html" plainHtml="true" figcaption="Markup" />


					<h2>Image thumbnails</h2>
					<p>You can use  <code>{`.img-thumbnail`}</code> to give an image a rounded 1px border appearance.</p>
					<figure>
						{renderHTML(ImageThumbnails)}
					</figure>

					<PrintComponent component={ImageThumbnails} language="html" plainHtml="true" figcaption="Markup" />


					<h2>Aligning images</h2>

					<figure className="clearfix">
						{renderHTML(AligningImages1)}
					</figure>

					<PrintComponent component={AligningImages1} language="html" plainHtml="true" figcaption="Markup" />

					<figure>
						{renderHTML(AligningImages2)}
					</figure>

					<PrintComponent component={AligningImages2} language="html" plainHtml="true" figcaption="Markup" />

        </div>
      </div>
    )
  }

}

export default Images
