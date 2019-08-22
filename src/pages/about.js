import React from 'react'
import { Helmet } from "react-helmet"

function About() {
  return (
    <div>
      <Helmet>
        <title>About Page</title>
        <meta name="description" content="about design systems our mission" />
        <link rel="canonical" href="https://brand.columbia.edu/about" />
      </Helmet>
      <div>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
}

export default About
