import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";
import "./navigation.css";
import logo from './logo.png'
import axios from "axios";
import Count from "../Count/Count";

export default function Navigation() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <img
            src={logo}
            height="39"
            alt="{logo}"
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
          </div>
          <div className="navbar-nav ms-auto">
            

            {user ? (
              <>
                {user.username === "admin" ? <>
                  <Link className="nav-item nav-link dropdown custom" to="/admin">
                    Admin <Count />
                  </Link>
                  <Link className="nav-item nav-link dropdown custom" to="/register">
                    Register
                  </Link>
                </> : <Link className="nav-item nav-link dropdown custom" to="/request">
                  Request
                </Link>}
                <Link
                  className="nav-item nav-link dropdown dropdown-pull-right"
                  to="/"
                  style={{ padding: "0px" }}>
                  <a
                    class="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      className="topImg"
                      src={user.profile}
                      alt="" />
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <Link className="nav-item nav-link dropdown custom-dropdown" to={`/profile/${user._id}`}>
                        Profile
                      </Link>
                    </li>
                    <li>
                      <li className="nav-item nav-link dropdown custom-dropdown" onClick={handleLogout} style={{ cursor: "pointer" }}>
                        Logout
                      </li>
                    </li>
                  </ul>
                </Link>
                {/* <Link className="nav-item nav-link dropdown custom" to={`/profile/${user._id}`}>
                  Profile
                  // <img
                  //   className="topImg"
                  //   src={user.profile}
                  //   // src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  //   alt="" />
                </Link>
                <li className="nav-item nav-link dropdown custom" onClick={handleLogout} style={{ cursor: "pointer" }}>
                  Logout
                </li> */}
              </>
            ) : (
              <li>
                <Link className="nav-item nav-link dropdown custom" to="/login">
                  Login
                </Link>
              </li>
            )}
          </div>
        </div>
      </div>

    </nav>
  );
}