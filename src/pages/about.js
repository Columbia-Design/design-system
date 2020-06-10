import React from 'react'
import { Helmet } from "react-helmet"
import {Link} from "react-router-dom";

function About() {
  return (
    <div>
      <Helmet>
        <title>About Columbia Design System</title>
        <meta name="description" content="about design systems our mission" />
        <link rel="canonical" href="https://brand.columbia.edu/about" />
      </Helmet>
      <div className="ds-masthead pl-md-5">
        <h1>About Columbia Design System</h1>
        <h2>Who</h2>
				<p>Four University groups collaborated to build this system: Columbia University Information Technology, Office of Communications and Public Affairs, Columbia College Information Technology, and Columbia Creative.</p>
				<p>But we’re always looking for partners; <Link to="/contribute">learn how to contribute to the system</Link>.</p>

				<h2>What</h2>
				<p>A foundational collection of modular digital components, layouts, design elements, and styling that is responsive, accessible, secure, on-brand, and platform-agnostic</p>
				<p>
					Current version: 1.0<br />
					Next scheduled release: July 1, 2020
				</p>

				<h2>Why</h2>
				<p>Columbia Design System complies with University branding, development, security, and accessibility policies. Utilizing it means saving time and money on design, development, branding, and user testing.</p>
					
				<h2>Where</h2>
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

export default About
