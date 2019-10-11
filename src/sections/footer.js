import React from 'react'

function Footer() {
  return (
    <footer role="contentinfo" className="container-fluid">
      &copy;{(new Date().getFullYear())} Columbia University
    </footer>
  )
}

export default Footer
