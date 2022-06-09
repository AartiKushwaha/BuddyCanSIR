import React from "react";
import "./home.css";
import Card from "react-bootstrap/Card";
import Navigation from "../../components/Navigation/Navigation";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Translator from "../../components/Translator/Translator";
import AdminLogin from "../AdminLogin/AdminLogin";
// import Testimonials from "../../components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
    <Navigation/>
      {/* Navigation */}

      {/* Masthead*/}
      <header className="masthead">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center text-white">
                {/* Page heading*/}
                <h1 className="mb-5">BuddyCanSIR</h1>
                <h4 className="tagline">
                  To make you Self-reliant and Independent is our Responsibility
                </h4>
                {/* Signup form*/}
                {/* * * * * * * * * * * * * * * **/}
                {/* * * SB Forms Contact Form * **/}
                {/* * * * * * * * * * * * * * * **/}
                {/* This form is pre-integrated with SB Forms.*/}
                {/* To make this form functional, sign up at*/}
                {/* https://startbootstrap.com/solution/contact-forms*/}
                {/* to get an API token!*/}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Image Showcases*/}
      <section className="showcase">
        <div className="container-fluid p-0">
          <div className="row g-0 row1 py-4">
            <div className="col-lg-6 order-lg-2 text-white showcase-img img-custom">
              <img
                src="https://www.stjudechild.org/images/what/1wt.jpg"
                className="img-fluid rounded-circle  border-circle"
                alt="img"
              ></img>
            </div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <Card body className="borderCard">
                <h2>The Initiative</h2>
                <p className="lead mb-0 text-style">
                  We believe every child has the right to fulfil her aspirations
                  and our credo has always been ‘Once a St. Judes child is always
                  a St. Judes child’. In keeping with this vision, our new
                  vertical St. Judes for Life has been established in the memory
                  of Mrs. Rani Vicaji, to ensure that these children who have won
                  the battle against cancer are able to fulfil their potential.
                </p>
              </Card>
            </div>
          </div>
          <div className="row g-0 py-4">
            <div className="col-lg-6 text-white showcase-img">
              <img
                src="https://www.stjudechild.org/images/what/8wt.jpg"
                className="img-fluid rounded-circle border-circle"
                alt="img"
              ></img>
            </div>
            <div className="col-lg-6 my-auto showcase-text">
              <Card body className="borderCard text-style">
                <h2>Vision</h2>
                <p className="lead mb-0">
                  We believe that the children, who have been nurtured at our
                  Centres to recover from cancer, are exceptionally brave and
                  special and have a lifelong bond with St. Judes. As their Go To
                  organisation in times of need, St. Judes for Life will always be
                  available to provide support and guidance throughout their
                  lives, to help them reach their potential and fulfil their
                  aspirations.
                </p>
              </Card>
            </div>
          </div>
          <div className="row g-0 py-4 ">
            <div className="col-lg-6 order-lg-2 text-white showcase-img ">
              <img
                src="https://www.stjudechild.org/images/what/5wt.jpg"
                className="img-fluid rounded-circle border-circle"
                alt="img"
              ></img>
            </div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <Card body className="borderCard">
                <h2>Mission</h2>
                <p className="lead mb-0 text-style">
                  We believe that the children, who have been nurtured at our
                  Centres to recover from cancer, are exceptionally brave and
                  special and have a lifelong bond with St. Judes. As their Go To
                  organisation in times of need, St. Judes for Life will always be
                  available to provide support and guidance throughout their
                  lives, to help them reach their potential and fulfil their
                  aspirations.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials*/}
      <section className="testimonials text-center bg-light">
        <div className="container">
          <h2 className="mb-5">What people are saying...</h2>
          <div className="row">
            <div className="col-lg-3">
              <Card body className="size">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-circle mb-3"
                    src={require("../../assets/img/venu.jpg")}
                    alt="..."
                  />
                  <h5>Venu Nair</h5>
                  <h6>(MD, Marks and Spencer Reliance, India)</h6>
                  <p className="font-weight-light mb-0">
                    "A very Inspiring hour with Ms.Banerji. What a fantastic set
                    of activites being done here in a extremely professional
                    manner. Truly worthy of huge appreciation and respect. Made my
                    Day"
                  </p>
                </div>
              </Card>
            </div>
            <div className="col-lg-3">
              <Card body className="size">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-circle mb-3"
                    src={require("../../assets/img/andrea.jpg")}
                    alt="..."
                  />
                  <h5>Andrea Hamilton</h5>
                  <h6>(Philantropy & Social Impact, Generation Capital)</h6>
                  <p className="font-weight-light mb-0">
                    "Very well maintained, hygiene and patients are kept under
                    very good care. Hospitable Staff."
                  </p>
                </div>
              </Card>
            </div>
            <div className="col-lg-3">
              <Card body className="size">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-circle mb-3"
                    src={require("../../assets/img/rk.jpg")}
                    alt="..."
                  />
                  <h5>RK Krishna Kumar</h5>
                  <h6>(Retd. Director, Tata Sons)</h6>
                  <p className="font-weight-light mb-0">
                    "The world is a dark and forbidding place. A visit to this
                    centre has lit a light in my heart. I can only thank all the
                    people here for giving me this unique privilege of being here
                    this morning. There is so much hope and goodness here."
                  </p>
                </div>
              </Card>
            </div>
            <div className="col-lg-3">
              <Card body className="size">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-circle mb-3"
                    src={require("../../assets/img/angali.jpg")}
                    alt="..."
                  />
                  <h5>Sachin & Anjali Tendulkar</h5>
                  <h6>(Philanthropist)</h6>
                  <p className="font-weight-light mb-0">
                    "It was an enlightening visit. We were most impressed by
                    everything! It was an enlightening visit. We were most
                    impressed by everything! "
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action*/}
      {/* <section className="call-to-action text-white text-center" id="signup">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <h2 className="mb-4">Ready to get started? Sign up now!</h2> */}
      {/* Signup form*/}
      {/* * * * * * * * * * * * * * * **/}
      {/* * * SB Forms Contact Form * **/}
      {/* * * * * * * * * * * * * * * **/}
      {/* This form is pre-integrated with SB Forms.*/}
      {/* To make this form functional, sign up at*/}
      {/* https://startbootstrap.com/solution/contact-forms*/}
      {/* to get an API token!*/}
      {/* <form
                className="form-subscribe"
                id="contactFormFooter"
                data-sb-form-api-token="API_TOKEN"
              > */}
      {/* Email address input*/}
      {/* <div className="row">
                  <div className="col">
                    <input
                      className="form-control form-control-lg"
                      id="emailAddressBelow"
                      type="email"
                      placeholder="Email Address"
                      data-sb-validations="required,email"
                    />
                    <div
                      className="invalid-feedback text-white"
                      data-sb-feedback="emailAddressBelow:required"
                    >
                      Email Address is required.
                    </div>
                    <div
                      className="invalid-feedback text-white"
                      data-sb-feedback="emailAddressBelow:email"
                    >
                      Email Address Email is not valid.
                    </div>
                  </div>
                  <div className="col-auto">
                    <button
                      className="btn btn-primary btn-lg disabled"
                      id="submitButton"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div> */}
      {/* Submit success message*/}
      {/**/}
      {/* This is what your users will see when the form*/}
      {/* has successfully submitted*/}
      {/* <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    <p>To activate this form, sign up at</p>
                    <a
                      className="text-white"
                      href="https://startbootstrap.com/solution/contact-forms"
                    >
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div> */}
      {/* Submit error message*/}
      {/**/}
      {/* This is what your users will see when there is*/}
      {/* an error submitting the form*/}
      {/* <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> */}
      {/* Footer*/}
      {/* <footer className="footer bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
              <ul className="list-inline mb-2">
                <li className="list-inline-item">
                  <a href="#!">About</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="#!">Contact</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="#!">Terms of Use</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="#!">Privacy Policy</a>
                </li>
              </ul>
              <p className="text-muted small mb-4 mb-lg-0">
                © Your Website 2022. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
              <ul className="list-inline mb-0">
                <li className="list-inline-item me-4">
                  <a href="#!">
                    <i className="bi-facebook fs-3" />
                  </a>
                </li>
                <li className="list-inline-item me-4">
                  <a href="#!">
                    <i className="bi-twitter fs-3" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!">
                    <i className="bi-instagram fs-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer> */}
      {/* Bootstrap core JS*/}
      {/* Core theme JS*/}
      {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
      {/* * *                               SB Forms JS                               * **/}
      {/* * * Activate your form at https://startbootstrap.com/solution/contact-forms * **/}
      {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
      <Footer />
    </>
  );
}
