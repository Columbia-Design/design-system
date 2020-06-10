import React from 'react'
import { Helmet } from "react-helmet"
import {Link} from "react-router-dom";

function GettingStarted() {
    return (
        <div>
            <Helmet>
                <title>Getting Started</title>
                <meta name="description" content="How to get started" />
                <link rel="canonical" href="https://designsystem.columbia.edu/start" />
            </Helmet>
            <div className="ds-masthead pl-md-5">
                
                <h1>Getting Started</h1>
                <h2>Can I use the pattern library?</h2>
                <p>If you’re a current Columbia student or faculty or staff member, yes. You’ll need your UNI to download logos and patterns from the repository.</p>
                <h2>Will the elements and components work for my project?</h2>
                <p>If your project is a website, web-based application, or mobile app&mdash;or if it has a digital user interface&mdash;yes, the patterns will work for you. But read the documentation for the elements you plan to use early in your design process because there are limitations.</p>
                <h2>How to Use the Design System</h2>
                <ul>
                  <li>Review Columbia <a href="https://visualidentity.columbia.edu">identity guidelines</a>.</li>
                  <li>Familiarize yourself with University <a href="https://visualidentity.columbia.edu/content/user-experience-and-usability-standards">usability guidelines</a>.</li>
                  <li>Read the <Link to="/start/developer">developer guide</Link>.</li>
                  <li>Read the <Link to="/release-notes">project release notes</Link> to catch up on the latest.</li>
                  <li><a href="mailto:designsystem@columbia.edu">Ask for help</a> if you get stuck.</li>
                  <li>Give back by <Link to="/contribute">contributing code or designs</Link>.</li>
                </ul>
                <p><Link to="/start/developer" className="btn btn-lg btn-outline-primary mb-3">Read the Developer Guide</Link></p>
                <h2>Questions?</h2>
                <p>Email the team at <a href="mailto:designsystem@columbia.edu">designsystem@columbia.edu</a>.</p>
                  
            </div>
        </div>
    )
}

export default GettingStarted
