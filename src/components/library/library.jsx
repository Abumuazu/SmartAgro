import React from "react";
import styled from "styled-components";
const StyledLibrary = styled.ul`
  min-height: 100vh;
  position: relative;
  padding: 4rem 3rem;
  -moz-osx-font-smoothing: grayscale;

  ul {
    box-sizing: border-box;
    overflow-y: auto;
    max-height: 100vh;
    width: 60vw;
    @media (max-width: 768px) {
      width: 85vw;
    }
    scroll-behavior: auto;
    background-color: #eee;
    padding: 4rem;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 5px 5px 5px #555;
    display: flex;
    flex-direction: column;
  }
  li {
    list-style: none;
    border-bottom: 1px solid grey;
    margin-bottom: 8rem;
  }
  a {
    text-decoration: none;
    color: #333;
    // font-family: $tertiary-font;
  }
  .date {
    color: #ggg;
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
    font-size: 3rem;
  }
  p {
    color: #ggg;
    margin-bottom: 1.3rem;
    font-size: 2rem;
    text-align: left;
  }
  h5 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
    color: grey;
  }
`;

const Library = () => {
  return (
    <StyledLibrary>
      <ul>
        <div className="head">
          <h5>/Library</h5>
        </div>
        <li>
          <div className="box ">
            <articles>
              <a
                href="https://olaolu.dev/shelf/web-performance-the-big-picture/"
                target="_blank"
              >
                <div className="date">
                  <h4>by Adeneye Abiodun David </h4>
                </div>

                <h1>Best Practices With React Hooks</h1>

                <p>
                  {" "}
                  React Hooks are a new addition in React 16.8 that let you use
                  state and other React features without writing a class
                  component. In other words, Hooks are functions that let you
                  “hook into” React state and
                </p>
              </a>
            </articles>
          </div>
        </li>
        <li>
          <div className="box ">
            <articles>
              <a
                href="https://olaolu.dev/shelf/web-performance-the-problems/"
                target="_blank"
              >
                <div className="date">
                  <h4>by Olaolu </h4>
                </div>

                <h1>Web Performance: The problems</h1>

                <p>
                  {" "}
                  No doubt, there's a ton of reason why websites are slow, some
                  of which are case specific, i like to look at this from two
                  perspective...
                </p>
              </a>
            </articles>
          </div>
        </li>
        <li>
          <div className="box ">
            <articles>
              <a
                href="https://olaolu.dev/shelf/web-performance-the-big-picture/"
                target="_blank"
              >
                <div className="date">
                  <h4>by Olaolu </h4>
                </div>

                <h1>Web Performance: The Big Picture</h1>

                <p>
                  {" "}
                  As the web platfform continues to evolve very quicky, new
                  technologies and devlopment spring up even more rapidly, it
                  has become more alarming, how many slow sites are on the web
                  today...
                </p>
              </a>
            </articles>
          </div>
        </li>
      </ul>
    </StyledLibrary>
  );
};
export default Library;
