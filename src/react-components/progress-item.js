import React from 'react'
import renderHTML from 'react-render-html';

class ProgressItem extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
		const classes = `progress-item ${this.props.state}`;
		if (this.props.state == 'disabled') {
			return (
				<li className={classes}>
					{renderHTML(this.props.text)}
				</li>
			);
		}
		else {
			return (
				<li className={classes}>
					<a href={this.props.href}>{renderHTML(this.props.text)}</a>
				</li>
			);
		}
  }
}

export default ProgressItem
