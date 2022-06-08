import React, { useState } from "react";
import "./admin.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import data from "./mock-data.json";
import Cards from "../../components/Admin-cards/Cards";

export default function Admin() {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <>
      <Navigation />
      <div class="container-fluid admin-container">
        <div class="col-md-3">
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
                  <div className="btn btn-primary" onClick={ToggleSidebar}>
                    close
                  </div>
                </div>
                <div className="sd-body">
                  <div className="filter">
                    <form action="/">
                      <p className="filter-subheading">Application Type:</p>
                      <input
                        type="radio"
                        id="financial"
                        name="fav_language"
                        value="Financial"
                      />
                      <label for="financial">Financial</label>
                      <br />
                      <input
                        type="radio"
                        id="non-financial"
                        name="fav_language"
                        value="Non-financial"
                      />
                      <label for="non-financial">Non-Financial</label>

                      <p className="filter-subheading">Application Status:</p>
                      <input type="radio" id="age1" name="age" value="30" />
                      <label for="age1">Requested</label>
                      <br />
                      <input type="radio" id="age2" name="age" value="60" />
                      <label for="age2">Verified</label>
                      <br />
                      <input type="radio" id="age3" name="age" value="100" />
                      <label for="age3">Documents received</label>
                      <br />
                      <input type="radio" id="age2" name="age" value="60" />
                      <label for="age2">Approved</label>

                      <p className="filter-subheading">Application Dates:</p>
                      <input type="radio" id="age1" name="age" value="30" />
                      <label for="age1">Start Date</label>
                      <br />
                      <input type="radio" id="age2" name="age" value="60" />
                      <label for="age2">End Date</label>
                      <br />

                      <p className="filter-subheading">UID/ User Name:</p>
                      <input type="text" placeholder="Enter uid/ name" />
                      <button className="filter-button">Apply</button>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
                onClick={ToggleSidebar}
              ></div>
            </div>
          </div>
        </div>
        <div class="col-10 users-list">
          <div class="rightside">
            <Cards prop={data} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
