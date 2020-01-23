import React from 'react'

class Accordion extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeItem: 0,
    }
    this.click = this.click.bind(this);
  }
  click(e) {
    console.log("Clicked: ", e);
    this.setState({active: (this.state.active) ? 0 : 1});
  }
  render() {
    
    //const classes = (this.state.active) ? `active ${this.props.class}` : this.props.class;
    //const disabled = (this.props.disabled) ? true : false;

    //@toDO finish up marking up accordion
    //follow makrup from bootstrap
    const items = this.props.data.map((item, index) => {
      return (
        <div className="accordion-item" key={index}>
          <button className="accordion-toggle" onClick={this.click}>
            <h2>
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target={`#accordion-${item.id}-item-${index}`} aria-expanded="true" aria-controls={`#collapse-${index}`}>
                {(this.props.type == "numeric") ? <span className="accordion-index">{index + 1}</span> : <i className="fas fa-angle-right fa-xs" aria-hidden="true"></i> }
                {item.title}
              </button>
            </h2>
          </button>
          <div className="accordion-text" id={`accordion-${item.id}-item-${index}`}>
            {(item.innerHeading)? <h3>{item.innerHeading}</h3> : null}
            <p>{item.text}</p>
          </div>
        </div>
      )
    });
    return (
      <div className="accordion">
        {items}
      </div>
    );
  }
}

export default Accordion
