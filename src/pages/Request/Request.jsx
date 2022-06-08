import React, { useState, useEffect } from "react";
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

  const [track, setTrack] = useState("");
  const [category, setCategory] = useState("");
  const [reason, setReason] = useState("");
  const [agree, setAgree] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [agree3, setAgree3] = useState(false);

  const canBeSubmitted = () => {
    const isValid =
      track.trim().length &&
      category.trim().length &&
      reason.trim().length &&
      agree && agree2 && agree3;

    if (isValid) {
      document.getElementById("submitButton").removeAttribute("disabled");
      document.getElementById("submitButton").style.background = "#3d98c2";
    } else {
      document.getElementById("submitButton").setAttribute("disabled", true);
    }
    console.log(track, category)
  };

  useEffect(() => canBeSubmitted());

  const [marksheet, setMarksheet] = useState("");
  const [attendance, setAttendance] = useState("");
  const [medical, setMedical] = useState("");

  const canBeSubmitted2 = () => {
    const isValidForm =
      marksheet && attendance && medical

    if (isValidForm) {
      document.getElementById("nextButton").removeAttribute("disabled");
      document.getElementById("nextButton").style.background = "#3d98c2";
    } else {
      document.getElementById("nextButton").setAttribute("disabled", true);
    }
    console.log({ marksheet, attendance, medical });
  };

  useEffect(() => canBeSubmitted2());

  return (
    <>
      <Navigation />
      <div className="container-fluid" id="grad1">
        <div className="row justify-content-center mt-0">
          <div className="col-11 col-sm-9 col-md-7 col-lg-6 p-0 mt-3 mb-2">
            <div className="card px-0 pt-4 pb-0 mt-3 mb-3 text-center request-main-div">
              <div className="row">
                <div className="col-md-12 mx-0">

                  <form id="msform">
                    {/* progressbar */}
                    <ul id="progressbar">
                      <li className="active" id="account"><strong className="indicator-text">Financial/Non-Financial</strong></li>
                      {/* <li id="request-status"><strong>Request Status</strong></li> */}
                      <li id="personal"><strong className="indicator-text">Upload Documents</strong></li>
                      <li id="payment"><strong className="indicator-text">Documents Verification </strong></li>
                    </ul>

                    {/* fieldsets */}
                    <fieldset>
                      <div className="form-card">
                        <h3 className="modal-title w-100 request-heading">Request Page</h3>
                        <form action="/action_page.php" className="request-form">

                          <div id="group1">
                            <p className="subhead"><b>What kind of help do you want us to provide?</b></p>
                            <div className="row">
                              <div className="col-md-3 col-sm-12">
                                &nbsp;&nbsp; <input type="radio" name="group1" defaultValue="Financial" onChange={(e) => setTrack(e.target.value)} />
                                &nbsp; <label>Financial</label>
                              </div>
                              <div className="col-md-4 col-sm-12">
                                &nbsp;&nbsp; <input type="radio" name="group1" defaultValue="Non-Financial" onChange={(e) => setTrack(e.target.value)} />
                                &nbsp; <label>Non Financial</label><br />
                              </div>
                            </div>
                          </div>
                          <div id="group2">
                            <p className="subhead"><b>Please choose one of the category?</b></p>
                            <div className="row">

                              {track === 'Non-Financial' ?
                                <>
                                  <div className="col-md-6 col-sm-12">
                                    &nbsp;&nbsp;&nbsp;<input type="radio" name="group2" defaultValue="General Counselling" onChange={(e) => setCategory(e.target.value)} />
                                    &nbsp; <label>General Counselling</label>
                                  </div>
                                  <div className="col-md-6 col-sm-12">
                                    &nbsp;&nbsp; <input type="radio" name="group2" defaultValue="Career Counselling" onChange={(e) => setCategory(e.target.value)} />
                                    &nbsp; <label>Career Counselling</label>
                                  </div>
                                  <div className="col-md-6 col-sm-12">
                                    &nbsp;&nbsp; <input type="radio" name="group2" defaultValue="Medical Services" onChange={(e) => setCategory(e.target.value)} />
                                    &nbsp; <label>Medical Services</label>
                                  </div>
                                  <div className="col-md-6 col-sm-12">
                                    &nbsp;&nbsp; <input type="radio" name="group2" defaultValue="Others" onChange={(e) => setCategory(e.target.value)} />
                                    &nbsp; <label>Others</label>
                                  </div>
                                </> :
                                <>
                                <div className="col-md-3 col-sm-12">
                                  &nbsp;&nbsp;<input type="radio" name="group2" defaultValue="health" onChange={(e) => setCategory(e.target.value)} />
                                  &nbsp; <label>Health</label>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                  &nbsp;&nbsp; <input type="radio" name="group2" defaultValue="education" onChange={(e) => setCategory(e.target.value)} />
                                  &nbsp; <label>Education</label>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                  &nbsp;&nbsp; <input type="radio" name="group2" defaultValue="livelihood" onChange={(e) => setCategory(e.target.value)} />
                                  &nbsp; <label>Livelihood</label>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                  &nbsp;&nbsp; <input type="radio" name="group2" defaultValue="life skills" onChange={(e) => setCategory(e.target.value)} />
                                  &nbsp; <label>Life skills</label>
                                </div>
                              </>
                              }


                            </div>
                          </div>

                          <p className="subhead"><b>Reason for request(Upto 50 words)</b></p>
                          <textarea id="w3review" name="w3review" rows="1" cols="20" placeholder="Describe your request here..." onChange={(e) => setReason(e.target.value)}></textarea>

                          <p className="subhead"><b>Checkmark the condition(In order to raise a request all the following conditions should be fulfilled.)</b></p>
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onClick={(e) => setAgree(e.target.checked)} />
                          <label for="vehicle1"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, distinctio.</label><br />
                          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" onClick={(e) => setAgree2(e.target.checked)} />
                          <label for="vehicle2"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, distinctio.</label><br />
                          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" onClick={(e) => setAgree3(e.target.checked)} />
                          <label for="vehicle3"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, distinctio.</label><br />

                        </form>
                      </div>
                      <input type="button" id="submitButton" name="next" className="next action-button text-center" defaultValue="Submit" />
                    </fieldset>
                    <fieldset>
                      <div className="form-card">
                        <h3 className="modal-title w-100 request-heading">Request Status</h3>
                        <p className="text-center">Your request has been approved.</p>
                      </div>
                      <div className="form-card">
                        <h3 className="modal-title w-100 request-heading" style={{ marginTop: "40px" }}>Upload Your Documents</h3>
                        <div className="file-upload">
                          <form action="/action_page.php">
                            <div className="row">
                              <div className="col-md-4 col-sm-12">
                                <label htmlFor=""><b>Marksheet: </b></label>
                              </div>
                              <div className="col-md-8 col-sm-12">
                                <input type="file" id="File1" name="file1" onChange={(e) => setMarksheet(e.target.value)} />
                              </div>
                            </div>
                          </form></div>

                        <div className="file-upload">
                          <form action="/action_page.php">
                            <div className="row">
                              <div className="col-md-4 col-sm-12">
                                <label htmlFor=""><b>Attendance record: </b></label>
                              </div>
                              <div className="col-md-8 col-sm-12">
                                <input type="file" id="File2" name="file2" onChange={(e) => setAttendance(e.target.value)} />
                              </div>
                            </div>
                          </form></div>
                        <div className="file-upload">
                          <form action="/action_page.php">
                            <div className="row">
                              <div className="col-md-4 col-sm-12">
                                <label htmlFor=""><b>Medical record: </b></label>
                              </div>
                              <div className="col-md-8 col-sm-12">
                                <input type="file" id="File3" name="file3" onChange={(e) => setMedical(e.target.value)} />
                              </div>
                            </div>
                          </form></div>

                      </div>
                      <input type="button" id="nextButton" name="make_payment" className="next action-button" defaultValue="Next" />
                    </fieldset>
                    <fieldset>
                      <div className="form-card">
                        <h3 className="modal-title w-100 request-heading">Application Status</h3>
                        <p className="text-center">Congratulation! Your request has been approved. We will reach out to you shortly via email/sms.</p>
                      </div>
                      <br /><br />
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