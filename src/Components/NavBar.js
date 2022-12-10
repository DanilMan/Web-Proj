import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBarInfo from "./NavBarInfo";
import "./NavBar.css";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <header>
        <div className="navcontainer">
          <NavBarInfo />
          <nav>
            <ul className="navbar">
              <li onClick={this.props.topFunction} className="navitem">
                <Link className="active" to="/">
                  Home
                </Link>
              </li>
              <li onClick={this.props.topFunction} className="navitem">
                <Link to="/Thingie">Thingie</Link>
              </li>
              <li className="navitem dropdown">
                <span>Projects</span>
                <div className="center"></div>
                <ul className="dropdown-content">
                  <li onClick={this.props.topFunction}>
                    <Link to="/Projects/My-Website">My Website</Link>
                  </li>
                  <li onClick={this.props.topFunction}>
                    <Link to="/Projects/Al-Cielo">Al Cielo</Link>
                  </li>
                  <li onClick={this.props.topFunction}>
                    <Link to="/Projects/Glowing-Abyss">Glowing Abyss</Link>
                  </li>
                  <div className="dropdown-right-buffer" />
                  <div className="dropdown-left-buffer" />
                  <div className="dropdown-top-buffer" />
                  <div className="dropdown-bottom-buffer" />
                </ul>
              </li>
              <li onClick={this.props.topFunction} className="navitem">
                <Link to="/Experience">Experience</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default NavBar;

/*<ul>
        <div className="li_wrap">
          <li className="me">Daniel Ruderman</li>
          <li>
            <Link to="/Experience">Experience</Link>
          </li>
          <li className="dropdown">
            <Link to="/Projects" className="dropbtn">
              Projects
            </Link>
            <div className="dropdown-content">
              <Link to="/Projects/My-Website">My Website</Link>
              <Link to="/Projects/Al-Cielo">Al Cielo</Link>
              <Link to="/Projects/Glowing-Abyss">Glowing Abyss</Link>
            </div>
          </li>
          <li>
            <Link to="/Thingie">Thingie</Link>
          </li>
          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>
        </div>
      </ul>*/
