import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import { FcGoogle } from "react-icons/fc";
import { Navbar } from "../../navbar/Navbar";
import { Footer } from "../../footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../../../redux/action";

export const SignIn = () => {
  const [check, setCheck] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleLogin = () => {
    axios
      .post("http://localhost:4500/users/login", user)
      .then((res) => {
        console.log(res.data);
        dispatch(userData(res.data));
        navigate(`/`)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCheck = () => {
    axios
      .post("http://localhost:4500/users/check", user)
      .then((res) => {
        if (res.data.message === "no") {
          navigate(`/register`);
        }
        console.log(res.data);
        setCheck(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return check === "yes" ? (
    <div>
      <Navbar />
      <div className="signInDiv">
        <h3>Sign In | Create Account</h3>
        <p>Enter your email to get started.</p>
        <div action="" className="signInForm">
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <label style={{ marginTop: "15px" }}>Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
            <p>
              By tapping Next, you agree to our Privacy Policy and Terms &
              Conditions.
            </p>
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div>
      <Navbar />
      <div className="signInDiv">
        <h3>Sign In | Create Account</h3>
        <p>Enter your email to get started.</p>
        <div action="" className="signInForm">
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <p>
              By tapping Next, you agree to our Privacy Policy and Terms &
              Conditions.
            </p>
            <button onClick={handleCheck}>Next</button>
            <button>
              <a href="http://localhost:8080/auth/google">
                <FcGoogle style={{ fontSize: "15px" }} />
              </a>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
