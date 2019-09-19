import React from 'react'

import '../styles/button.css';

class Button extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: 0,
    }
    this.click = this.click.bind(this);
  }
  click(e) {
    console.log("Clicked: ", e);
    this.setState({active: (this.state.active) ? 0 : 1});
  }
  render() {
    const classes = (this.state.active) ? `active ${this.props.class}` : this.props.class;
    return (
      <button type="button" className={classes} onClick={this.click}>
        {this.props.text}
      </button>
    );
  }
}

export default Button
