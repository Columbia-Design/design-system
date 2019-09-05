import React from 'react'
import { Helmet } from "react-helmet"

function Home() {
  return (
    <div>
      <Helmet>
        <title>Design System</title>
        <meta name="description" content="design systems homepage" />
        <link rel="canonical" href="https://brand.columbia.edu" />
      </Helmet>
      <div>
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  )
}

export default Home
