import React from 'react';
import PackageCard from "../../components/PackageCard/PackageCard";

import "./Package.scss";

const Package = () => {

	const packageCardData = [
		{
			id: 0,
			title: "Bronze",
			items: [
				"Room decorations – balloons, banners",
				"Table decorations – centrepieces, gifts",
				"DJ entertainment",
				"Cold buffet"
			],
			cost: "$20",
		},

		{
			id: 1,
			title: "Silver",
			items: [
				"Invitation design and handling",
				"Party cost clear up",
				"Live band entertainment",
				"Cold buffet and soft drinks"
			],
			cost: "$55",
		},

		{
			id: 2,
			title: "Gold",
			items: [
				"Staff in attendance to ensure complete perfection",
				"Finding guest accommodation, booking transport",
				"Live band entertainment and magician",
				"Hot and Cold buffet and soft drinks"
			],
			cost: "$80",
		}
	]

	return (
		<div className="Package container" id="subscribes">
			<h3 className="Blog-title">Packages</h3>
			
			<div className="Package-packages">
				{
					packageCardData.map((index, el) => (
						<PackageCard
							key={packageCardData[el].id}
							title={packageCardData[el].title}
							items={packageCardData[el].items}
							cost={packageCardData[el].cost}
						/>
					))
				}
			</div>
		</div>
	)
}

export default Package;