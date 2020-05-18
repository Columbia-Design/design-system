import React from 'react'
import { Helmet } from "react-helmet"
import {Link} from "react-router-dom";

function Designer() {
    return (
        <div>
            <Helmet>
                <title>Designer Guide Guide</title>
                <meta name="description" content="How to get started" />
                <link rel="canonical" href="https://designsystem.columbia.edu/start/designer" />
            </Helmet>
            <div className="ds-masthead pl-md-5">
                <h1>Designer Guide</h1>




                <h2>Questions?</h2>
                <p>Email the team at <a href="mailto:designsystem@columbia.edu">designsystem@columbia.edu</a>.</p>
            </div>
        </div>
    )
}

export default Designer
