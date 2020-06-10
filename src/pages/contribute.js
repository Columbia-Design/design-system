import React from 'react'
import { Helmet } from "react-helmet"
import {Link} from "react-router-dom";

function Contribute() {
    return (
        <div>
            <Helmet>
                <title>Contribute</title>
                <meta name="description" content="How to cotribute" />
                <link rel="canonical" href="https://designsystem.columbia.edu/contribute" />
            </Helmet>
            <div className="ds-masthead pl-md-5">
                
                <h1>Contribute</h1>
                <h2>Eligible Contributions</h2>
                <p>To ensure high-quality elements and components that meet University development, <a href="https://cuit.columbia.edu/sites/default/files/content/Web%20Application%20Security%20Standards%20and%20Practices.pdf">security</a>, <a href="https://visualidentity.columbia.edu">branding</a>, and <a href="https://visualidentity.columbia.edu/content/user-experience-and-usability-standards">usability standards</a>, contributions must meet the following criteria to be considered for inclusion in the system:</p>
                <ul>
                  <li>Reusable with clear use case</li>
                  <li>Content- and platform-agnostic</li>
                  <li>Meet University accessibility and usability standards</li>
                  <li>Comply with University identity guidelines</li>
                  <li>Forward-looking design, UX, and development</li>
                  <li>Submitted with documentation</li>
                </ul>
                <p><a class="btn btn-lg btn-outline-primary mb-3" href="https://github.com/Columbia-Design/design-system">Submit a Contribution</a></p>
                <h2>Report an Issue</h2>
                <p>Help us maintain a high-quality repository of elements and components. <a href="https://github.com/Columbia-Design/design-system/issues">Report a problem</a> by submitting to our Github project with as much information as possible.</p>

                <h2>Questions?</h2>
                <p>Email the team at <a href="mailto:designsystem@columbia.edu">designsystem@columbia.edu</a>.</p>
                  
            </div>
        </div>
    )
}

export default Contribute
