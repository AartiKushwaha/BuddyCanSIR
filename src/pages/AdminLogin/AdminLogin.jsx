import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

export default function AdminLogin() {
  return (
    <>
      <Navigation />
      <div className="login">
        <div className="login-container">
          <p className="login-heading">Admin Login</p>
          <form className="login-form">
            <label className="login-label">
              Phone No./Email: <br />
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email/phone no."
            />
            <br />
            <label className="login-label">
              Password: <br />
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <br />
            <input className="login-button" type="submit" value="Login" />
          </form>
          <a href="/">Forgot Password?</a>
          <hr style={{ margin: "10px 0" }} />
          <button className="login-button">Login using OTP</button>
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
      </div>
      <Footer />
    </>
  );
}
