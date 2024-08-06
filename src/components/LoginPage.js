import React from "react";
import { Link } from "react-router-dom";
import { signInWithGoogleRedirect } from "../firebase/utils";

import facebookIcon from "../facebook-icon.svg";
import googleIcon from "../google-icon.svg";
import "./LoginPage.css";

function LoginPage() {
  const googleStyle = {
    backgroundImage: `url(${googleIcon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "30px center",
    backgroundSize: "20px 20px",
  };

  const facebookStyle = {
    backgroundImage: `url(${facebookIcon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "20px center",
    backgroundSize: "20px 20px",
  };
  return (
    <div className="login-container">
      <div>
        <h2>Login</h2>
        <p>
          Doesn't have an account yet? <Link to={"/SignUp"}>Sign Up</Link>
        </p>
      </div>
      <form>
        <div>
          <label>Email Address</label>
          <input type="email" placeholder="you@example.com" />
        </div>

        <div>
          <label>Password</label>
          <input type="password" placeholder="Enter 6 character or more" />
        </div>
      </form>

      <button className="login">LOGIN</button>

      <div className="other-login">
        <button
          onClick={signInWithGoogleRedirect}
          className="google"
          style={googleStyle}
        >
          Google
        </button>
        <button className="facebook" style={facebookStyle}>
          Facebook
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
