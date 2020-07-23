import React from "react";
import { Helmet } from "react-helmet";
import WebfontIcon from "../react-components/icons";
import PrintComponent from "../util/print-component";

class Icons extends React.Component {
  constructor(props) {
		super(props);
  }

  render(){

    const iconAdmissionsAdvise = <WebfontIcon class="cuicons cuicons-admissions-advisement" />;
    const iconAtom = <WebfontIcon class="cuicons cuicons-atom" />;
    const iconClimateChange = <WebfontIcon class="cuicons cuicons-climate-change" />;
    const iconInternationalStudent = <WebfontIcon class="cuicons cuicons-international-student" />;
    const iconLowLibrary = <WebfontIcon class="cuicons cuicons-low-library" />;
    const iconOrientation = <WebfontIcon class="cuicons cuicons-orientation" />;
    const iconTransferStudent = <WebfontIcon class="cuicons cuicons-transfer-student" />;
		const iconWaiter = <WebfontIcon class="cuicons cuicons-water" />;

    return (
      <div>
        <Helmet>
          <title>Icons & Webfonts</title>
          <meta name="description" content="Page about Icons" />
        </Helmet>
        <div>
        	<h1>Icons</h1>
					<p>This page describes the icons component</p>

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
					<PrintComponent component={iconWaiter} figcaption="Water" language="html" />

        </div>
      </div>
    )
  }

}

export default Icons
