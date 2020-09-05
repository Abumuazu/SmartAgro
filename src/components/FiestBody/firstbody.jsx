import React from "react";
import styled from "styled-components";
import "../FiestBody/work.css";
const Dive = styled.div`
  .projected {
    background-color: black;
    min-height: 80vh;
    place-items: center;
    box-shadow: 5px 5px 20px;
    padding: 1rem 5rem 1rem 5rem;
    @media screen and (max-width: 600px) {
      padding: 5rem 1rem 5rem 1rem;
    }
  }
  .FirstContainer {
    padding: 50px;
    min-width: 20vw;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 40px;
    text-align: left;
    font-family: sans-serif;
  }
  .cont {
    border-left: 2px solid #09f755;
    padding: 2px 0px 2px -20px;
    border-radius: 50%;
  }
  h1 {
    color: #09f755;
    text-align: left;
    font-size: 3rem;
    font-weight: 700;
    width: 100%;
  }
  a {
    margin-top: 6rem;
    padding: 1rem;
    text-decoration: none;
    cursor: pointer;
    border: 1px solid #09f755;
    color: #09f755;
    border-radius: 50px;
    width: 65%;
    height: 50px;
    display: inline-block;
    align-self: center;
    background: linear-gradient(to right, #09f755 50%, black 50%);
    @media screen and (max-width: 768px) {
      background: #000000;
      border: 1px solid #09f755;
      color: #09f755;
    }
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.2s ease-out;
    text-align: center;
    font-size: 2rem;
    font-weight: 800;
    line-height: 30px;
    display: block;
  }
  a:hover {
    background-position: left bottom;
    color: black;
  }
  .GetCont {
    position: relative;
    left: 38%;
    width: 30%;
    @media screen and (max-width: 768px) {
      width: 70%;
    }
  }

  .margin {
    padding-top: 3rem;
    text-align: center;
  }
  p {
    color: rgba(255, 255, 255, 0.85);
    margin-top: 2rem;
    font-size: 1.8rem;
    font-weight: 700;
  }
`;
const FirstBody = ({ onRouteChange }) => {
  return (
    <Dive>
      <section className="projected">
        <h1 className="margin">How Smart AGro Work</h1>
        <div className="FirstContainer">
          <div className="cont cont1">
            <h1>Create an Account</h1>
            <p>
              Join our large community of digital farmers funding farms,
              empowering farmers and making a profit. Sign up today using your
              email to get started.
            </p>
          </div>
          <div className="cont cont2">
            {" "}
            <h1>Choose a Farm</h1>
            <p>
              After signing in, choose a farm from the available set of farms,
              select the number of units you would like to fund and proceed to
              make the payments.
            </p>
          </div>
          <div className="cont cont3">
            {" "}
            <h1>Get Updates</h1>
            <p>
              On your personalised dashboard, you would get regular realtime
              updates for farm progress as well as access details of all the
              farms you have funded till date
            </p>
          </div>
          <div className="cont cont4">
            {" "}
            <h1>Get Returns </h1>
            <p>
              Upon harvest, expected returns of proceeds from produce are
              distributed to all subscribers to a farm. This is done within the
              stated tenure period.
            </p>
          </div>
        </div>
        <div className="GetCont">
          <a className="GetStarted" onClick={() => onRouteChange("SignUp")}>
            Get Started
          </a>
        </div>
      </section>
    </Dive>
  );
};

export default FirstBody;
