import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../react-components/hero";
import PrintComponent from "../util/print-component";

class Heroes extends React.Component {
  constructor(props) {
		super(props);
  }

  render(){

	const heroDefault = <Hero class="hero-default" image="https://www.columbia.edu/content/sites/default/files/styles/cu_crop/public/content/Morningside%20Campus%20at%20Dusk%202.jpg" alt="Picture of Campus" heading="Heading 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" cta="Do It Now!" />;
	const herotTopLeft = <Hero class="hero-topleft" image="https://www.columbia.edu/content/sites/default/files/styles/cu_crop/public/content/Morningside%20Campus%20at%20Dusk%202.jpg" alt="Picture of Campus" heading="Heading 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" cta="Do It Now!"/>;
	const herotTopRight = <Hero class="hero-topright" image="https://www.columbia.edu/content/sites/default/files/styles/cu_crop/public/content/Morningside%20Campus%20at%20Dusk%202.jpg" alt="Picture of Campus" heading="Heading 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" cta="Do It Now!"/>;
	const herotBottomLeft = <Hero class="hero-bottomleft" image="https://www.columbia.edu/content/sites/default/files/styles/cu_crop/public/content/Morningside%20Campus%20at%20Dusk%202.jpg" alt="Picture of Campus" heading="Heading 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" cta="Do It Now!"/>;
	const herotBottomRight = <Hero class="hero-bottomright" image="https://www.columbia.edu/content/sites/default/files/styles/cu_crop/public/content/Morningside%20Campus%20at%20Dusk%202.jpg" alt="Picture of Campus" heading="Heading 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" cta="Do It Now!"/>;

    return (
      <div>
        <Helmet>
          <title>Hero</title>
          <meta name="description" content="Page about Heroes" />
        </Helmet>
        <div>
        	<h1>Hero</h1>
					<p>A hero is a large image that “bleeds” off the edges of the web page or app screen. They are often used as banners to anchor a page or screen but can be used anywhere. Often, text and call-to-action buttons are positioned on top of the image.</p>
          
          <h2>Usage</h2>
          <p>Hero images add sophistication and energy to a page or screen and often set the tone for a user’s experience. Limit uploads to images of 72 pixels per inch.</p>

					<h2>Examples</h2>
          <h3>Default</h3>
					<figure>
						{heroDefault}
					</figure>
          <PrintComponent component={heroDefault} figcaption="Default hero markup" language="html" />
          <h3>Content top left</h3>
					<figure>
						{herotTopLeft}
					</figure>
          <PrintComponent component={herotTopLeft} figcaption="Hero, top left markup" language="html" />
          <h3>Content top right</h3>
          <figure>
						{herotTopRight}
					</figure>
          <PrintComponent component={herotTopRight} figcaption="Hero, top right markup" language="html" />
          <h3>Content bottom left</h3>
					<figure>
						{herotBottomLeft}
					</figure>
          <PrintComponent component={herotBottomLeft} figcaption="Hero, bottom left markup" language="html" />
          <h3>Content bottom right</h3>
					<figure>
						{herotBottomRight}
					</figure>
          <PrintComponent component={herotBottomRight} figcaption="Hero, bottom right markup" language="html" />

        </div>
      </div>
    )
  }

}

export default Heroes
