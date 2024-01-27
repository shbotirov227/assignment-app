import React from 'react';
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import Upcoming from "../../containers/Upcoming/Upcoming";
import MakeEvent from "../../containers/MakeEvent/MakeEvent";
import Blog from "../../containers/Blog/Blog";
import Package from "../../containers/Package/Package";
import OtherServices from "../../containers/OtherServices/OtherServices";
import BackgroundVideo from "../../assets/images/eventVideo.mp4";

import "./Home.scss";

const Home = () => {
	return (
		<div className="Home">
			<video autoPlay loop muted src={BackgroundVideo} type='video/mp4'></video>
			<Header />
			<OtherServices />
			<Upcoming />
			<Blog />
			<MakeEvent />
			<Package />
			<Footer />
		</div>
	)
}

export default Home;