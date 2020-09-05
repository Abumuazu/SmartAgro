import React from "react";
import logo from "../logo/myLogo.jpg";
import "../logo/logo.scss";

const Logoo = () => {
  return (
    <div className="logo-container">
      <img
        src={logo}
        alt="logo"
        className="logo"
        style={{ height: 100, width: 100 }}
      />
    </div>
  );
};

export default Logoo;

/*
<div>
  <div className="cursor"></div>
  <div className="nav-container">
    <div className="nav-icon">
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  // nav main  
   */

// nav
// .nav-container {
//     position: absolute;
//     padding: 4rem;
//     top: 0;
//     left: 0;
//     .nav-icon {
//         background-color: #000;
//         position: absolute;
//         right: 4rem;
//         top: 2.5rem;
//         z-index: 10;
//         width: 6rem;
//         height: 6rem;
//         border-radius: 50%;
//         cursor: pointer;
//         position: fixed;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;

//         .bar1, .bar2, .bar3 {
//             width: 20px;
//             height: 2px;
//             margin: 4px 0;
//             transition: 0.4s;
//             background-color: $white;
//             border-radius: 1rem;
//         }
//         .bar2 {
//             width: 30px;
//             transform-origin: right;
//         }
//     }

//
//         }

//                 }

//                     }
//                 }
//             }
//         }
//     }

//     .nav-sub {
//         position: absolute;
//     }
// }

// animation
// .nav-anim .bar1 {
//     transform: rotate(-45deg) translate(-6px, 7px);
// }

// .nav-anim .bar2 {
//     transform: translateX(200%);
//     opacity: 0;
// }

// .nav-anim .bar3 {
//     transform: rotate(45deg) translate(-7px, -8px);
// }
