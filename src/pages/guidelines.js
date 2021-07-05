import React from 'react'
import { Helmet } from "react-helmet"
import {Link} from "react-router-dom";

function Guidelines() {
    return (
        <div>
            <Helmet>
                <title>Guidelines</title>
                <meta name="description" content="How to get started" />
                <link rel="canonical" href="https://designsystem.columbia.edu/guidelines" />
            </Helmet>

            <h1>Guidelines</h1>
            <h2>Can I use the pattern library?</h2>
            <p>If you’re a current Columbia student or faculty or staff member, yes. You’ll need your UNI to download logos and patterns from the repository.</p>
            <h2>Will the elements and components work for my project?</h2>
            <p>If your project is a website, web-based application, or mobile app—or if it has a digital user interface—yes, the patterns will work for you. But read the code standards and documentation for the elements you plan to use early in your design process because there are limitations.</p>
            <h2>How to use the Design System</h2>
            <ul>
                <li>Review Columbia code standards and <a href="https://visualidentity.columbia.edu">identity guidelines</a>.</li>
                <li>Familiarize yourself with University <a href="https://visualidentity.columbia.edu/content/user-experience-and-usability-standards">usability guidelines</a>.</li>
                <li>Read the <Link to="/start/developer">developer guide</Link>.</li>
                <li>Read the <Link to="/release-notes">release notes</Link> to catch up on the latest.</li>
                <li><a href="mailto:designsystem@columbia.edu">Ask for help</a> if you get stuck.</li>
                <li>Give back by <Link to="/contribute">contributing code or designs</Link>.</li>
            </ul>
            <p><Link to="/start/developer" className="btn btn-outline-primary mb-3">Read the Developer Guide</Link></p>
        </div>
    )
}

export default Guidelines
