import React from "react";
import "../SignUp/signUp.scss";

const SignIn = ({ onRouteChange }) => {
  return (
    <div className="form">
      <ul className="tab-group">
        <li className="tab">
          <a href="#login">Log in</a>
        </li>
      </ul>

      <div className="tab-content">
        <div id="signup">
          <form action="/" method="post">
            <div className="field-wrap">
              <input
                placeholder="Email address"
                type="email"
                required
                autocomplete="off"
              ></input>
            </div>

            <div className="field-wrap">
              <input
                placeholder="Password"
                type="password"
                required
                autocomplete="off"
              ></input>
            </div>

            <p className="forgot">
              <a href="#">Forgot Password?</a>
            </p>

            <button
              className="button button-block"
              onClick={() => onRouteChange("home")}
            >
              Log In
            </button>
          </form>
        </div>
        <div id="login"></div>
      </div>
    </div>
  );
};
export default SignIn;
