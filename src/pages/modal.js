import React from "react";
import { Helmet } from "react-helmet";
import renderHTML from 'react-render-html';
import PrintComponent from "../util/print-component";

const ModalExample1 = `
<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`.trim();

const ModalExample2 = `
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`.trim();

const ModalExample3 = `
<!-- Large modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg">
    <div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title">Large modal</h4>
			</div>
			<div class="modal-body">
				...
			</div>
    </div>
  </div>
</div>

<!-- Small modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button>

<div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title">Small modal</h4>
			</div>
			<div class="modal-body">
				...
			</div>
    </div>
  </div>
</div>`.trim();


class Modal extends React.Component {
  constructor(props) {
		super(props);
		this.state = {};
  }

  render(){

    return (
      <div>
        <Helmet>
          <title>Modal</title>
          <meta name="description" content="Documentation and examples for opting images into responsive behavior" />
        </Helmet>
        <div>
        	<h1>Modal</h1>
					<p>Use modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>

					<h2>Modal Components</h2>
					<p>Below is a static modal example. Included are the modal header, modal body (required for padding), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.</p>
					<figure>
						{renderHTML(ModalExample1)}
					</figure>
					<PrintComponent component={ModalExample1} language="html" plainHtml="true" figcaption="Markup" />

					<h2>Live demo</h2>
					<p>Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.</p>
					<figure>
						{renderHTML(ModalExample2)}
					</figure>
					<PrintComponent component={ModalExample2} language="html" plainHtml="true" figcaption="Markup" />


					<h2>Optional sizes</h2>
					<p>Modals have two optional sizes, available via modifier classes to be placed on a <code>{`.modal-dialog`}</code>. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.</p>
					<figure>
						{renderHTML(ModalExample3)}
					</figure>
					<PrintComponent component={ModalExample3} language="html" plainHtml="true" figcaption="Markup" />



        </div>
      </div>
    )
  }

}

export default Modal
