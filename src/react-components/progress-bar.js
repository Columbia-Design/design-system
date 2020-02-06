import React from 'react'
import ProgressItem from "../react-components/progress-item";

class ProgressBar extends React.Component {
  render() {

		const completeItem = <ProgressItem state="complete" text="Item Complete" href="#"/>;
		const currentItem = <ProgressItem state="current" text="Current Item"/>;
		const upcomingItem = <ProgressItem state="disabled" text="Upcoming Item"/>;
	
    return (
      <ul className="progressbar">
				{completeItem}
				{completeItem}
				{currentItem}
				{upcomingItem}
			</ul>
    )
	}
}

export default ProgressBar
