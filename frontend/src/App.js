import React from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Admin from "./pages/Admin/Admin";
import Request from "./pages/Request/Request";
import Profile from "./pages/Profile/Profile";
import Guide from "./pages/Guide/Guide";
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
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/request" element={<Request />} />
        <Route exact path="/profile/:userId" element={<Profile />} />
        <Route exact path="/guide" element={<Guide />} />
      </Routes>
    </Router>
  );
}

export default App;
