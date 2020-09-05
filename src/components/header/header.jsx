import React from "react";
import styled from "styled-components";
import "../header/header.css";

const StyleHeader = styled.div`
  header {
    height: 100vh;
  }
  .button {
    margin-top: 7rem;
    width: 40%;
    @media screen and (max-width: 768px) {
      position: relative;
      left: 15%;
      top: 15%;
      width: 80%;
    }
  }
  .HeaderContainer {
    min-width: 50vw;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    grid-gap: 20px;
  }
  .box {
    display: flex;
    flex-direction: column;
  }
  .box1 {
    font-size: 2rem;
    text-align: left;
    position: absolute;
    top: 30%;
    left: 9%;
    @media screen and (max-width: 768px) {
      position: absolute;
      text-align: center;
    }
  }
  a {
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
  .button1 {
    margin-top: 4rem;
    width: 40%;
    @media screen and (max-width: 768px) {
      width: 70%;
    }
  }
  h1 {
    font-size: 4rem;
    font-wieght: 1200;
    color: rgba(255, 255, 255, 0.85);
    @media screen and (max-width: 780px) {
      font-size: 2.5rem;
    }
    @media screen and (max-width: 280px) {
      font-size: 2rem;
    }
  }
  p {
    color: rgba(255, 255, 255, 0.85);
    font-wieght: 1100;
    font-size: 2rem;
    margin-top: 3rem;
    @media screen and (max-width: 900px) {
      font-size: 2rem;
    }
  }
  .dot {
    color: #ffffff;
  }
  .more {
    font-size: 2rem;
    color: #eee;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  .one {
    color: #09f755;
    text-align: left;
  }
  .Two {
    text-align: left;
  }
`;

const Header = ({ onRouteChange }) => {
  return (
    <StyleHeader>
      <header className="header">
        <div className="HeaderContainer">
          <div className="box box1">
            <span>
              {" "}
              <div className="para">
                <h1 className="Two">
                  <span>
                    <span className="one">We</span> Do Set Up,{" "}
                    <span className="one">We</span> Run The Farm
                    <br /> You Invest, You Earn<span className="dot">.</span>
                  </span>
                </h1>
                <p>
                  Smart Agro is a generational agricultural investment platform
                  where we bring together <br /> people to co-invest in long
                  term agriculture and get returns on investment yearly after
                  every harvest.
                </p>
              </div>
            </span>
            <div className="button1">
              <a onClick={() => onRouteChange("SignUp")}>Fund a farmer</a>
            </div>
          </div>

          <div className="box box2"></div>
        </div>
      </header>
    </StyleHeader>
  );
};
export default Header;

{
  /* <div className="box box2">
  <div className="pictureContainer">
    <img src={Abu1} alt="myPhoto"></img>
  </div>
  <p className="more"> To know more about me</p>
  <a
    href="https://drive.google.com/file/d/1QjT693auRmwp9gssos9dLE7QoOr0J8Pj/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
  >
    Resume
            </a>
</div> */
}
