import React, { Component } from "react";
import Block from "../Components/Block";
import "./Page.css";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="Me_Parent">
          <h1>Daniel Ruderman</h1>
          {/* <img
            className="Me_Pic"
            src="Me_Temp.png"
            alt="Myself (Daniel Ruderman)."
          /> */}
        </div>
        <h2>Explore and Learn About My Progress</h2>
        <h3>This is my website please take a look around</h3>
        <div className="flex-container">
          <Block
            inText={"My Website"}
            Dest={"Projects/My-Website"}
            IMG={"Website.png"}
            ALT={"My website workflow."}
            topFunction={this.props.topFunction}
          />
          <Block
            inText={"Al Cielo"}
            Dest={"Projects/Al-Cielo"}
            IMG={"Al-Cielo.png"}
            ALT={"Al Cielo gameplay."}
            topFunction={this.props.topFunction}
          />
          <Block
            inText={"Glowing Abyss"}
            Dest={"Projects/Glowing-Abyss"}
            IMG={"Glowing-Abyss.png"}
            ALT={"Glowing Abyss gameplay."}
            topFunction={this.props.topFunction}
          />
        </div>
      </div>
    );
  }
}

export default Home;
