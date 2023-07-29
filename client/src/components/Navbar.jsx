import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./css/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  //handle logout
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("Logged out successfully ");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav>
      <h1>
        <Link to={"/"}>VividAI</Link>
      </h1>
      {loggedIn ? (
        <>
          
          <NavLink to="/login" onClick={handleLogout}>
            Logout
          </NavLink>
        </>
      ) : (
        <>
          
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;
