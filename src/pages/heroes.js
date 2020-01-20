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
          <title>Heroes</title>
          <meta name="description" content="Page about Heroes" />
        </Helmet>
        <div>
        	<h1>Heroes</h1>
					<p>This page describes the hero component</p>

					<h2>Examples</h2>
					<figure>
						{heroDefault}
					</figure>
					<figure>
						{herotTopLeft}
					</figure>
					<figure>
						{herotTopRight}
					</figure>
					<figure>
						{herotBottomLeft}
					</figure>
					<figure>
						{herotBottomRight}
					</figure>

					<h2>Markup</h2>
					<PrintComponent component={heroDefault} figcaption="Default Hero" language="html" />
					<PrintComponent component={herotTopLeft} figcaption="Hero, top left" language="html" />
					<PrintComponent component={herotTopRight} figcaption="Hero, top right" language="html" />
					<PrintComponent component={herotBottomLeft} figcaption="Hero, bottom left" language="html" />
					<PrintComponent component={herotBottomRight} figcaption="Hero, bottom right" language="html" />
        </div>
      </div>
    )
  }

}

export default Heroes
