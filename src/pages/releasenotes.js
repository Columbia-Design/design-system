import React from 'react'
import { Helmet } from "react-helmet"
import {Link} from "react-router-dom";

function ReleaseNotes() {
    return (
        <div>
            <Helmet>
                <title>Release Notes</title>
                <meta name="description" content="Project release notes" />
                <link rel="canonical" href="https://designsystem.columbia.edu/contribute" />
            </Helmet>
            <div className="ds-masthead pl-md-5">
                
                <h1>Release Notes</h1>
                
                <p>TBD</p>

                <h2>Questions?</h2>
                <p>Email the team at <a href="mailto:designsystem@columbia.edu">designsystem@columbia.edu</a>.</p>
                  
            </div>
        </div>
    )
}

export default ReleaseNotes
