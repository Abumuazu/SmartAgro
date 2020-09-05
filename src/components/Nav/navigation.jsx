import React from "react";
import styled from "styled-components";

import Burger from "./burger";

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  background-color: #000000;
  cursor: pointer;

  .title {
    text-transform: uppercase;
    font-family: "gilroy", sans-serif;
    font-weight: bold;
    letter-spacing: 5px;
    position: absolute;
    color: transparent;
    padding: 1.5rem 0;
  }

  .title::before {
    content: "Welcome To Smart Agro";
    position: absolute;
    top: 0;
    left: 3rem;
    width: 100%;
    height: 100%;
    color: #09f755;
    overflow: hidden;
    border-right: 1px solid #000;
    white-space: nowrap;
    animation: type 5s infinite;
    padding: 1.5rem 0;
  }

  @keyframes type {
    0% {
      width: 0;
    }

    50% {
      width: 100%;
    }

    100% {
      width: 0;
    }
  }
`;

const Navigation = ({ onRouteChange }) => {
  return (
    <Nav>
      <div className="logo">
        <div className="title">Welcome To Smart Agro</div>
      </div>
      <Burger onRouteChange={onRouteChange} />
    </Nav>
  );
};

export default Navigation;
