import logo from "../assets/logo.jpg";
import React from "react";
import photo from "../assets/photo.png";
import InputField from "../../components/InputField";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
//import './index.css'
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Email:", email);
    console.log("Password: ", password);
  };

  const [show, setShow] = useState(false);
  const handleClickA = () => {
    setShow(!show);
  };
  return (
    <>
    <Link to={"/home"}>
      <button className="login-home">
      <span class="material-symbols-outlined">
      home
      </span>
      </button>
    </Link>
    <div className="login-page">
      <div className="inner">
        <div className="heading">
          <h1 className="login">LOG IN </h1>
          <img src={photo} alt="blog photo" className="image" />
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              console.log("Updated email: ", e.target.value);
              setEmail(e.target.value);
            }}
            placeholder="Enter your email address"
            className="loginfields"
          />
          <div className="inputbox">
            <input
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => {
                console.log("Updated password: ", e.target.value);
                setPassword(e.target.value);
              }}
              placeholder="Enter your password"
              className="loginfields"
            />
            <p onClick={handleClickA} className="eye">
              {show ? (
                <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
              ) : (
                <AiOutlineEye></AiOutlineEye>
              )}
            </p>
          </div>

          <div className="forgot-password">
            <Link to="/forgot" className="forgot-pass-link">
              {" "}
              Forgot password?
            </Link>
          </div>

          <div className="login-button">
            <button onClick={handleSubmit} className="login-button">
              {" "}
              LOG IN
            </button>
          </div>
          <div className="google-button">
            <button className="google-button">Continue with Google</button>
          </div>
        </form>
        <p className="signup-text">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="signup-link">
            Signup now
          </Link>
        </p>
      </div>
    </div>
    </>
    
  );
};
//};
export default LoginForm;
