import React, { Component } from "react";
import "./NavBar.css";
import "./NavBarInfo.css";
import { AiFillInfoCircle } from "react-icons/ai";

class NavBarInfo extends Component {
  state = {};

  render() {
    return (
      <div className="me">
        <div className="info">
          <div>
            <span>rudermandaniel@gmail.com</span>
            <span className="breaker">|</span>
            <span>(626) 773-6601</span>
            <div className="left-buffer" />
            <div className="right-buffer" />
          </div>
        </div>
        <AiFillInfoCircle className="icon" />
      </div>
    );
  }
}

// {this.state.item}

export default NavBarInfo;
