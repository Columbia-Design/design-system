import React from 'react';
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div>
      <Helmet>
        <title>Not Found Page</title>
        <meta name="description" content="this page could not be found" />
        <link rel="canonical" href="https://brand.columbia.edu/404" />
      </Helmet>
      <div>
        <h1>Not Found</h1>
        <p>Please visit our <NavLink to="/" className="nav-link">Home</NavLink></p>
      </div>
    </div>
  )
}

export default About
