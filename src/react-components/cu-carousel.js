import React from 'react';

class CuCarousel extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
		const id = this.props.id;
    const carouselID = `#${this.props.id}`;
    const classes = `carousel slide cu-carousel ${this.props.class}`;
    const delay = (this.props.delay) ? this.props.delay : 'false';
    return (
			<div id={id} class={classes} data-ride="carousel" data-interval={delay}>
				<ol class="carousel-indicators">
					<li data-target={carouselID} data-slide-to="0" class="active"></li>
					<li data-target={carouselID} data-slide-to="1"></li>
					<li data-target={carouselID} data-slide-to="2"></li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<div style={{height:'30vh',backgroundColor:'red'}}></div>
					</div>
					<div class="carousel-item">
						<div style={{height:'30vh',backgroundColor:'green'}}></div>
					</div>
					<div class="carousel-item">
						<div style={{height:'30vh',backgroundColor:'blue'}}></div>
					</div>
				</div>
				<a class="carousel-control-prev d-none d-sm-flex" href={carouselID} role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next d-none d-sm-flex" href={carouselID} role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
		);
  }
}

export default CuCarousel

