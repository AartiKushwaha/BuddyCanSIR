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
      <div className="admin bck">
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
                  <Link className="admin-filter-link" to={"/admin?track=financial"}>Financial</Link>
                  <br />
                  <Link className="admin-filter-link" to={"/admin?track=non-financial"}>Non-Financial</Link>
                  <p style={{ marginTop: "20px", color: "rgba(151, 145, 145, 0.893)", textAlign: "center" }}>or</p>
                  <p className="filter-subheading">Application Status:</p>
                  <Link className="admin-filter-link" to={"/admin?status=requested"}>Requested</Link><br />
                  <Link className="admin-filter-link" to={"/admin?status=verified"}>Verified</Link><br />
                  <Link className="admin-filter-link" to={"/admin?status=doc_uploaded"}>Document Received</Link><br />
                  <Link className="admin-filter-link" to={"/admin?status=approved"}>Approved</Link>
                  <p style={{ marginTop: "20px", color: "rgba(151, 145, 145, 0.893)", textAlign: "center" }}>or</p>
                  <input type="text"
                    name="text"
                    placeholder="Enter your username"
                    onChange={handleInputChange} />
                  <Link to={"/admin?user=" + u}>
                    <button className="filter-button">
                      Apply
                    </button></Link>
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
      </div>
      <Footer />
    </>
  );
}
