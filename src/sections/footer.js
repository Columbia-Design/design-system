import React from 'react'

function Footer() {
  return (
		<footer id="page-footer" role="contentinfo">
			<div id="cu-footer">
				<div className="container-fluid">
					<div className="row">
						<div className="d-none d-sm-block col-sm-12 col-lg-4">
							<a href="http://www.columbia.edu" id="footer-cu-homepage">
								<span className="brand sr-only">Columbia University</span>
							</a>
						</div>
						<div id="cu-footer-links" className="col-xs-12 col-lg-8">
							<span className="copyright"><a href="http://www.columbia.edu/node/111.html">&copy;{(new Date().getFullYear())} Columbia University</a></span>
							<span className="a11y"><a href="http://health.columbia.edu/disability-services"><i className="wheelchair-icon" aria-hidden="true"></i><span className="sr-only">Accessibility</span></a></span>
							<span><a href="http://eoaa.columbia.edu/notice-nondiscrimination">Nondiscrimination</a></span>
							<span><a href="https://jobs.columbia.edu/">Employment</a></span>
							<span><a href="https://sites.columbia.edu/">Columbia Sites</a></span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
