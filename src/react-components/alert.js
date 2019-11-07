import React from 'react'

class Alert extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const classes = `alert ${this.props.class}`;
    return (
      <div className={classes} role="alert">
        {this.props.text}
      </div>
    );
  }
}

export default Alert
