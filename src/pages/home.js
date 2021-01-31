import React from 'react'
import { Helmet } from "react-helmet"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Helmet>
        <title>Columbia University Design System</title>
        <meta name="description" content="" />
        <link rel="canonical" href="https://brand.columbia.edu" />
      </Helmet>
			<div className="ds-masthead pl-md-5">
				<h1>
					Columbia University<br />
					Design System
				</h1>
				<h2>Welcome</h2>
				<p>Columbia Design System is a collection of modular design elements meant to provide digital designers and developers with ready-to-use code that is responsive, accessible, and in keeping with University web development, design, security, usability, and identity guidelines.</p>

				<p>The repository, available to all Columbia faculty, staff, and students, can be used on any Columbia digital project and includes:</p>

				<ul>
					<li>
						Layout system
					</li>
					<li>
						Browsable collection of patterns
					</li>
					<li>
						Documentation of all elements
					</li>
					<li>
						Examples of each element used in a project
					</li>
				</ul>

				<p>
						<Link to="/start" className="btn btn-lg btn-outline-primary mr-4">
							Get started
						</Link>
                        
            <a href="https://github.com/Columbia-Design/design-system" className="btn btn-lg btn-outline-secondary">
							Download
						</a>
				</p>
        
        <h2>About Columbia Design System</h2>
        
        <h3>Who</h3>
        
        <p>University groups collaborated to build this system: <a href="https://cuit.columbia.edu">Columbia University Information Technology</a>, <a href="https://communications.news.columbia.edu">Office of Communications and Public Affairs</a>, and <a href="https://creative.columbia.edu">Columbia Creative</a>.</p>
        
        <p>We’re always looking for partners; <Link to="/contribute">learn how to contribute to the system</Link>.</p>
        
        <h3>What</h3>
        
        <p>A pattern library of modular digital components, layouts, design elements, and styling that is responsive, accessible, secure, on-brand, and platform-agnostic.</p>
         
        <p>Current version: 1.0</p>

        <h3>Why</h3>
        
        <p>It’s free. Columbia Design System complies with University branding, development, security, and accessibility policies. Utilizing it means saving time and money on design, development, branding, and user testing. And it’s so much easier than starting from scratch.</p>
        
        <blockquote class="blockquote pullquote">
          <p>Plus, we may have forgotten to mention that it’s free.</p>
        </blockquote>
          
        <h3>Where</h3>
        
        <p>Right here. Check back often for updates, and here are more Columbia digital resources:</p>
        <ul>
          <li><a href="https://sites.columbia.edu">Columbia Sites</a> offers modern, affordable, easy-to-use websites for University research, academic, and administrative groups</li>
          <li>View branding guidelines and download a logo at <a href="https://visualidentity.columbia.edu">visualidentity.columbia.edu</a></li>
        </ul>

        <h2>Questions?</h2>
        <p>Email the team at <a href="mailto:designsystem@columbia.edu">designsystem@columbia.edu</a>.</p>
        
			</div>
    </div>
  )
}

export default Home
