import React from 'react'
import { Helmet } from "react-helmet"
import {Link} from "react-router-dom";

function Designer() {
    return (
        <div>
            <Helmet>
                <title>Designer Guide</title>
                <meta name="description" content="Designer's guide to the design system" />
                <link rel="canonical" href="https://designsystem.columbia.edu/guidelines/designer" />
            </Helmet>

              <h1>Developer’s Guide</h1>

              <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
              
              <blockquote class="blockquote">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</blockquote>
              
              <p>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.</p>
        </div>
    )
}

export default Designer
