import React from 'react';

import "./MakeEvent.scss";

const MakeEvent = () => {
	return (
		<div className="MakeEvent">
			<div className="MakeEvent-inner container">

				{/* <div className="MakeEvent-content"> */}
					<h3 className="MakeEvent-title">Make your own Event</h3>
					<p className="MakeEvent-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<button className="btn-secondary">Create Events</button>
				{/* </div> */}
				{/* <img src={MakeEventImg} alt="" /> */}
			</div>
		</div>
	)
}

export default MakeEvent;