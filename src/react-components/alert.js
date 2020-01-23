import React from 'react'
import renderHTML from 'react-render-html';

class Alert extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const classes = `alert ${this.props.class} rounded-0`;
    return (
      <div className={classes} role="alert">
        {renderHTML(this.props.text)}
      </div>
    );
  }
}

export default Alert
