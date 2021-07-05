import React from 'react'
import { Helmet } from "react-helmet"
import {Link} from "react-router-dom";

function Branding() {
    return (
        <div>
            <Helmet>
                <title>Branding and Identity Guidelines</title>
                <meta name="description" content="Brand and Identity Guidelines from Columbia University" />
                <link rel="canonical" href="https://designsystem.columbia.edu/guidelines/branding" />
            </Helmet>

              <h1>Branding and Identity Guidelines</h1>
              <p>Brand and identity guidelines for Columbia University and its schools are available online:</p>
              <ul>
                <li><a href="https://visualidentity.columbia.edu">Columbia University Identity Guidelines</a></li>
                <li><a href="http://www.columbia.edu/files/columbia/content/blue290.pdf">A Practical Guide to Columbia’s Standards of Visual Identity</a> (PDF)</li>
                <li><a href="https://www.communications.cuimc.columbia.edu/branding-identity">Columbia University Irving Medical Center Branding and Identity</a></li>
                <li><a href="https://www8.gsb.columbia.edu/identity/video/brand-guidelines">Columbia Business School Identity Guidelines</a></li>
                
              </ul> 
              <h2>Figma files</h2>
              <p><a href="https://www.figma.com/file/p747p3sKfONIatEjJ6s0uR/Component-Library?node-id=0%3A1">References designs for the Columbia Design System</a> are available in <a href="https://www.figma.com">Figma</a>.</p>
        </div>
    )
}

export default Branding
