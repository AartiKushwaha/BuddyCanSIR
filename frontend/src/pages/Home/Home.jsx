import React from "react";
import "./home.css";
import Card from "react-bootstrap/Card";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
// import Testimonials from "../../components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Navigation />
      {/* Navigation */}

      {/* Masthead*/}
      <header className="masthead">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center text-white">
                {/* Page heading*/}
                <h1 className="mb-5 header-heading">BuddyCanSIR</h1>
                <h4 className="tagline ">
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

      <div className="section2">
        <h4 className="help-heading">We will help you with...</h4>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Card body style={{border: "1px solid green", height:"100%"}}>
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <h5 className="category-heading">Health</h5>
                <div className="pad-rk">
                </div>
                <div className="spacing">
                  <p className="font-weight-light mb-0 font-text-testimonial">
                  We at BuddyCanSIR work towards building the nation by focusing on the health of children who are or have suffered from Cancer in the past so that they can also live their life to the fullest and work towards building their future.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Card body style={{border: "1px solid green", height:"100%"}}>
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <h5 className="category-heading">Education</h5>
                <div className="pad-rk">
                </div>
                <div className="spacing">
                  <p className="font-weight-light mb-0 font-text-testimonial">
                  We at BuddyCanSIR work towards building the nation by focusing on the education of children who are or have suffered from Cancer in the past so that they can become independent and contribute towards the development of the nation.
                  </p>
                </div>
              </div>
            </Card>          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Card body style={{border: "1px solid green", height:"100%"}}>
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <h5 className="category-heading">Livelihood</h5>
                <div className="pad-rk">
                </div>
                <div className="spacing">
                  <p className="font-weight-light mb-0 font-text-testimonial">
                  We at BuddyCanSIR provide free accommodation & holistic support to children travelling with their parents for treatment from villages & small towns to cities.
                  </p>
                </div>
              </div>
            </Card>          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Card body style={{border: "1px solid green", height:"100%"}}>
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <h5 className="category-heading">Life style</h5>
                <div className="pad-rk">
                </div>
                <div className="spacing">
                  <p className="font-weight-light mb-0 font-text-testimonial">
                  We at BuddyCanSIR work towards building the future of the children who are or have suffered from Cancer in the past by giving them a normal lifestyle that they always have dreamt by providing them financial stability so that they can focus fully on their education and become an asset for the nation.
                  </p>
                </div>
              </div>
            </Card>          </div>
        </div>
      </div>

      {/* Image Showcases*/}
      <section className="showcase">
        <div className="mission">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 img-vmi">
              <div className="img-custom2"></div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 vmi">
              <h3 className="mission-heading">Mission</h3>
              <p className="mission-content">We believe that the children, who have been nurtured at our Centres to recover from cancer, are exceptionally brave and special and have a lifelong bond with St. Judes. As their Go To organisation in times of need, St. Judes for Life will always be available to provide support and guidance throughout their lives, to help them reach their potential and fulfil their aspirations.</p>
            </div>
          </div>
        </div>
        <div className="mission">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 vmi">
              <h3 className="mission-heading">Vision</h3>
              <p className="mission-content">We believe that the children, who have been nurtured at our Centres to recover from cancer, are exceptionally brave and special and have a lifelong bond with St. Judes. As their Go To organisation in times of need, St. Judes for Life will always be available to provide support and guidance throughout their lives, to help them reach their potential and fulfil their aspirations.</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 img-vmi">
              <div className="img-custom1"></div>
            </div>
          </div>
        </div>
        <div className="mission">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 img-vmi">
              <div className="img-custom"></div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 vmi">
              <h3 className="mission-heading">The Initiative</h3>
              <p className="mission-content">We believe every child has the right to fulfil her aspirations and our credo has always been ‘Once a St. Judes child is always a St. Judes child’. In keeping with this vision, our new vertical St. Judes for Life has been established in the memory of Mrs. Rani Vicaji, to ensure that these children who have won the battle against cancer are able to fulfil their potential.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="img-section"></div>

      {/* Testimonials*/}
      <section className="testimonials text-center bg-light">
        <div className="container">
          <h2 className="mb-5 text-testimonial">What people are saying...</h2>
          
          <div className="row">
            <div className="col-lg-3 mid">
              <Card body className="size bs">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="test-img img-fluid rounded-circle mb-3"
                    src={require("../../assets/img/venu.jpg")}
                    alt="..."
                  />
                  <h5>Venu Nair</h5>
                  <h6 className="font-testimonial">(MD, Marks and Spencer Reliance, India)</h6>
                  <div className="pad-ah-vn">
                    <hr/>
                  </div>
                  <div className="spacing">
                    <p className="font-weight-light mb-0 font-text-testimonial">
                      "A very inspiring hour with Ms. Banerji. What a fantastic set
                      of activites being done here in a extremely professional
                      manner."
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-lg-3 mid">
              <Card body className="size bs">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="test-img img-fluid rounded-circle mb-3 "
                    src={require("../../assets/img/andrea.jpg")}
                    alt="..."
                  />
                  <h5>Andrea Hamilton</h5>
                  <h6 className="font-testimonial">(Philantropy & Social Impact, Generation Capital)</h6>
                  <div className="pad-ah-vn">
                    <hr/>
                  </div>
                  <div className="spacing">
                    <p className="font-weight-light mb-0 font-text-testimonial">
                      "Very well maintained, hygiene and patients are kept under
                      very good care. Hospitable staff."
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-lg-3 mid">
              <Card body className="size bs">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="test-img img-fluid rounded-circle mb-3"
                    src={require("../../assets/img/rk.jpg")}
                    alt="..."
                  />
                  <h5>RK Krishna Kumar</h5>
                  <h6 className="font-testimonial">(Retd. Director, Tata Sons)</h6>
                  <div className="pad-rk">
                    <hr/>
                  </div>
                  <div className="spacing">
                    <p className="font-weight-light mb-0 font-text-testimonial">
                      "A visit to this
                      centre has lit a light in my heart. I can only thank all the
                      people here for giving me this unique privilege."
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-lg-3 mid">
              <Card body className="size bs">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="test-img img-fluid rounded-circle mb-3"
                    src={require("../../assets/img/angali.jpg")}
                    alt="..."
                  />
                  <h5>Sachin & Anjali Tendulkar</h5>
                  <h6 className="font-testimonial">(Philanthropist)</h6>
                  <div className="pad-at">
                    <hr/>
                  </div>
                  <div className="spacing">
                    <p className="font-weight-light mb-0 font-text-testimonial">
                      "It was an enlightening visit. We were most impressed by
                      everything! It was an enlightening visit. We were most
                      impressed by everything!"
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
