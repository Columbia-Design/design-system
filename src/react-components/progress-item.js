import React from 'react'
import renderHTML from 'react-render-html';

class ProgressItem extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
		const classes = `progress-item ${this.props.state}`;
		if (this.props.state == 'complete') {
			return (
				<li className={classes}>
					<a href={this.props.href}>{renderHTML(this.props.text)}</a>
				</li>
			);
		}
		else {
			return (
				<li className={classes}>
					<span>{renderHTML(this.props.text)}</span>
				</li>
			);
		}
  }
}

export default ProgressItem
