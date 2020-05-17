import React from 'react'
import { Helmet } from "react-helmet"
import {Link} from "react-router-dom";

function GettingStarted() {
    return (
        <div>
            <Helmet>
                <title>Getting Started</title>
                <meta name="description" content="How to get started" />
                <link rel="canonical" href="https://designsystem.columbia.edu/getting_started" />
            </Helmet>
            <div className="ds-masthead pl-md-5">
                <h1>Getting Started</h1>

                <h2>Can I use the pattern library?</h2>
                <p>If you’re a current Columbia student or faculty or staff member, yes. You’ll need your UNI to download logos and patterns from the repository.</p>
                <h2>Will the elements and components work for my project?</h2>
                <p>If your project is a website, web-based application, or mobile app—or if it has a digital user interface—yes, the patterns will work for you. But read the code standards and documentation for the elements you plan to use early in your design process because there are limitations.</p>
                <h2>How to Use the Design System</h2>
                <ol>
                    <li>Review Columbia <a href="#">code standards</a> and <a href="https://visualidentity.columbia.edu">identity guidelines</a>.</li>
                    <li>Familiarize yourself with University <a href="#">usability</a> and <a href="#">accessibility policies</a>.</li>
                    <li>Read the <Link to="/developer">developer</Link> and <Link to="/designer">designer</Link> guides.</li>
                    <li>Explore examples of <a href="#">current projects</a> that utilize the system.</li>
                    <li>Read the <a href="#">release notes</a> to catch up on the latest.</li>
                    <li><a href="mailto:designsystem@columbia.edu">Ask for help</a> if you get stuck.</li>
                    <li>Give back by <a href="#">contributing code or designs</a>.</li>
                </ol>

                <div className="row mx-n2">
                    <div className="col-md px-2">
                        <Link to="/developer" className="btn btn-lg btn-outline-primary w-100 mb-3">
                            Read the Developer Guide
                        </Link>
                    </div>
                    <div className="col-md px-2">
                        <Link to="/designer" className="btn btn-lg btn-outline-primary w-100 mb-3">
                            Read the Designer Guide
                        </Link>
                    </div>
                </div>

                <h2>Questions?</h2>
                <p>Email the team at <a href="mailto:designsystem@columbia.edu">designsystem@columbia.edu</a>.</p>
            </div>
        </div>
    )
}

export default GettingStarted
