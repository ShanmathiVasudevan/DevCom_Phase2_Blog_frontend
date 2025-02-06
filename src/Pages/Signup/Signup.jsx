import "./signupstyle.css";
import logo from "../assets/logo.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

function Signup() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="signup">
      <div className="welcome">
        <h3>Sign Up</h3>
        <p>
          Already have an account?{" "}
          <a href="/" className="login">
            {" "}
            Log in.
          </a>{" "}
        </p>
      </div>
      <form action="#" className="fields">
        <div className="input-container">
          <label className="input-label">Full name</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            className="input-field"
            required
          />
          <label className="input-label">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email address"
            className="input-field"
            required
          />

          <label className="input-label">Choose a password </label>
          <div className="inputbox1">
            <input
              id="password"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              className="input-field"
              required
            />
            <p onClick={handleClick} className="eye1">
              {show ? (
                <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
              ) : (
                <AiOutlineEye></AiOutlineEye>
              )}
            </p>
          </div>
          <label className="input-label">Confirm password </label>
          <div className="inputbox2">
            <input
              id="password"
              type={show ? "text" : "password"}
              placeholder="Confirm password"
              className="input-field"
              required
            />
            <p onClick={handleClick} className="eye2">
              {show ? (
                <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
              ) : (
                <AiOutlineEye></AiOutlineEye>
              )}
            </p>
          </div>

          <div className="submitbutton">
            <button className="submitbutton">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
