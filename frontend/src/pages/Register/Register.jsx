import React, {useState} from "react";
import "./register.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [phone, setPhone] = useState("");
    const [education, setEducation] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        if(password === confirm) {
            try{
                const res = await axios.post("/auth/register", {
                    username,
                    email,
                    password,
                    phone_no: phone,
                    education,
                    address,
                });
                res.data && window.location.replace("/login");
            }catch(err){
                setError(true);
            } 
        } else {
            alert("Password and Confirm password not matching!")
        }
    };
    
    return (
        <>
            <Navigation />
                <div className="register reg-img">
                    <div className="register-container">
                        <p className="register-heading">New User Register</p>
                        <form className="register-form" onSubmit={handleSubmit}>
                            <label className="register-label">
                                Uid: <br />
                            </label>
                            <input type="text" 
                            name="username" 
                            placeholder="Enter your username"
                            required
                            onChange={e=>setUsername(e.target.value)}
                            />
                            <br />
                            <label className="register-label">
                                Email: <br />
                            </label>
                            <input type="email" 
                            name="email" 
                            placeholder="Enter your email"
                            onChange={e=>setEmail(e.target.value)}
                            />
                            <br />
                            <label className="register-label">
                                Password: <br />
                            </label>
                            <input type="password" 
                            name="password" 
                            placeholder="Enter your password"
                            onChange={e=>setPassword(e.target.value)}
                            required
                            />
                            <br />
                            <label className="register-label">
                                Confirm Password: <br />
                            </label>
                            <input type="password" 
                            name="confirmPassword" 
                            placeholder="Enter your password again"
                            onChange={e=>setConfirm(e.target.value)}
                            required
                            />
                            <br />
                            <label className="register-label">
                                Phone No: <br />
                            </label>
                            <input type="tel" pattern="[0-9]{10}" 
                            name="phoneNo" 
                            placeholder="Enter your phone no"
                            onChange={e=>setPhone(e.target.value)}
                            required
                            />
                            <br />
                            <label className="register-label">
                                Address: <br />
                            </label>
                            <input type="text" 
                            name="address" 
                            placeholder="Enter your Address"
                            onChange={e=>setAddress(e.target.value)}
                            required
                            />
                            <br />
                            <label className="register-label">
                                Education Level: <br />
                            </label>
                            <input type="text" 
                            name="educationLevel" 
                            placeholder="Enter your Education Level"
                            onChange={e=>setEducation(e.target.value)}
                            required
                            />
                            <br />
                            <input className="register-button" type="submit" value="Register"/>
                        </form>
                        {error && <span style={{color:"red",paddingTop:"10px"}}>Something went wrong!</span>}
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