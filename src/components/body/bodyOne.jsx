import React from "react";
import styled from "styled-components";
const StyleBodyOne = styled.div`
  section {
    min-height: 90vh;
    margin: 0 auto;
    background-color: $ffffff;
    padding: 5rem 2rem 5rem 2rem;
    @media screen and (max-width: 600px) {
      padding: 5rem 2rem 5rem 2rem;
    }
  }
  article {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    background-color: #eee;
    min-height: 54vh;
    @media screen and (max-width: 768px) {
      min-height: 65vh;
    }

    box-shadow: 5px 5px 20px;
    border-radius: 5px;
    padding: 25px;
    cursor: pointer;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: all 0.25s ease-out;
    &:hover {
      transform: scale(1.05);
      transform: translate(1rem);
    }
  }
  .innerContainer {
    width: 75vw;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    @media screen and (max-width: 280px) {
      grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    }
    grid-gap: 35px;
  }
  .article {
    position: absolute;
    top: 9%;
    left: 50%%;
    font-size: 2rem;
    text-align: left;
  }

  input {
    position: relative;
    top: 23rem;
    padding: 1rem;
    cursor: pointer;
    border: 2px solid #333;
    color: #333;
    font-weight: 400;
    border-radius: 3px;
    width: 65%;
    height: 50px;
    display: block;
    align-self: center;
    background: linear-gradient(to right, #333 50%, transparent 50%);
    @media screen and (max-width: 768px) {
      background: transparent;
      border: 1px solid #333;
      color: #333;
      top: 28rem;
    }
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.2s ease-out;
    text-align: center;
    font-size: 16px;
    line-height: 30px;
    display: block;
  }
  input:hover {
    background-position: left bottom;
    color: #09f755;
  }

  h1 {
    color: #333;
    font-weigh: 300;
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }
  h2 {
    color: #000000;
    font-weigh: 500;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  p {
    color: #666;
    margin-bottom: 2rem;
    font-weigh: 300;
    font-size: 2rem;
    text-align: left;
  }
`;

const BodyOne = ({ onRouteChange }) => {
  return (
    <StyleBodyOne>
      {" "}
      <section>
        <div>
          <h2> OUR INVESTMENT PLANS</h2>
          <div>
            <p>
              Guaranteed Returns on Investments. There is increasing demand for
              organic food across the world and due to this, there is a huge
              market for food as the world population increases. For example,
              our CROWDFUNDING cocoa farms offer up to 25% “Return on
              Investments” yearly for 35 years plus starting from the 5th year
              of maturity. Real-time Farm Data Built on the blockchain, we give
              real time farm data and growth report to our Investors on their
              mobile devices. Flexible Investments You can invest in
              generational agricultural products through GENERATIONAL AGRO FARMS
              listed on our platform which guarantees great return on investment
              for 5-50 years using our Realtime Technology. We set up and run
              the Farms while you sit back and earn returns on your investments
              consistently. All our Farms are Insured. This is better than
              leaving that money in a bank with little or no interest to it.
            </p>
            <p>
              Agriculture involves plants and animals breeding and land
              cultivation to offer fiber, food and medicine. It also provides
              other products necessary for life enhancement and sustenance. It
              might interest you to know about commercial plantations also known
              as tree crop farming, industrialized agriculture or plantation
              farming, commercial plantations cover large land areas. Even if
              practiced on a smaller piece of land, the activity has a high
              commercial value. It involves the cultivation of tropical crops
              such as tea, rubber, coffee, coconut, cocoa, grapes, apples,
              spices, oranges, avocado, mangoes and palm oil. Smart Agro
              provides ROI prospect in commercial plantations on a generational
              level, giving you the opportunity to earn yearly profit for
              40years from the 2nd year of investing with an ROI of 15-25% Get a
              stake in high ROI agriculture now
            </p>
          </div>
        </div>
        <div className="container">
          <div className="innerContainer">
            <article>
              <div className="article">
                <h1>Invest in Oil Palm now</h1>
                <p>
                  Oil Palm ROI: 15- 40% (for 40years)
                  <br />
                  <br />
                  Slot Price: N10,000($25.87) <br />
                  <br />
                  Total Amount Needed: ₦2,079,000.00
                </p>
              </div>

              <input
                onClick={() => onRouteChange("myWorks")}
                type="submit"
                value="Get a Slot &#10146;"
              />
            </article>

            <article>
              <div className="article">
                <h1>Invest in Cocoa Now</h1>
                <p>
                  Cocoa ROI: 15- 40% (for 40years)
                  <br />
                  <br />
                  Slot Price: N10,000($25.87) <br />
                  <br />
                  Total Amount Needed: ₦1,965,000.00
                </p>
              </div>

              <input
                onClick={() => onRouteChange("myWorks")}
                type="submit"
                value="Get a Slot &#10146;"
              />
            </article>
          </div>
        </div>
      </section>
    </StyleBodyOne>
  );
};
export default BodyOne;
