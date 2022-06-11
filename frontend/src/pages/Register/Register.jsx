import React, {useState} from "react";
import "./register.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

export default function Register() {
    
    return (
        <>
            <Navigation />
                <div className="register reg-img">
                    <div className="register-container">
                        <p className="register-heading">New User Register</p>
                        <form className="register-form">
                            <label className="register-label">
                                Name: <br />
                            </label>
                            <input type="text" 
                            name="username" 
                            placeholder="Enter your username"
                            required
                            />
                            <br />
                            {/* <span className="disclaimer">* Username is your uid.</span> */}
                            {/* <label className="login-label">
                                Uid: <br />
                            </label>
                            <input type="text" 
                            name="text" 
                            placeholder="Enter your Uid"
                            />
                            <br /> */}
                            <label className="register-label">
                                Email: <br />
                            </label>
                            <input type="email" 
                            name="email" 
                            placeholder="Enter your email"
                            />
                            <br />
                            <label className="register-label">
                                Password: <br />
                            </label>
                            <input type="password" 
                            name="password" 
                            placeholder="Enter your password"
                            required
                            />
                            <br />
                            <label className="register-label">
                                Confirm Password: <br />
                            </label>
                            <input type="password" 
                            name="confirmPassword" 
                            placeholder="Enter your password again"
                            required
                            />
                            <br />
                            <label className="register-label">
                                Phone No: <br />
                            </label>
                            <input type="tel" pattern="[0-9]{10}" 
                            name="phoneNo" 
                            placeholder="Enter your phone no"
                            required
                            />
                            <br />
                            <label className="register-label">
                                Address: <br />
                            </label>
                            <input type="text" 
                            name="address" 
                            placeholder="Enter your Address"
                            required
                            />
                            <br />
                            <label className="register-label">
                                Education Level: <br />
                            </label>
                            <input type="text" 
                            name="educationLevel" 
                            placeholder="Enter your Education Level"
                            required
                            />
                            <br />
                            <input className="register-button" type="submit" value="Register"/>
                        </form>
                        {/* <a href="/">Forgot Password?</a>
                        <hr style={{margin: "10px 0"}} />
                        <button className="login-button">Login using OTP</button> */}
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