import React from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Admin from "./pages/Admin/Admin";
import Request from "./pages/Request/Request";
import Profile from "./pages/Profile/Profile";
// import AdminLogin from "./pages/AdminLogin/AdminLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import "./App.css";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={user? <Home /> : <Login />} />
        {/* <Route exact path="/adminlogin" element={<AdminLogin />} /> */}
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/request" element={<Request />} />
        <Route exact path="/profile/:userId" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
