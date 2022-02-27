import React, { useState } from "react";
import "./Signup.css";
import { FaCcVisa, FaTruckMoving, FaIdCard } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../navbar/Navbar";
import { Footer } from "../../footer/Footer";

export const Signup = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleRegister = () => {
    axios
      .post("http://localhost:4500/users/register", user)
      .then((res) => {
        console.log(res.data);
        navigate(`/login`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="signInDiv">
        <h3>Create Account</h3>
        <p>
          <FaCcVisa style={{ fontSize: "20px" }} />
          <span>Check out faster</span>
        </p>
        <p>
          <FaTruckMoving style={{ fontSize: "20px" }} />
          <span>Track orders easily</span>
        </p>
        <p>
          <FaIdCard style={{ fontSize: "20px" }} />{" "}
          <span>Use one sign-in across our brands</span>
        </p>
        <p>*Required</p>
        <div className="signInForm">
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <label className="labeltag">First name*</label>
            <input
              type="text"
              name="first_name"
              value={user.first_name}
              onChange={handleChange}
            />
            <label className="labeltag">Last name*</label>
            <input
              type="text"
              name="last_name"
              value={user.last_name}
              onChange={handleChange}
            />
            <label className="labeltag">Create password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
            <p>
              By creating an account, you agree to our Privacy Policy and Terms
              & Conditions.
            </p>
            <button onClick={handleRegister}>Create Account</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
