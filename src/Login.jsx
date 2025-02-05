import logo from "./assets/logo.jpg";
import photo from "./assets/photo.png";
import InputField from "./components/InputField";
import "./Styles/Login.css"

function login() {
  return (
    <div className="login-page">
      <div className="inner">
        <img src={photo} alt="blog photo" className="image" />
        <h1 className="login">LOG IN</h1>
        <form action="#" className="login-form">
          <InputField type="email" placeholder="Enter your email address" />
          <InputField type="password" placeholder="Enter your password" />

          <div className="forgot-password">
            <a href="https://www.google.co.in/" className="forgot-pass-link">
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
              Sign in with Google
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
    </div>
  );
}

export default login;
