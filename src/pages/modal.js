import React from "react";
import { Helmet } from "react-helmet";
import renderHTML from 'react-render-html';
import PrintComponent from "../util/print-component";

const TablesExample1 = `
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>`.trim();

const TablesExample2 = `
<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>`.trim();

const TablesExample3 = `
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>`.trim();


const TablesExample4 = `
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>`.trim();

const TablesExample5 = `
<table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>`.trim();

const TablesExample6 = `
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>`.trim();

const TablesExample7 = `
<table class="table table-bordered table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>`.trim();


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
					<p>Documentation and examples for opt-in styling of tables.</p>


					<h2>Examples</h2>
					<p>Just add the base class <code>{`.table`}</code> to any <code>{`<table>`}</code></p>
					<figure>
						{renderHTML(TablesExample1)}
					</figure>
					<PrintComponent component={TablesExample1} language="html" plainHtml="true" figcaption="Markup" />

					<p>You can also invert the colors—with light text on dark backgrounds—with <code>{`.table-dark.`}</code></p>
					<figure>
						{renderHTML(TablesExample2)}
					</figure>
					<PrintComponent component={TablesExample2} language="html" plainHtml="true" figcaption="Markup" />


					<p>Similar to tables and dark tables, use the modifier classes <code>{`.thead-light`}</code> or <code>{`.thead-dark`}</code> to make <code>{`<thead>`}</code>s appear light or dark gray.</p>
					<figure>
						{renderHTML(TablesExample3)}
					</figure>
					<PrintComponent component={TablesExample3} language="html" plainHtml="true" figcaption="Markup" />

					<h2>Striped rows</h2>
					<p>Use <code>{`.table-striped`}</code> to add zebra-striping to any table row within the <code>{`<tbody>`}</code>.</p>
					<figure>
						{renderHTML(TablesExample4)}
					</figure>
					<PrintComponent component={TablesExample4} language="html" plainHtml="true" figcaption="Markup" />

					<figure>
						{renderHTML(TablesExample5)}
					</figure>
					<PrintComponent component={TablesExample5} language="html" plainHtml="true" figcaption="Markup" />


					<h2>Bordered table</h2>
					<p>Add <code>{`.table-bordered`}</code> for borders on all sides of the table and cells.</p>
					<figure>
						{renderHTML(TablesExample6)}
					</figure>
					<PrintComponent component={TablesExample6} language="html" plainHtml="true" figcaption="Markup" />
					
					<figure>
						{renderHTML(TablesExample7)}
					</figure>
					<PrintComponent component={TablesExample7} language="html" plainHtml="true" figcaption="Markup" />


        </div>
      </div>
    )
  }

}

export default Modal
