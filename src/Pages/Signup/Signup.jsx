import "./signupstyle.css";
//import logo from "./assets/logo.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username: ", username);
    console.log("Email: ", email);
    console.log("Password: ", password);
    console.log("Confirmed password: ", confirmpassword);
  };
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
          <Link to="/" className="login">
            {" "}
            Log in.
          </Link>{" "}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="fields">
        <div className="input-container">
          <label className="input-label">Full name</label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              console.log("Updated name: ", e.target.value);
              setUsername(e.target.value);
            }}
            placeholder="Name"
            className="input-field"
            required
          />
          <label className="input-label">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              console.log("Updated email: ", e.target.value);
              setEmail(e.target.value);
            }}
            placeholder="Email address"
            className="input-field"
            required
          />

          <label className="input-label">Choose a password </label>
          <div className="inputbox1">
            <input
              id="password"
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => {
                console.log("Updated password: ", e.target.value);
                setPassword(e.target.value);
              }}
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
              value={confirmpassword}
              onChange={(e) => {
                console.log("Updated confirm password: ", e.target.value);
                setConfirmpassword(e.target.value);
              }}
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
            <button onClick={handleSubmit} className="submitbutton">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
