import React, { useRef, useContext, useState } from "react";
import "./login.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Login() {
    
    const userRef = useRef();
    const passwordRef = useRef();
    const { user, dispatch, isFetching } = useContext(Context);
    const [optionsActive,setOptionsActive] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type:"LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type:"LOGIN_FAILURE" });
        }
    };

    console.log(user);

    return (
        <>
            <Navigation />
                <div className="login bck-img">
                    <div className="login-container">
                        <p className="login-heading">Login</p>
                        <form className="login-form" onSubmit={handleSubmit}>
                            <label className="login-label">
                                Username: <br />
                            </label>
                            <input type="text" 
                            name="text" 
                            placeholder="Enter your username"
                            ref={userRef}/>
                            <br />
                            <span className="disclaimer">* Username is your uid.</span>
                            <br />
                            <label className="login-label">
                                Password: <br />
                            </label>
                            <input type="password" 
                            name="password" 
                            placeholder="Enter your password"
                            ref={passwordRef}
                            />
                            <br />
                            <input className="login-button" type="submit" value="Login" disabled={isFetching}/>
                        </form>
                        <a href="/">Forgot Password?</a>
                        <hr style={{margin: "10px 0"}} />
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