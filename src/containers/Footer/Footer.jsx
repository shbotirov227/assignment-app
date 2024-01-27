import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/images/logo.png";
import BackgroundVideo from "../../assets/images/eventVideo.mp4";

import "./Footer.scss";

const Footer = () => {
    return (
        <div className="Footer" id="footer">
            <div className="videoTag">
                <video autoPlay loop muted src={BackgroundVideo} type='video/mp4'></video>
            </div>
            <div className="Footer-inner container">

                <div className="Footer-left">
                    <Link to="/"><img className="footerLogo" src={Logo} alt="footerLogo" /></Link>
                    <p className="Footer-text">PT Events Group, LLC Located in the heart of Boston’s prestigious Financial District, 75 State Street is situated among the city’s historical landmarks, overlooking Fanuel Hall Marketplace featuring counrtless cultural attractions, and retail amenities.</p>
                    {/* <div className="Footer-icons">
                        <Link to="https://facebook.com"><FacebookIcon /></Link>
                        <Link to="https://twitter.com"><TwitterIcon /></Link>
                        <Link to="https://linkedin.com"><LinkedinIcon /></Link>
                    </div> */}
                </div>

                <div className="allServices">
                    <ul className="Footer-services">
                        <li className="service-title">Plan Events</li>
                        <li><Link className="Footer-service" to="/">Create and Set Up</Link></li>
                        <li><Link className="Footer-service" to="/">Sell Tickets</Link></li>
                        <li><Link className="Footer-service" to="/">Online RSVP</Link></li>
                        <li><Link className="Footer-service" to="/">Online Events</Link></li>
                    </ul>

                    <ul className="Footer-services">
                        <li className="service-title">Party time events</li>
                        <li><Link className="Footer-service" to="/about-us">About Us</Link></li>
                        <li><HashLink className="Footer-service" to="/#services">Services</HashLink></li>
                        <li><Link className="Footer-service" to="/contact">Contact Us</Link></li>
                        <li><Link className="Footer-service" to="/contact">Help Center</Link></li>
                        <li><Link className="Footer-service" to="/about-us">How it Works</Link></li>
                        <li><Link className="Footer-service" to="/">Privacy </Link></li>
                        <li><Link className="Footer-service" to="/">Terms</Link></li>
                    </ul>

                    <div className="Footer-inputSection">
                        <h4 className="service-title">Have any questions ?</h4>
                        <p className="Footer-inputSection-text">Join our mailing list to stay in the loop with our newest for Event and concert</p>

                        <div className="inputSection-inputContent">
                            <input className="Footer-inputSection-input" type="text" placeholder="Enter your email address..." />
                            <Link to="/signup" className="btn-secondary">Subscribe Now</Link>
                        </div>

                    </div>
                </div>

            </div>
                <h4 className="copyright container">Copyright © 2023 - 2024 ®. <br></br>All rights reserved</h4>
        </div>
    )
}

export default Footer;
