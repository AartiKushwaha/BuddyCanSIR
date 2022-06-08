import React from "react";
import "./request.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import $ from "jquery";

export default function Request() {
  $(document).ready(function () {

    var current_fs, next_fs; //fieldsets
    var opacity;

    $(".next").click(function () {

      current_fs = $(this).parent();
      next_fs = $(this).parent().next();

      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate({ opacity: 0 }, {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            'display': 'none',
            'position': 'relative'
          });
          next_fs.css({ 'opacity': opacity });
        },
        duration: 600
      });
    });

    $('.radio-group .radio').click(function () {
      $(this).parent().find('.radio').removeClass('selected');
      $(this).addClass('selected');
    });

    $(".submit").click(function () {
      return false;
    })

  });


  return (
    <>
      <Navigation />
      <div className="container-fluid" id="grad1">
        <div className="row justify-content-center mt-0">
          <div className="col-11 col-sm-9 col-md-7 col-lg-6 p-0 mt-3 mb-2">
            <div className="card px-0 pt-4 pb-0 mt-3 mb-3 text-center">
              <div className="row">
                <div className="col-md-12 mx-0">

                  <form id="msform">
                    {/* progressbar */}
                    <ul id="progressbar">
                      <li className="active" id="account"><strong>Financial/Non-Financial</strong></li>
                      <li id="request-status"><strong>Request Status</strong></li>
                      <li id="personal"><strong>Upload Documents</strong></li>
                      <li id="payment"><strong>Documents Verification </strong></li>
                    </ul>

                    {/* fieldsets */}
                    <fieldset>
                      <div className="form-card">
                        <h1 className="request-heading">Request Page</h1>
                        <form action="/action_page.php" className="request-form">
                          <p className="subhead"><b>What kind of help do you want us to provide?</b></p>
                          &nbsp; <input type="radio" id="html" name="fav_language" defaultValue="HTML" required />
                          &nbsp; <label htmlFor="html">Financial</label><br />
                          &nbsp; <input type="radio" id="css" name="fav_language" defaultValue="CSS" required />
                          &nbsp; <label htmlFor="css">Non Financial</label><br />
                          <br />
                          <p className="subhead"><b><label for="w3review">Description</label></b></p>
                          <textarea id="w3review" name="w3review" rows="6" cols="40" placeholder="Describe your request here..."></textarea>
                        </form>
                      </div>
                      <input type="button" name="next" className="next action-button text-center" defaultValue="Submit" />
                    </fieldset>
                    <fieldset>
                      <div className="form-card">
                        <div className="modal-content">
                          <div className="modal-header">
                            <div className="icon-box">
                              <i className="material-icons"></i>
                            </div>
                            <h4 className="modal-title w-100">Proceed</h4>
                          </div>
                          <div className="modal-body">
                            <p className="text-center">Your request has approved. You can now upload your documents.</p>
                          </div>

                        </div>
                      </div>
                      <input type="button" name="make_payment" className="next action-button" defaultValue="Next" />
                    </fieldset>
                    <fieldset>
                      <div className="form-card">
                        <h1>Upload Your Documents</h1>
                        <div className="file-upload">
                          {/* <p className="subhead"><b>Click on the "Choose File" button to upload your marksheet:</b></p> */}
                          <form action="/action_page.php">
                            <label htmlFor="" className="col-3"><b>Marksheet: </b></label>
                            <input type="file" id="myFile" name="filename" required />
                            <input className="request-btn" type="submit" style={{ float: "right" }} />
                          </form></div>

                        <div className="file-upload">
                          {/* <p className="subhead"><b>Click on the "Choose File" button to upload your attendence record:</b></p> */}
                          <form action="/action_page.php">
                            <label htmlFor="" className="col-3"><b>Attendance record: </b></label>
                            <input type="file" id="myFile" name="filename" required />
                            <input className="request-btn" type="submit" style={{ float: "right" }} />
                          </form></div>
                        <div className="file-upload">
                          {/* <p className="subhead"><b>Click on the "Choose File" button to upload medical report:</b></p> */}
                          <form action="/action_page.php">
                            <label htmlFor="" className="col-3"><b>Medical record: </b></label>
                            <input type="file" id="myFile" name="filename" required />
                            <input className="request-btn" type="submit" style={{ float: "right" }} />
                          </form></div>

                      </div>
                      <input type="button" name="next" className="next action-button" defaultValue="Submit" />
                    </fieldset>
                    <fieldset>
                      <div className="form-card">
                        <div className="modal-content">
                          <div className="modal-header">
                            <div className="icon-box">
                              <i className="material-icons"></i>
                            </div>
                            <h4 className="modal-title w-100">Awesome!</h4>
                          </div>
                          <div className="modal-body">
                            <p className="text-center">Your request has approved. Check your email for detials.</p>
                          </div>

                        </div>
                      </div>
                      <input type="button" name="make_payment" className="next action-button" defaultValue="Close" />
                    </fieldset>
                  </form>
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