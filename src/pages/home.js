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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<p className="lead">
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>

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
