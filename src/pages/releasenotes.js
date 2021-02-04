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
        
        <h2>Columbia Design System 1.0</h2>
        
        <p>Columbia Design System is now live. The system is a collection of modular design elements meant to provide digital designers and developers with ready-to-use code that is responsive, accessible, and in keeping with Columbia web development, design, security, and identity guidelines.</p>
         
        <p>Design System is available to all Columbia faculty, staff, and students, and can be used on any Columbia digital project. Version 1.0 includes these features:</p>
         
        <h3>Quick-start Guide</h3>
        <p>Read the <Link to="/start/developer">developer guide</Link> for step-by-step instructions on getting the most out of this system. The guide provides handy references to University branding and security guidelines as well as information on accessibility, usability, domain names, and other helpful advice.</p>
         
        <h3>Components</h3>
        <p>The initial set is the first of several planned batches; here’s what you can use right now:</p>
        <ul>
          <li>Accordion</li>
          <li>Alert</li>
          <li>Breadcrumb</li>
          <li>Button</li>
          <li>Drop Down</li>
          <li>Hero</li>
          <li>Modal Window</li>
          <li>Pagination</li>
          <li>Pull Quote</li>
          <li>Progress Bar</li>
          <li>Toggle Switch</li>
          <li>Icons</li>
        </ul>
         
         <p>We have grand plans for building out additional components, so check back often or email us with questions at designsystem@columbia.edu.</p>
      </div>
    </div>
  )
}

export default ReleaseNotes
