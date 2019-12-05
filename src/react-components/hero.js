import React from 'react'
import renderHTML from 'react-render-html';

class Hero extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const classes = `hero ${this.props.type}`;
    return (
			<div className={classes}>
				<img class="d-block w-100" border="0" alt={this.props.alt} src={this.props.image} />
        <div class="hero-body">
				  <h1 class="hero-header">{renderHTML(this.props.heading)}</h1>
				  <div class="hero-text">{renderHTML(this.props.text)}</div>
				  <a class="btn btn-primary d-inline-block" href="#">{this.props.cta}</a>
        </div>
			</div>
    );
  }
}

export default Hero
