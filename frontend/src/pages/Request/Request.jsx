import React, { useState, useEffect, useContext } from "react";
import "./request.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import $ from "jquery";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Request() {
  const { user } = useContext(Context);

  // const [reason, setReason] = useState("");
  // const [agree, setAgree] = useState(false);
  // const [agree2, setAgree2] = useState(false);
  // const [agree3, setAgree3] = useState(false);

  // const canBeSubmitted = () => {
  //   const isValid =
  //     track.trim().length &&
  //     category.trim().length &&
  //     reason.trim().length &&
  //     agree && agree2 && agree3;

  //   if (isValid) {
  //     document.getElementById("submitButton").removeAttribute("disabled");
  //     document.getElementById("submitButton").style.background = "#3AB255";
  //     document.getElementById("submitButton").style.cursor = "pointer";
  //   } else {
  //     document.getElementById("submitButton").setAttribute("disabled", true);
  //   }
  //   console.log(track, category)
  // };

  // useEffect(() => canBeSubmitted());

  // const [marksheet, setMarksheet] = useState("");
  // const [attendance, setAttendance] = useState("");
  // const [medical, setMedical] = useState("");

  // const canBeSubmitted2 = () => {
  //   const isValidForm =
  //     marksheet && attendance && medical

  //   if (isValidForm) {
  //     document.getElementById("nextButton").removeAttribute("disabled");
  //     document.getElementById("nextButton").style.background = "#3AB255";
  //     document.getElementById("nextButton").style.cursor = "pointer";
  //   } else {
  //     document.getElementById("nextButton").setAttribute("disabled", true);
  //   }
  // };

  // useEffect(() => canBeSubmitted2());


  const [status, setStatus] = useState("");
  const [rid, setRid] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      const res = await axios.get(`/requests?user=${user.username}`)
      if(typeof(res) !== 'undefined') {
        setStatus(res.data[0].status)
        setRid(res.data[0]._id)
      }
    }
    fetchRequests()
  }, [])

  console.log(status);

  const [track, setTrack] = useState("");
  const [category, setCategory] = useState("");

  console.log(track, category, user._id, user.username, user.address);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const newRequest = {
      uid: user._id,
      username: user.username,
      address: user.address,
      category,
      track,
      status: "requested",
    };
    try {
      await axios.post("/requests", newRequest);
      window.location.replace("/");
    } catch (err) {

    }
  }

  const handleNewRequest = async () => {
    try{
      await axios.delete("requests/" + rid);
      window.location.replace("/request")
    } catch (err) { }

  }

  const handleDocUpload = async () => {
    const updateRequest = {
      funded_doc: "https://cloudinary.com/documentation/image_video_and_file_upload",
      marksheet: "https://cloudinary.com/documentation/image_video_and_file_upload",
      attendance_record: "https://cloudinary.com/documentation/image_video_and_file_upload",
      education_fee_record: "https://cloudinary.com/documentation/image_video_and_file_upload",
      hospital_doc: "https://cloudinary.com/documentation/image_video_and_file_upload",
      status: "doc_uploaded"
    };
    try {
      await axios.put("/requests/"+rid, updateRequest);
    } catch (err) {
    }
  }

  function Content() {
    if (status == "") {
      return (
        <>
          <h2 style={{textAlign: "center"}}>Request</h2>
          <form className="request-form" onSubmit={handleSubmit}>
            <div id="track">
              <p className="subhead font-text"><b>What kind of help do you want us to provide?</b></p>
              <div className="row">
                <div className="col-md-3 col-sm-12">
                  &nbsp;&nbsp; <input type="radio" name="track" defaultValue="financial"
                    onChange={(e) => setTrack(e.target.value)}
                  />
                  &nbsp; <label>Financial</label>
                </div>
                <div className="col-md-4 col-sm-12">
                  &nbsp;&nbsp; <input type="radio" name="track" defaultValue="non-financial"
                    onChange={(e) => setTrack(e.target.value)}
                  />
                  &nbsp; <label>Non Financial</label><br />
                </div>
              </div>
            </div>
            <div id="category">
              <p className="subhead font-text"><b>Please choose one of the category?</b></p>
              <div className="row">
                <div className="col-md-3 col-sm-12">
                  &nbsp;&nbsp;&nbsp;<input type="radio" name="category" defaultValue="health"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  &nbsp; <label>Health</label>
                </div>
                <div className="col-md-3 col-sm-12">
                  &nbsp;&nbsp; <input type="radio" name="category" defaultValue="education"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  &nbsp; <label>Education</label>
                </div>
                <div className="col-md-3 col-sm-12">
                  &nbsp;&nbsp; <input type="radio" name="category" defaultValue="livelihood"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  &nbsp; <label>Livelihood</label>
                </div>
                <div className="col-md-3 col-sm-12">
                  &nbsp;&nbsp; <input type="radio" name="category" defaultValue="life skills"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  &nbsp; <label>Life skills</label>
                </div>
              </div>
            </div>

            <p className="subhead font-text"><b>Reason for request(Upto 50 words)</b></p>
            <textarea id="w3review" name="w3review" rows="1" cols="20" placeholder="Describe your request here..."
            // onChange={(e) => setReason(e.target.value)}
            ></textarea>

            <p className="subhead font-text"><b>Checkmark the condition(In order to raise a request all the following conditions should be fulfilled.)</b></p>
            <input type="checkbox" id="condition1" name="condition1" value="c1"
            // onClick={(e) => setAgree(e.target.checked)} 
            />
            <label for="condition1"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, distinctio.</label><br />
            <input type="checkbox" id="condition2" name="condition2" value="c2"
            // onClick={(e) => setAgree2(e.target.checked)}
            />
            <label for="condition2"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, distinctio.</label><br />
            <input type="checkbox" id="condition3" name="condition3" value="c3"
            // onClick={(e) => setAgree3(e.target.checked)}
            />
            <label for="condition3"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, distinctio.</label><br />
            <div className="center">
            <button type="submit" className="request-btn">Submit</button>  
            </div>
          </form>
        </>)
    } else if (status === "closed" || status === "approved") {
      return (
        <>
          {status === "approved" ?       
          <>    
          <h2 style={{textAlign: "center"}}>Application Approved</h2>
          <p className="text-center">Your request has been approved. Fund will be provided to the institute directly.</p>
          </>
          : 
          <>
          <h2 style={{textAlign: "center"}}>Application Closed</h2>
          <p className="text-center">Your application has been closed. Contact organization for further information.</p>
          </>
          }
          <div className="center">
          <button onClick={handleNewRequest} className="request-btn">Raise New Request</button>
          </div>
        </>)
    } else if (status === "requested") {
      return (
        <>
          <h2 style={{textAlign: "center"}}>Request Verification</h2>
          <p className="text-center">Your request is being verified, sms/email will be sent to you when verification process is completed.</p>
        </>)
    } else if (status === "verified") {
      return (
        <>
        <h2 style={{textAlign: "center"}}>Upload Documents</h2>
          <p className="text-center">Your request has been verified. Please upload the following documents.</p>

          {/* Forms section */}
            <form action="">
              <div className="file-upload">
                  <div className="row">
                    <div className="col-md-4 col-sm-12 font-text">
                      <label htmlFor=""><b>Marksheet: </b></label>
                    </div>
                    <div className="col-md-8 col-sm-12 font-text">
                      <input type="file" id="File1" name="file1"
                      // onChange={(e) => setMarksheet(e.target.value)} 
                      />
                    </div>
                  </div>
                </div>

              <div className="file-upload">
                  <div className="row">
                    <div className="col-md-4 col-sm-12 font-text">
                      <label htmlFor=""><b>Attendance record: </b></label>
                    </div>
                    <div className="col-md-8 col-sm-12">
                      <input type="file" id="File2" name="file2"
                      // onChange={(e) => setAttendance(e.target.value)} 
                      />
                    </div>
                  </div>
              </div>
              <div className="file-upload">
                  <div className="row">
                    <div className="col-md-4 col-sm-12 font-text">
                      <label htmlFor=""><b>Medical record: </b></label>
                    </div>
                    <div className="col-md-8 col-sm-12">
                      <input type="file" id="File5" name="file5"
                      // onChange={(e) => setMedical(e.target.value)} 
                      />
                    </div>
                  </div>
                </div>
              <div className="file-upload">
                  <div className="row">
                    <div className="col-md-4 col-sm-12 font-text">
                      <label htmlFor=""><b>School/College fee record: </b></label>
                    </div>
                    <div className="col-md-8 col-sm-12">
                      <input type="file" id="File3" name="file3"
                      // onChange={(e) => setAttendance(e.target.value)} 
                      />
                    </div>
                  </div>
              </div>
              <div className="file-upload">
                  <div className="row">
                    <div className="col-md-4 col-sm-12 font-text">
                      <label htmlFor=""><b>Prior funding documents: </b></label>
                    </div>
                    <div className="col-md-8 col-sm-12">
                      <input type="file" id="File4" name="file4"
                      // onChange={(e) => setAttendance(e.target.value)} 
                      />
                    </div>
                  </div>
              </div>
              <div className="center">
            <button type="submit" className="request-btn" onClick={handleDocUpload}>Submit</button>
              </div>
            </form>
        </>)
    } else if (status === "doc_uploaded") {
      return (
        <>
          <h2 style={{textAlign: "center"}}>Document Verification</h2>
          <p className="text-center">Your documents have been uploaded successfully, wait for further instruction through sms/email.</p>
        </>)
    } else {
      return (
        <>
          <p>Not Permitted!</p>
        </>);
    }
  }

  return (
    <>
      <Navigation />
      <p className="info">USER: {user.username}</p>
      <br />
      <p className="info">STATUS: {status}</p>
      <div className="request-div">
      {Content()}
      </div>
      <Footer />
    </>
  );
}