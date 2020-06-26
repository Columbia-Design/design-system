import React from "react";
import { Helmet } from "react-helmet";
import WebfontIcon from "../react-components/webfont";
import PrintComponent from "../util/print-component";

class Webfonts extends React.Component {
  constructor(props) {
		super(props);
  }

  render(){

    const iconAdmissionsAdvise = <WebfontIcon class="cu-icon cu-icon-admissions-advisement" />;
    const iconAtom = <WebfontIcon class="cu-icon cu-icon-atom" />;
    const iconClimateChange = <WebfontIcon class="cu-icon cu-icon-climate-change" />;
    const iconInternationalStudent = <WebfontIcon class="cu-icon cu-icon-international-student" />;
    const iconLowLibrary = <WebfontIcon class="cu-icon cu-icon-low-library" />;
    const iconOrientation = <WebfontIcon class="cu-icon cu-icon-orientation" />;
    const iconTransferStudent = <WebfontIcon class="cu-icon cu-icon-transfer-student" />;
		const iconWaiter = <WebfontIcon class="cu-icon cu-icon-waiter" />;

    return (
      <div>
        <Helmet>
          <title>Webfonts & Icons</title>
          <meta name="description" content="Page about Webfonts" />
        </Helmet>
        <div>
        	<h1>Webfonts</h1>
					<p>This page describes the webfont component</p>

					<h2>Examples</h2>
					<figure>
						{iconAdmissionsAdvise}
					</figure>
          <PrintComponent component={iconAdmissionsAdvise} figcaption="Admissions Advisement" language="html" />
          <figure>
            {iconAtom}
          </figure>
          <PrintComponent component={iconAtom} figcaption="Atom" language="html" />
          <figure>
            {iconClimateChange}
          </figure>
          <PrintComponent component={iconClimateChange} figcaption="Climate Change" language="html" />
          <figure>
            {iconInternationalStudent}
          </figure>
          <PrintComponent component={iconInternationalStudent} figcaption="International Student" language="html" />
          <figure>
            {iconLowLibrary}
          </figure>
          <PrintComponent component={iconLowLibrary} figcaption="Low Library" language="html" />
          <figure>
            {iconOrientation}
          </figure>
          <PrintComponent component={iconOrientation} figcaption="Orientation" language="html" />
          <figure>
            {iconTransferStudent}
          </figure>
          <PrintComponent component={iconTransferStudent} figcaption="Transfer Student" language="html" />
          <figure>
            {iconWaiter}
          </figure>
					<PrintComponent component={iconWaiter} figcaption="Waiter" language="html" />

        </div>
      </div>
    )
  }

}

export default Webfonts
