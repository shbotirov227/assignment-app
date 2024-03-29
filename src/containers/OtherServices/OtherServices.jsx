import React from 'react';
import OtherServicesCardImg1 from "../../assets/images/otherServicesCardImg1.jpg";
import OtherServicesCardImg3 from "../../assets/images/otherServicesCardImg3.jpg";
import OtherServicesCardImg4 from "../../assets/images/otherServicesCardImg4.jpg";
import OtherServicesCardImg5 from "../../assets/images/otherServicesCardImg5.jpg";
import OtherServicesCardImgNew from "../../assets/images/otherServicesCardImgNew.jpg";

import "./OtherServices.scss";

const OtherServices = () => {

	const data = [
		{
			id: 0,
			img: OtherServicesCardImg1,
			title: "Fundraisers"
		},

		{
			id: 1,
			img: OtherServicesCardImgNew,
			title: "Bespoke catering"
		},

		{
			id: 2,
			img: OtherServicesCardImg3,
			title: "Themes and props"
		},

		{
			id: 3,
			img: OtherServicesCardImg4,
			title: "Invitations and printed works"
		},

		{
			id: 4,
			img: OtherServicesCardImg5,
			title: "Sound and lighting"
		},
	]


	return (
		<div className="OtherServices container" id="services">
			<h2 className="Blog-title">Our Services</h2>

			<div className="OtherServices-services">
				{
					data.map((index, el) => (
						<div className="OtherServices-item" key={data[el].id}>
							<h4 className="OtherServices-itemTitle">{data[el].title}</h4>
							<img className="OtherServices-itemImg" src={data[el].img} alt="otherServicesCardImg" />
						</div>
					))
				}
			</div>
		</div>
	)
}

export default OtherServices;