import logo from "./assets/logo.jpg";
import photo from "./assets/photo.png";
import InputField from "../../components/InputField";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

function login() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="inner">
        <img src={photo} alt="blog photo" className="image" />
        <h1 className="login">LOG IN</h1>
        <form action="#" className="login-form">
          <InputField type="email" placeholder="Enter your email address" />
          <div className="inputbox">
            <InputField
              type={show ? "text" : "password"}
              placeholder="Enter your password"
            />
            <p onClick={handleClick} className="eye">
              {show ? (
                <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
              ) : (
                <AiOutlineEye></AiOutlineEye>
              )}
            </p>
          </div>

          <div className="forgot-password">
            <a href="/forgot" className="forgot-pass-link">
              {" "}
              Forgot password?
            </a>
          </div>

          <div className="login-button">
            <button className="login-button"> LOG IN</button>
          </div>
          <div className="google-button">
            <button className="google-button">
              <img src={logo} alt="logo" className="google-logo" />
              Continue with Google
            </button>
          </div>
        </form>
        <p className="signup-text">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="signup-link">
            Signup now
          </a>
        </p>
      </div>
    </>
  );
}

export default login;
