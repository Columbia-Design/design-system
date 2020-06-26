import React from 'react'
import renderHTML from 'react-render-html';

class WebfontIcon extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
		const classes = `${this.props.class}`;
    return (
      <i className={classes} role="alert"></i>
    );
  }
}

export default WebfontIcon
