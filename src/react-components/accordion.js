import React from 'react'

class Accordion extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    const items = this.props.data.map((item, index) => {
      
      const aTextClasses = (item.active === 1) ? "accordion-text collapse show" : "accordion-text collapse";
      
      const btnClasses = (item.active === 1) ? "accordion-btn" : "accordion-btn collapsed";

      return (
        <div className="accordion-item" id={`${item.id}-accordion-item-${index}`} key={index}>

          <h2 id={`${item.id}-accordion-header-${index}`}>

            <button className={btnClasses} type="button" data-toggle="collapse" 
                    data-target={`#${item.id}-accordion-text-${index}`} aria-expanded="true" aria-controls={`${item.id}-accordion-text-${index}`}>
              {(this.props.type === "numeric") ? <span className="accordion-index">{index + 1}</span> : <i className="carret fas fa-angle-down fa-xs" aria-hidden="true"></i> }
              {item.title}
            </button>

          </h2>
         
          <div className={aTextClasses} id={`${item.id}-accordion-text-${index}`} aria-labelledby={`${item.id}-accordion-header-${index}`}>
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
