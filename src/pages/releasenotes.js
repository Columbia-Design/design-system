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
          <li><Link to="/components">Accordion</Link></li>
          <li><Link to="/components/alerts">Alert</Link></li>
          <li><Link to="/components/breadcrumb">Breadcrumb</Link></li>
          <li><Link to="/components/buttons">Button</Link></li>
          <li><Link to="/components/dropdown">Drop Down</Link></li>
          <li><Link to="/components/heroes">Hero</Link></li>
          <li><Link to="/components/modal">Modal Window</Link></li>
          <li><Link to="/components/pagination">Pagination</Link></li>
          <li><Link to="/components/pullquote">Pull Quote</Link></li>
          <li><Link to="/components/progressbars">Progress Bar</Link></li>
          <li><Link to="/components/sliders">Toggle Switch</Link></li>
          <li><Link to="/components/icons">Icons</Link></li>
        </ul>
         
         <p>We have grand plans for building out additional components, so check back often or email us with questions at designsystem@columbia.edu.</p>
      </div>
    </div>
  )
}

export default ReleaseNotes
