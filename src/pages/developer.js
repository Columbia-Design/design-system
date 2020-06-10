import React from 'react'
import { Helmet } from "react-helmet"
import {Link} from "react-router-dom";

function Developer() {
    return (
        <div>
            <Helmet>
                <title>Developer Guide</title>
                <meta name="description" content="Developer guide to the design system" />
                <link rel="canonical" href="https://designsystem.columbia.edu/start/developer" />
            </Helmet>
            <div className="ds-masthead pl-md-5">
                <h1>Developer Guide</h1>

                <p>There are several options for integrating Columbia Design System into your project. Check out our <a href="https://github.com/Columbia-Design/design-system">GitHub repository</a> for details, but here are a few things to check first:</p>
                <ul>
                  <li><a href="">Download the static assets</a>.</li>
                  <li>Check <a href="#section-browser">browser compatibility</a>.</li>
                  <li>Read the <a href="#seciton-js">Javascript documentation</a>.</li>
                  <li>Plan for <a href="#section-sso">single sign-on</a>.</li>
                </ul>

                <h2 id="section-browser">Browser Compatibility</h2>
                <p>Columbia Design System supports the latest two versions of these browsers:</p>
                <ul>
                  <li>Google Chrome</li>
                  <li>Mozilla FireFox</li>
                  <li>macOS Safari</li>
                  <li>iOS Safari</li>
                  <li>Microsoft Edge</li>
                </ul>

                <h2 id="section-js">JavaScript Documentation</h2>
                <p>Columbia Design System is based on Bootstrap version 4.x. Please follow the <a href="https://getbootstrap.com/docs/4.5/getting-started/introduction/#js">Bootstrap documentation</a> for incorporating JavaScript plugins.</p>
 
                <h2 id="section-sso">Single Sign-on at Columbia</h2>
                <p>Columbia uses <a href="https://cuit.columbia.edu/cas-authentication">CAS</a> and <a href="https://cuit.columbia.edu/shibboleth">Shibboleth</a> to provide UNI-based authentication and <a href="https://en.wikipedia.org/wiki/Single_sign-on">single sign-on</a> for applications that run in a web browser. These services also give applications access to a limited portion of the user’s role and demographic information from the University LDAP service to assist applications in account creation, customization, and authorization. <em>Authentication</em> involves verifying a user’s identity, while <em>authorization</em> involves deciding what resources a user may access.</p>
                <p>Shibboleth and CAS support different authentication protocols. Shibboleth is Columbia’s <a href="https://en.wikipedia.org/wiki/SAML_2.0">SAML 2.0</a> provider and is often described as an “identity provider” or “IdP.” If your application requires SAML 2.0, it should use Shibboleth. Otherwise, CAS is recommended since it is simpler and generally easier to set up. Both are widely supported within higher education.</p>
                <p>The first step in setting up authentication for your application is creating a ServiceNow request for <a href="https://cuit.columbia.edu/cas-authentication/registration">CAS</a> or <a href="https://cuit.columbia.edu/shibboleth">Shibboleth</a>. Not sure which service is appropriate? Request CAS and your request will be transferred to Shibboleth if necessary.</p>
                <h2>Projects That Use Columbia Design System</h2>
                <ul>
                  <li><a href="https://sites.columbia.edu">Columbia Sites</a></li>
                  <li>Columbia’s Bedework Implementation (pending)</li>
                  <li>Columbia University Student Information Services (pending)</li>
                </ul>


                <h2>Questions?</h2>
                <p>Email the team at <a href="mailto:designsystem@columbia.edu">designsystem@columbia.edu</a>.</p>
            </div>
        </div>
    )
}

export default Developer
