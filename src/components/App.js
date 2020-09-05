import React, { Component } from "react";
import Navigation from "./Nav/navigation";
import Header from "./header/header";
import Firstbody from "./FiestBody/firstbody";
import BodyOne from "./body/bodyOne";
import MyWorks from "./myWorks/myWorks";
import Footer from "./footer/footer";
import Particles from "react-particles-js";
import "../components/App.css";
import Songs from "./songs/songs";
import SignIn from "./SignUp/SignIn";
import SignUp from "./SignUp/signUp";

// import Logoo from "./components/logo/logo";
// import "../components/app.scss"
const ParticlesOpton = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 300,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "home",
    };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };
  render() {
    const { route } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={ParticlesOpton} />
        <Navigation onRouteChange={this.onRouteChange} />
        {route === "home" ? (
          <div>
            <Header onRouteChange={this.onRouteChange} />
            <Firstbody onRouteChange={this.onRouteChange} />
            <BodyOne onRouteChange={this.onRouteChange} />
          </div>
        ) : route === "myWorks" ? (
          <div>
            <MyWorks />
          </div>
        ) : route === "SignIn" ? (
          <div>
            <SignIn onRouteChange={this.onRouteChange} />
          </div>
        ) : route === "SignUp" ? (
          <div>
            <SignUp onRouteChange={this.onRouteChange} />
          </div>
        ) : (
          <div>
            <Songs />
          </div>
        )}
        ;
        <Footer onRouteChange={this.onRouteChange} />
      </div>
    );
  }
}

export default App;
