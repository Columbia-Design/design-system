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
				<p className="lead">
				Welcome. This design system is a collection of modular design elements meant to provide digital designers and developers with ready-to-use code that is responsive, accessible, and in keeping with Columbia web development, design, security, and identity guidelines.
				</p>

				<p>The system can be used on any Columbia digital project and includes:</p>

				<ul>
					<li>
						a layout system
					</li>
					<li>
						a browsable collection of patterns
					</li>
					<li>
						documentation of all elements
					</li>
					<li>
						examples of how each element is used in a current project
					</li>
				</ul>

				<p>The system is available to all Columbia faculty, staff, and students.</p>

				<p>If you have questions about access or would like to contribute to the library, email the Design System team.</p>

				<div className="row mx-n2">
					<div className="col-md px-2">
						<Link to="/content" className="btn btn-lg btn-outline-primary w-100 mb-3">
							Get started
						</Link>
					</div>
					<div className="col-md px-2">
						<a href="https://github.com/Columbia-Design/design-system" className="btn btn-lg btn-outline-secondary w-100 mb-3">
							Download
						</a>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Home
