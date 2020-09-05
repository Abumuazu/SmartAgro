import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  z-index: 2;
  list-style: none;
  display: flex;
  flex-row: row-nowrap;
  background-color: #000000;
  color: #09f755;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #f9f9f9;
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(100%)")};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    color: #282c34;
    transition: transform 0.3s ease-in-out;
  }
  @media screen and (max-width: 350px) {
    height: 130vh;
  }

  li {
    padding: 10px 10px;
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
  .Sign {
    border-bottom: 4px solid #09f755;
  }
`;

const BoxWrapper = ({ open, onRouteChange }) => {
  return (
    <Ul open={open}>
      <li>
        <a onClick={() => onRouteChange("home")}>&#127969; Home</a>
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
    </Ul>
  );
};
export default BoxWrapper;
{
  /* <input
  onClick={() => onRouteChange("home")}
  type="submit"
  value="Home"
/> */
}
{
  /* <Section>
  <nav className="bigContainer">
    <div className="container-wrapper">
      <div className="box">
        <img className="mobile-logo" src={github} alt="danladi lodo" />
        <div className=" content ">
          
          <div className="contentBox">
            
               
            <a
              className="resume"
              href="#img/adeola-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume 📗
                </a>
          </div>

          <div>
            <h4 className="heading-4">navigation</h4>
           
          </div>
        </div>
      </div>
    </div>
  </nav>
  <nav className="nav-sub">
    <picture>
      <source media="(max-width:37.5em)" srcset={github} />
      <img src={github} alt="adeola logo" />
    </picture>
  </nav>
</Section> */
}
