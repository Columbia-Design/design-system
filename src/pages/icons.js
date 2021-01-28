import React from "react";
import { Helmet } from "react-helmet";
import WebfontIcon from "../react-components/icons";
import PrintComponent from "../util/print-component";

class Icons extends React.Component {
  constructor(props) {
		super(props);
  }

  render(){

    const iconAdmissionsAdvise = <p><WebfontIcon class="cuicons cuicons-admissions-advisement" /><WebfontIcon class="cuicons cuicons-2x cuicons-admissions-advisement" /><WebfontIcon class="cuicons cuicons-3x cuicons-admissions-advisement" /><WebfontIcon class="cuicons cuicons-4x cuicons-admissions-advisement" /></p>;
    const iconAtom = <p><WebfontIcon class="cuicons cuicons-atom" /><WebfontIcon class="cuicons cuicons-2x cuicons-atom" /><WebfontIcon class="cuicons cuicons-3x cuicons-atom" /><WebfontIcon class="cuicons cuicons-4x cuicons-atom" /></p>;
    const iconClimateChange = <p><WebfontIcon class="cuicons cuicons-climate-change" /><WebfontIcon class="cuicons cuicons-2x cuicons-climate-change" /><WebfontIcon class="cuicons cuicons-3x cuicons-climate-change" /><WebfontIcon class="cuicons cuicons-4x cuicons-climate-change" /></p>;
    const iconInternationalStudent = <p><WebfontIcon class="cuicons cuicons-international-student" /><WebfontIcon class="cuicons cuicons-2x cuicons-international-student" /><WebfontIcon class="cuicons cuicons-3x cuicons-international-student" /><WebfontIcon class="cuicons cuicons-4x cuicons-international-student" /></p>;
    const iconLowLibrary = <p><WebfontIcon class="cuicons cuicons-low-library" /><WebfontIcon class="cuicons cuicons-2x cuicons-low-library" /><WebfontIcon class="cuicons cuicons-3x cuicons-low-library" /><WebfontIcon class="cuicons cuicons-4x cuicons-low-library" /></p>;
    const iconOrientation = <p><WebfontIcon class="cuicons cuicons-orientation" /><WebfontIcon class="cuicons cuicons-2x cuicons-orientation" /><WebfontIcon class="cuicons cuicons-3x cuicons-orientation" /><WebfontIcon class="cuicons cuicons-4x cuicons-orientation" /></p>;
    const iconTransferStudent = <p><WebfontIcon class="cuicons cuicons-transfer-student" /><WebfontIcon class="cuicons cuicons-2x cuicons-transfer-student" /><WebfontIcon class="cuicons cuicons-3x cuicons-transfer-student" /><WebfontIcon class="cuicons cuicons-4x cuicons-transfer-student" /></p>;
		const iconWaiter = <p><WebfontIcon class="cuicons cuicons-water" /><WebfontIcon class="cuicons cuicons-2x cuicons-water" /><WebfontIcon class="cuicons cuicons-3x cuicons-water" /><WebfontIcon class="cuicons cuicons-4x cuicons-water" /></p>;

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
