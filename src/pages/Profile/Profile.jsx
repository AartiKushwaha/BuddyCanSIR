import React,{useState} from "react";
import "./profile.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

export default function Profile() {
    return(
        <>
        <Navigation />
        <section style={{backgroundColor: '#eee'}}>
        <div className="container py-5 mt-5">
          <h1 className="heading text-center">Update Profile</h1>
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{width: '150px'}} />
                  <h5 className="my-3">John Smith</h5>
                  <br />
                  <form className="uploadImage">
                    <h6>Upload Profile Image</h6>
                    <input type="file" name="myImage" accept="image/x-png,image/gif,image/jpeg" />
                  </form>
                  {/*<p className="text-muted mb-1">example@example.com</p>*/}
                  {/*<p className="text-muted mb-1">(097) 234-5678</p>*/}
                  {/*<p className="text-muted mb-1">July 10, 2001</p>*/}
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">John Smith</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email ID</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">example@example.com</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Contact No.</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(097) 234-5678</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Date of Birth</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">July 10, 2001</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Education Level</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">High School</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Hospital Details</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">AIIMS</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">A-23, Vasant Kunj Delhi, India</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Requests</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0"></p>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="editButton">
                          <a href="#" className="btn btn-info btn-lg">
                    <span className="glyphicon glyphicon-pencil"></span> Edit
                            <img className="img-short" src={require("../../assets/img/editIcon.png")} alt="..."/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <Footer />
        </>
    );
}

