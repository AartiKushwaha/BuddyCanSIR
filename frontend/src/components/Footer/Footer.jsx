import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer-1">
        <div className="main-footer widgets-dark typo-light ">
          <div className="container mt-4">
            <div className="row  justify-content-center">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget subscribe no-box">
                  <h5 className="widget-title">St. Judes For Life<span /></h5>
                  <p>
                    <ul>
                      <li>Safe and Hygienic Housing</li>
                      <li>Transport To and From Treatment</li>
                      <li>Cooking Facilities and Nutritious Rations</li>
                      <li>Value Based Education</li>
                      <li>Recreation</li>
                      <li>Counselling For Children and Parents</li>
                    </ul>
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">Share your experience<span /></h5>
                  <textarea rows="2" cols="20" placeholder="Describe your experience here..."></textarea>
                  <a className="btn" href="">Submit</a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">Contact Us<span /></h5>
                  <ul className="social-footer2">
                    <li className><a title="youtube" href="https://youtube.com/user/StJudechildcare"><FontAwesomeIcon icon={faYoutube} /></a></li>
                    <li className><a title="Mail" href="https://contact@stjudechild.org"><FontAwesomeIcon icon={faEnvelopeOpen} /></a></li>
                    <li className><a title="Twitter" href="https://twitter.com/StJudeChildCare"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li className><a title="linkedin" href="https://www.linkedin.com/company/st--jude-india"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>Copyright Company Name © 2022. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}