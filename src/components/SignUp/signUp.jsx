import React from "react";
import "../SignUp/signUp.scss";

const SignUp = ({ onRouteChange }) => {
  return (
    <div className="form">
      <ul className="tab-group">
        <li className="tab active">
          <a href="#signup">Sign Up</a>
        </li>
      </ul>

      <div className="tab-content">
        <div id="signup">
          <h1>Sign Up for Free</h1>

          <form action="/" method="post">
            <div className="top-row">
              <div className="field-wrap">
                <input
                  placeholder="First Name"
                  type="text"
                  required
                  autocomplete="off"
                ></input>
              </div>

              <div className="field-wrap">
                <input
                  placeholder="Last Name"
                  type="text"
                  required
                  autocomplete="off"
                ></input>
              </div>
            </div>

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
                placeholder="Set a Password"
                type="password"
                required
                autocomplete="off"
              ></input>
            </div>

            <input
              onClick={() => onRouteChange("home")}
              type="submit"
              value="Get Started"
              className="button button-block"
            />
          </form>
        </div>

        <div id="login"></div>
      </div>
    </div>
  );
};
export default SignUp;
