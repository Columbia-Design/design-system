import React from 'react'

class Slider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      checked: false,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log("Clicked: ", e);
    this.setState({checked: (this.state.checked) ? false : true});
  }
  render() {
    const classes = (this.state.checked) ? `checked ${this.props.class}` : this.props.class;

	return (
    <label htmlFor={this.props.id} className={classes}>
		<input id={this.props.id}
			value={this.state.checked}
			onChange={this.handleChange}
			type="checkbox"
			tabIndex="0"
			aria-checked={this.state.checked}
			aria-invalid="false" />
		<span className="wrapper">
			<span className="track"></span>
			<span className="slider"></span>
		</span>
		<span className="text-indicator">{(this.state.checked) ? 'Yes' : 'No'}</span>
    </label>
    );
  }
}

export default Slider
