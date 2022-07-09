import React, { Component } from "react";
import "./Page.css";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <svg viewBox="0, 0, 500, 50">
          <text y="50">Daniel Ruderman</text>
        </svg>
        <h1>Daniel Ruderman</h1>

        <h2>Explore and Learn About My Progress</h2>
        <h3>This is my website please take a look around</h3>
      </div>
    );
  }
}

export default Home;
