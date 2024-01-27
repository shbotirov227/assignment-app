import React from 'react';
import { Link } from "react-router-dom";
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import barry from "../../assets/images/barry.png"

import "./About.scss";

const About = () => {
	return (
		<div className="About">
			<Header />
			<div className="About-inner container">
				<h3 className="About-title">Welcome to Party Time Events</h3>

				<div style={{display: "flex"}}>
					<img style={{width: "50%"}} src={barry} alt="" />
					<p className="About-text">
						Welcome to Party Time Events !


						At Party Time Events, we have a passion for crafting spectacular live events and engaging experiences that surpass all expectations. Led by award-winning event planner and producer, Barry Aleo, our team of top event planners, lighting designers, and entertainment staff infuse every project with adventure and excitement.



						By working with us, you'lll receive our meticulous attention to detail and modern, trendy creativity. From unforgettable weddings to corporate galas, theme parties, school events and city events, we possess the expertise to make any vision a reality.



						Our extensive network grants us access to the best venues, caterers, florists, photographers, décor, equipment rentals, and audiovisual effects, providing a full-service experience of unparalleled quality.



						We understand that every event is unique, which is why we offer a personalized approach. Collaborating closely with our clients, we tailor customized plans that align with their goals, vision, and budget.



						Are you ready to take your event from ordinary to Extraordinary? Contact Party Time Events today, and let's begin crafting a celebration like no other!
					</p>
				</div>

				<div className="aboutCard-section">
					<div className="aboutCard-section-left">
						<h4 className="aboutCard-section-title">Interested in our services?</h4>
						<h4 className="aboutCard-section-title2">We’re here to help!</h4>
					</div>

					<div className="aboutCard-section-right">
						<p className="aboutCard-section-text">
							We want to know your needs exactly so that we can provide the perfect solution. Let us know what you want and we’ll do our best to help. We are laid back and happy to speak with you on the phone or by email.
						</p>
						<Link className="btn-secondary" to="/#subscribes">GET PRICING</Link>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default About;