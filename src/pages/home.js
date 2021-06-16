import React from 'react'
import { Helmet } from "react-helmet"
import Hero from "../react-components/hero";
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Helmet>
        <title>Columbia University Design System</title>
        <meta name="description" content="" />
        <link rel="canonical" href="https://brand.columbia.edu" />
      </Helmet>
      <div className="container-fullbleed mb-4">
        <Hero class="hero-default" image="https://visualidentity.columbia.edu/sites/default/files/styles/cu_crop/public/content/home_0.jpg?h=1c221afb&itok=dh1MCF_u" alt="Picture of Campus" heading="" text="Guidelines and best practices that promote a unified institutional identity and leverage Columbia's name, reputation, and trademarks in support of the University mission" cta="Download a Logo" ctalink="https://downloads.visualidentity.columbia.edu/"/>
      </div>
			<div className="container-fluid px-0">
        <div className="row">
          <div className="col-md-9 col-lg-8 col-xl-7">
    				<h1>Welcome</h1>
    				<p>Columbia Design System is a collection of modular design elements meant to provide digital designers and developers with ready-to-use code that is responsive, accessible, and in keeping with University web development, design, security, usability, and identity guidelines.</p>
    
    				<p>The repository, available to all Columbia faculty, staff, and students, can be used on any Columbia digital project and includes:</p>
    
    				<ul>
    					<li>Layout system</li>
    					<li>Browsable collection of patterns</li>
    					<li>Documentation of all elements</li>
    					<li>Examples of each element used in a project</li>
    				</ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5 mb-3">
            <h2>About Columbia Design System</h2>
          </div>
          <div className="col-md-4">
            <h3>Who</h3>
            <p>University groups collaborated to build this system: <a href="https://cuit.columbia.edu">Columbia University Information Technology</a>, <a href="https://communications.news.columbia.edu">Office of Communications and Public Affairs</a>, and <a href="https://creative.columbia.edu">Columbia Creative</a>.</p>
            <p>We’re always looking for partners; <Link to="/contribute">learn how to contribute to the system</Link>.</p>
          </div>
          <div className="col-md-4">
            <h3>What</h3>
            <p>A pattern library of modular digital components, layouts, design elements, and styling that is responsive, accessible, secure, on-brand, and platform-agnostic.</p>
            <p>Current version: 1.0</p>
          </div>
          <div className="col-md-4">
            <h3>Why</h3>
            <p>It’s free. Columbia Design System complies with University branding, development, security, and accessibility policies. Utilizing it means saving time and money on design, development, branding, and user testing. And it’s so much easier than starting from scratch.</p>
          </div>
        </div>
      </div>

      <h2>Questions?</h2>
      <p>Email the team at <a href="mailto:designsystem@columbia.edu">designsystem@columbia.edu</a>.</p>
        
    </div>
  )
}

export default Home
