import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./admin.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import Cards from "../../components/Admin-cards/Cards";
import axios from "axios";

export default function Admin() {
  const [u, setUser] = useState("");
  const handleInputChange = (e) => {
    setUser(e.target.value);
  };

  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const [track, setTrack] = useState("");
  const [category, setCategory] = useState("");
  const [uid, setUid] = useState("");

  // const axios = require('axios');
  const [requests, setRequests] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchRequests = async () => {
      const res = await axios.get("/requests" + search)
      setRequests(res.data)
    }
    fetchRequests()
  }, [search])

  // for disabling radio buttons
  if (track || category) {
    document.getElementById("uid-field").setAttribute("disabled", true);
    document.getElementById("uid-field").style.cursor = "not-allowed";
  }
  if (uid) {
    document.getElementById("radio1").setAttribute("disabled", true);
    document.getElementById("radio2").setAttribute("disabled", true);
    document.getElementById("radio3").setAttribute("disabled", true);
    document.getElementById("radio4").setAttribute("disabled", true);
    document.getElementById("radio5").setAttribute("disabled", true);
    document.getElementById("radio6").setAttribute("disabled", true);
  }

  return (
    <>
      <Navigation />
      <div class="container-fluid admin-container">
        <div className="row">
          <div class="col-2">
            <div class="leftside">
              <div className="container-fluid mt-3">
                <div
                  className="btn btn-primary filter-btn"
                  onClick={ToggleSidebar}
                  style={{ position: "fixed" }}
                >
                  Filter
                </div>
                <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
                  <div className="sd-header">
                    <h4 className="mb-0">Filter Data</h4>
                    <div className="btn btn-primary"
                      onClick={ToggleSidebar}
                    >
                      close
                    </div>
                  </div>

                  <div className="sd-body">
                  <p className="filter-subheading">Application Type:</p>
                  <Link to={"/admin?track=financial"}>Financial</Link>
                  <br />
                  <Link to={"/admin?track=non-financial"}>Non-Financial</Link>
                  <p style={{ marginTop: "20px" }}><b>OR</b></p>
                  <p className="filter-subheading">Application Status:</p>
                  <Link to={"/admin?status=requested"}>Requested</Link><br />
                  <Link to={"/admin?status=verified"}>Verified</Link><br />
                  <Link to={"/admin?status=doc_uploaded"}>Document Received</Link><br />
                  <Link to={"/admin?status=approved"}>Approved</Link>
                  <p style={{ marginTop: "20px" }}><b>OR</b></p>
                  <input type="text"
                    name="text"
                    placeholder="Enter your username"
                    onChange={handleInputChange} />
                  <Link to={"/admin?user=" + u}>
                    <button className="filter-button">
                      Apply
                    </button></Link>
                  {/* <div className="filter">
                    <p className="filter-subheading">Application Type:</p>
                    <input
                      type="radio"
                      id="radio1"
                      name="fav_language"
                      value="Financial"
                      onChange={(e) => setTrack(e.target.value)}
                    />
                    <label for="financial">Financial</label>
                    <br />
                    <input
                      type="radio"
                      id="radio2"
                      name="fav_language"
                      value="Non-Financial"
                      onChange={(e) => setTrack(e.target.value)}
                    />
                    <label for="non-financial">Non-Financial</label>

                    <p className="filter-subheading">Application Status:</p>
                    <input type="radio" id="radio3" name="radio" value="requested" 
                    onChange={(e) => setCategory(e.target.value)} 
                    />
                    <label for="age1">Requested</label>
                    <br />
                    <input type="radio" id="radio4" name="radio" value="verified" 
                    onChange={(e) => setCategory(e.target.value)} 
                    />
                    <label for="age2">Verified</label>
                    <br />
                    <input type="radio" id="radio5" name="radio" value="doc-received" 
                    onChange={(e) => setCategory(e.target.value)} 
                    />
                    <label for="age3">Documents received</label>
                    <br />
                    <input type="radio" id="radio6" name="radio" value="approved" 
                    onChange={(e) => setCategory(e.target.value)} 
                    />
                    <label for="age2">Approved</label>

                    <p className="filter-subheading">UID/ User Name:</p>
                    <input type="text" id="uid-field" placeholder="Enter uid/ name" 
                    onChange={(e) => setUid(e.target.value)} 
                    />
                    <button className="filter-button" 
                    onClick={() => window.location.reload(false)}
                    >Clear Filter</button>
                     <button className="filter-button" onClick={handleClear}>Clear</button>
                  </div> */}
                </div>
                  <div
                    className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
                    onClick={ToggleSidebar}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-9 users-list">
            <div class="rightside">
              <Cards data={requests} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
