import React from 'react';
import { Helmet } from "react-helmet";


function Components() {
  return (
    <div>
      <Helmet>
        <title>Components Page</title>
        <meta name="description" content="this page contains all cu design system components" />
      </Helmet>
      <div>
        <h1>Components</h1>
        <p>This page will contain all components</p>
      </div>
    </div>
  )
}

export default Components
