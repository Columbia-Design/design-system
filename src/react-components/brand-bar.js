import React from 'react'

class BrandBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    const classes = this.props.class;
    const logo = require("../assets/img/cu_logo.png");

	  return (
    <header id={this.props.id} class={this.props.class}>
      <div id="nav-wrapper" class="hidden-xs">
        <div class="container">

          <div class="row">
            <div class="col-sm-9 col-md-9 col-lg-9">
              <a href="https://www.columbia.edu/" class="external" target="_blank" rel="noopener">Columbia University in the City of New York</a>
            </div>

            <button id="search-icon-wrapper" aria-expanded="false" class="hidden-xs col-sm-1 col-md-1 col-lg-1" tabindex="0">
              <div class="search-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span class="sr-only">Toggle search</span>
            </button>

          </div>


        </div>
      </div>

      <div id="utility-menu" class="container hidden-xs">
        <ul class="utility-menu-inner utility-inline">
          <li role="presentation" class="active">
            <a href="/">Utility Menu 1</a>
          </li>
          <li role="presentation" class="">
            <a href="/">Utility Menu 2</a>
          </li>
        </ul>
      </div>

      <div id="branding" class="container">
      <div id="nav-icon-wrapper" class="visible-xs-block" role="button" tabindex="0">
        <div id="nav-icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="brand-wrapper" class="col-sm-12">
        <div id="brand-wrapper-inner">
          <div class="hidden-xs">
            <div id="branded-site-name" class="with-logo">
              <div id="site-name">
                <a href="/">
                  <img src={logo} alt="CU logo" class="img-responsive" />
                  <span class="sr-only">Columbia University</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button id="search-icon-wrapper-mobile" class="visible-xs-block" tabindex="0">
        <div class="search-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span class="sr-only">Toggle search</span>
      </button>
    </div>

      

    </header>
    );
  }
}

export default BrandBar
