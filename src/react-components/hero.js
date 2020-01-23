import React from 'react'
import renderHTML from 'react-render-html';

class Hero extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const classes = `hero ${this.props.class}`;
    return (
			<div className={classes}>
        <div className="hero-img">
				  <img border="0" alt={this.props.alt} src={this.props.image} />
        </div>
        <div className="hero-body p-4">
				  <h1>{renderHTML(this.props.heading)}</h1>
				  <p className="lead">{renderHTML(this.props.text)}</p>
				  <a className="btn btn-primary btn-lg d-inline-block" href="#">{this.props.cta}</a>
        </div>
			</div>
    );
  }
}

export default Hero
