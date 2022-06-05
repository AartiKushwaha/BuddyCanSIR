import React from "react";
import "./home.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="row mt-4 main">
        <div className="col-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            pulvinar eros. Nunc ut nulla placerat, varius dui ac, egestas leo.
            Phasellus laoreet leo commodo interdum ullamcorper. Suspendisse
            convallis ultrices sapien nec elementum. Donec lobortis fringilla
            mauris, id molestie quam dictum vel. Vivamus lorem augue, elementum
            eget commodo sit amet, lobortis a ipsum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Morbi eleifend pellentesque nibh
            ultricies varius. Phasellus consequat suscipit vulputate. Aenean
            elementum tellus sed nulla pharetra, at placerat dui efficitur.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Ut ornare molestie elit vel molestie. Ut
            efficitur lectus tellus. Cras dictum metus eros, in congue enim
            pellentesque luctus. Vivamus mi ipsum, ultrices vel turpis id,
            gravida convallis nulla. Nulla interdum bibendum orci, sit amet
            facilisis lacus feugiat nec.
          </p>
        </div>
        <div className="col-4">
          <img
            className="aboutUs-img"
            src="https://images.freeimages.com/images/small-previews/155/bridge-1559052.jpg"
            alt="img"
          />
        </div>
      </div>
      <div className="home-testimonial mt-4">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center testimonial-pos">
            <div className="col-md-12 pt-4 d-flex justify-content-center">
              <h3>Testimonials</h3>
            </div>
            <div className="col-md-12 d-flex justify-content-center">
              <h2>Explore the students experience</h2>
            </div>
          </div>
          <div className="home-testimonial-bottom">
            <div className="container testimonial-inner">
              <div className="row d-flex justify-content-center">
                <div className="col-md-4 style-3">
                  <div className="tour-item ">
                    <div className="tour-desc bg-white">
                      <div className="tour-text color-grey-3 text-center">
                        &ldquo;At this School, our mission is to balance a
                        rigorous comprehensive college preparatory curriculum
                        with healthy social and emotional development.&rdquo;
                      </div>
                      <div className="d-flex justify-content-center pt-2 pb-2">
                        <img
                          className="tm-people"
                          src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="link-name d-flex justify-content-center">
                        Balbir Kaur
                      </div>
                      <div className="link-position d-flex justify-content-center">
                        Student
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 style-3">
                  <div className="tour-item ">
                    <div className="tour-desc bg-white">
                      <div className="tour-text color-grey-3 text-center">
                        &ldquo;At this School, our mission is to balance a
                        rigorous comprehensive college preparatory curriculum
                        with healthy social and emotional development.&rdquo;
                      </div>
                      <div className="d-flex justify-content-center pt-2 pb-2">
                        <img
                          className="tm-people"
                          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                          alt=""
                        />
                      </div>
                      <div className="link-name d-flex justify-content-center">
                        Balbir Kaur
                      </div>
                      <div className="link-position d-flex justify-content-center">
                        Student
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 style-3">
                  <div className="tour-item ">
                    <div className="tour-desc bg-white">
                      <div className="tour-text color-grey-3 text-center">
                        &ldquo;At this School, our mission is to balance a
                        rigorous comprehensive college preparatory curriculum
                        with healthy social and emotional development.&rdquo;
                      </div>
                      <div className="d-flex justify-content-center pt-2 pb-2">
                        <img
                          className="tm-people"
                          src="https://images.pexels.com/photos/4946604/pexels-photo-4946604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                          alt=""
                        />
                      </div>
                      <div className="link-name d-flex justify-content-center">
                        Balbir Kaur
                      </div>
                      <div className="link-position d-flex justify-content-center">
                        Student
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
