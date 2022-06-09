import React from "react";
import { Link } from "react-router-dom";
import Translator from "../Translator/Translator";
import "./navigation.css";

export default function Navigation() {
    return(
      //       <div className="navbar-nav ms-auto">
      //       <Link className="nav-item nav-link" to="/login" > Login </Link> 
      //       <Link className="nav-item nav-link" to="/request" > Request </Link> 
      //       <Link className="nav-item nav-link" to="/admin" > Admin </Link> 
      //       <Link className="nav-item nav-link" to="/profile" > Profile </Link> 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img
              src="https://i.pinimg.com/736x/6e/a9/d8/6ea9d8d5ac75d9c5d7a2a567c1e2bbdf.jpg"
              height="28"
              alt="CoolBrand"
            />
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="/">
                {" "}
                <h4>BuddyCanSIR</h4>{" "}
              </Link>
              {/* <Link className="nav-item nav-link" to="/" > Testimonials </Link>  */}
              {/* <Link className="nav-item nav-link" to="/" > Contact Us </Link>  */}
            </div>
            
            <div className="navbar-nav ms-auto">
              <Translator/>
              
              <Link className="nav-item nav-link dropdown dropdown-pull-right" to="/">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Login
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                  <Link className="nav-item nav-link dropdown custom" to="/adminlogin">
                      Admin Login
                    </Link>
                  </li>
                  <li>
                  <Link className="nav-item nav-link dropdown custom" to="/login">
                      User Login
                    </Link>
                  </li>
                </ul>
                </Link>
            </div>
          </div>
        </div>
        
      </nav>
    );
}