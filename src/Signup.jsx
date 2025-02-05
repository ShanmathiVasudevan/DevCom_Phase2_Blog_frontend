import InputField from "./components/InputField";
import "./signupstyle.css";
import logo from "./assets/logo.jpg";

function Signup() {
  return (
    <div className="signup">
      <div className="welcome">
        <h3>Sign Up</h3>
        <p>
          Already have an account?{" "}
          <a href="#" className="login">
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
          <label className="input-label">Choose a password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            className="input-field"
            required
          />
          <div className="submitbutton">
            <button className="submitbutton">Sign Up</button>
          </div>
        </div>
      </form>
      <p className="or">or</p>

      <div className="google-button">
        <button className="google-button">
          <img src={logo} alt="logo" className="google-logo" />
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default Signup;
