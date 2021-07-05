import React from 'react'
import { Helmet } from "react-helmet"
import Hero from "../react-components/hero"
import { Link } from 'react-router-dom'
import home_flag from '../assets/img/home_flag.jpg'
import icon_crown from '../assets/img/icon-logo.png'
import icon_design from '../assets/img/icon-design.png'
import icon_merch from '../assets/img/icon-merchandise.png'
import icon_check from '../assets/img/icon-rights.png'
import icon_mail from '../assets/img/icon-stationary.png'

console.log(home_flag);

function Home() {
  return (
    <div>
      <Helmet>
        <title>Columbia University Design System</title>
        <meta name="description" content="" />
        <link rel="canonical" href="https://brand.columbia.edu" />
      </Helmet>
      <div className="container-fullbleed mb-4">
        <Hero class="hero-default" image={home_flag} alt="Columbia University flag flaps in the wind" heading="" text="Guidelines and best practices that promote a unified institutional identity and leverage Columbia's name, reputation, and trademarks in support of the University mission" cta="Download a Logo" ctalink="https://downloads.visualidentity.columbia.edu/"/>
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
        <div className="row font-size-sm">
          <div className="col-12 mt-5 mb-3">
            <h2>About Columbia Design System</h2>
          </div>
          <div className="col-md-4">
            <h3>Who</h3>
            <p>Three University groups collaborated on this project: <a href="https://cuit.columbia.edu">Columbia University Information Technology</a>, <a href="https://communications.news.columbia.edu">Office of Communications and Public Affairs</a>, and <a href="https://creative.columbia.edu">Columbia Creative</a>.</p>
            <p>But we’re always looking for partners; <Link to="/contribute">learn how to contribute</Link>.</p>
          </div>
          <div className="col-md-4">
            <h3>What</h3>
            <p>A pattern library of modular digital components, layouts, design elements, and styling that is responsive, accessible, secure, on-brand, and platform-agnostic.</p>
            <p>Current version: 1.0</p>
          </div>
          <div className="col-md-4">
            <h3>Why</h3>
            <p>It’s easy. It’s fast. It’s free. Columbia Design System complies with University branding, development, security, and accessibility policies. Utilizing it means saving time and money on design, development, branding, and user testing. And it’s so much easier than starting from scratch.</p>
          </div>
        </div>
        <div className="row text-center justify-content-center font-size-sm">
          <div className="col-12 mt-5 mb-3 text-center text-uppercase">
            <h2>Top Services</h2>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="card border-0">
              <img src={icon_crown} className="card-img-top" alt="crown"/>
              <div className="card-body p-0">
                <h3 className="h6 card-title mb-0"><a href="https://downloads.visualidentity.columbia.edu/">Download Logo</a></h3>
                <p className="card-text">Faculty and staff can use their UNI to login and download approved branding for Columbia-related projects.</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="card border-0">
              <img src={icon_design} className="card-img-top" alt="pen"/>
              <div className="card-body p-0">
                <h3 className="h6 card-title mb-0"><a href="mailto:creative@columbia.edu">Request a Custom Logo</a></h3>
                <p className="card-text">Ask us to create an identity for your office, department, or research center. Free to those on the Morningside campus.</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="card border-0">
              <img src={icon_design} className="card-img-top" alt="pen"/>
              <div className="card-body p-0">
                <h3 className="h6 card-title mb-0"><a href="mailto:creative@columbia.edu">Design Services</a></h3>
                <p className="card-text">Columbia Creative is the creative and strategic communications group responsible for stewarding the University brand. Contact us for print and digital design, branding, and ad placement.</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="card border-0">
              <img src={icon_merch} className="card-img-top" alt="Columbia C logo"/>
              <div className="card-body p-0">
                <h3 className="h6 card-title mb-0"><a href="mailto:hf2021@columbia.edu">Merchandising</a></h3>
                <p className="card-text">Request permission to use the Columbia identity on merchandise or non academic items.</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="card border-0">
              <img src={icon_check} className="card-img-top" alt="check"/>
              <div className="card-body p-0">
                <h3 className="h6 card-title mb-0"><a href="mailto:creative@columbia.edu">Rights and Permissions</a></h3>
                <p className="card-text">Find out who to ask about using the University identity on your conference poster or other academic project.</p>
              </div>
            </div>
          </div>  
        </div>
      </div>
      <div className="mt-5 mb-3">
        <h2>Questions?</h2>
        <p>Email the team at <a href="mailto:designsystem@columbia.edu">designsystem@columbia.edu</a>.</p>
      </div>
    </div>
  )
}

export default Home
