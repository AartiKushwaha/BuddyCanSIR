import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return(
        <>
            <div className="footer-section">
                <div className="footer-content pt-5 pb-5">
            <div className="row">
                <div className="col-xl-4 col-lg-4 mb-50">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>St. Jude Provides Free Of Cost:</h3>
                        </div>
                        {/* <div class="footer-logo">
                            <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" class="img-fluid" alt="logo"></a>
                        </div>  */}
                            <ul>
                                <li>Safe and Hygienic Housing</li>
                                <li>Transport To and From Treatment</li>
                                <li>Cooking Facilities and Nutritious Rations</li>
                                <li>Value Based Education</li>
                                <li>Recreation</li>
                                <li>Counselling For Children and Parents</li>
                            </ul>
                    </div>
                    
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>Useful Links</h3>
                        </div>
                        <ul>
                            <li><a href="#!">Home</a></li>
                            <li><a href="#!">About us</a></li>
                            <li><a href="#!">Our Services</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>Contact Us</h3>
                        </div>
                        <div className="single-cta">
                            {/* <i className="fas fa-map-marker-alt"></i> */}
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="i" />
                            {/* <i class="fa-solid fa-location-dot"></i> */}
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>St. Jude India ChildCare Centres
                                    Cotton Green Campus,
                                    Ground Floor, Mumbai Port Trust Colony,
                                    ABC Colony (Rajas Nagar),
                                    Zakaria Bunder Road,
                                    Sewri, Mumbai 400015</span>
                            </div>
                        </div>
                        <div className="single-cta">
                            {/* <i className="fas fa-phone"></i> */}
                            <FontAwesomeIcon icon={faPhone} className="i" />
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>+91 022 6666 3152</span>
                            </div>
                        </div>
                        <div className="single-cta">
                            {/* <i className="far fa-envelope-open"></i> */}
                            <FontAwesomeIcon icon={faEnvelopeOpen} className="i" />
                            {/* <i class="fa-regular fa-envelope-open"></i> */}
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>contact@stjudechild.org</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-social-icon">
                <h3>Follow Us</h3>
                <a href="#!"><FontAwesomeIcon icon={faFacebookF} className="facebook-bg i" /></a>
                <a href="#!"><FontAwesomeIcon icon={faTwitter} className="twitter-bg i" /></a>
                <a href="#!"><FontAwesomeIcon icon={faGooglePlusG} className="google-bg i" /></a>
            </div>
        </div>
    </div>
    <div className="copyright-area">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                    <div className="copyright-text">
                        <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                    <div className="footer-menu">
                        <ul>
                            <li><a href="#!">Home</a></li>
                            <li><a href="#!">Terms</a></li>
                            <li><a href="#!">Privacy</a></li>
                            <li><a href="#!">Policy</a></li>
                            <li><a href="#!">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}