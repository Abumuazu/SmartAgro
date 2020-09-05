import React from "react";
import styled from "styled-components";
import github from "../images/github.svg";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
const Dive = styled.div`
  .Footer {
    background-color: black;
    min-height: 100vh;
    box-shadow: 5px 5px 20px;
    padding: 50px;
    @media screen and (max-width: 600px) {
      padding: 20px;
    }
    marging-top: 3rem;
  }
  .FooterContainer {
    padding: 50px;
    min-width: 20vw;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 40px;
    text-align: left;
    font-family: sans-serif;
  }
  .Footercont2,
  .Footercont3. .Footercont4 {
    border-left: 1px solid grey;
    padding: 2px 0px 2px -20px;
    padding-left: 20px;
  }
  .Footercont {
    text-align: left;
  }
  h1 {
    color: #09f755;
    text-align: left;
    font-size: 2.6rem;
    font-weight: 700;
    width: 100%;
  }

  p {
    color: rgba(255, 255, 255, 0.85);
    margin-top: 2rem;
    font-size: 1.6rem;
    font-weight: 700;
  }
  .footerBox {
    display: flex;
    flex-direction: column;
    color: #797575;
    padding: 25px;
    cursor: pointer;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
  }
  .footerbBox3 {
    position: relative;
    top: 10%;
    left: 5%;
    font-size: 5rem;
  }
  .social {
    text-transform: uppercase;
    font-size: 3rem;
    text-decoration: none;
    color: #09f755;
    letter-spacing: -1px;
    transition: all 0.2s ease-in-out;
  }
  .socialLinksBox {
    display: flex;
    align-items: center;
    background-color: #1ab188;
  }
  .socialLinks {
    border-radius: 100px;
    width: 80%;
  }
  img {
    margin-right: 2rem;
    height: 2rem;
    filter: brightness(1%);
    transition: all 0.3s ease-in-out;
  }
  img:hover {
    transform: scale(2);
  }
  li {
    list-style: none;
  }
  a {
    text-transform: uppercase;
    font-size: 2rem;
    text-decoration: none;
    // font-family: $tertiary-font;
    letter-spacing: -1px;
    transition: all 0.2s ease-in-out;
  }
  a:hover {
    letter-spacing: 3px;
  }
`;
const Footer = ({ onRouteChange }) => {
  return (
    <Dive>
      <section className="Footer">
        <div className="FooterContainer">
          <div className="Footercont Footercont1">
            <h1>Our Company</h1>
            <p>
              Smart Agro is an agricultural technology company that democratizes
              agricultural participation by allowing you to easily fund a farm
              in the financial capacity of your choosing while we engage
              smallholder farmers with our input, agricultural expertise,
              process automation and machinery to make sure our promise to
              deliver profitable returns to you are safely met.
            </p>
          </div>
          <div className="Footercont Footercont2">
            {" "}
            <h1>Contact Us </h1>
            <ul className="Contact">
              <li>
                <a className="Tel" href="tel:+23408132369296">
                  tel:+2340-813-236-9296
                </a>
              </li>
              <li>
                <a href="#">info@smartagro.com</a>
              </li>
            </ul>
            <div className="footerBox footerbBox3">
              <h1 className="heading-4">Connect with us</h1>
              <div className="socialLinks">
                <div className="socialLinksBox">
                  <a className="social" href="#">
                    <img src={github} alt="github" />
                  </a>
                  <a className="social" href="#">
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a className="social" href="#">
                    <img src={linkedin} alt="linkedin" />
                  </a>
                  <a className="social" href="#">
                    <img src={instagram} alt="instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="Footercont Footercont3">
            {" "}
            <h1>Some Quick Links </h1>
            <div>
              <li>
                <a onChange={() => onRouteChange("home")}>&#127969; Home</a>
              </li>
              <li>
                <a onClick={() => onRouteChange("myWorks")}> 📗 About Us</a>
              </li>
              <li>
                <a onClick={() => onRouteChange("SignIn")}> SigIn</a>
              </li>
              <li>
                <div className="Sign">
                  <a onClick={() => onRouteChange("SignUp")}> SigUp</a>
                </div>
              </li>
            </div>
          </div>
          <div className="Footercont Footercont4">
            {" "}
            <h1>Get Returns </h1>
            <p>
              Upon harvest, expected returns of proceeds from produce are
              distributed to all subscribers to a farm. This is done within the
              stated tenure period.
            </p>
          </div>
        </div>
      </section>
    </Dive>
  );
};

export default Footer;
