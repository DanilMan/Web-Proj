import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <header>
        <div className="navcontainer">
          <div className="me">
            <span>rudermandaniel@gmail.com</span>
            <span className="breaker">|</span>
            <span>(626) 773-6601</span>
          </div>
          <nav>
            <ul className="navbar">
              <li onClick={topFunction} className="navitem">
                <Link className="active" to="/">
                  Home
                </Link>
              </li>
              <li onClick={topFunction} className="navitem">
                <Link to="/Thingie">Thingie</Link>
              </li>
              <li className="navitem dropdown">
                <Link onClick={topFunction} to="/Projects" className="dropbtn">
                  Projects
                </Link>
                <div className="center"></div>
                <ul className="dropdown-content">
                  <li onClick={topFunction}>
                    <Link to="/Projects/This-Website">This Website</Link>
                  </li>
                  <li onClick={topFunction}>
                    <Link to="/Projects/Al-Cielo">Al Cielo</Link>
                  </li>
                  <li onClick={topFunction}>
                    <Link to="/Projects/Glowing-Abyss">Glowing Abyss</Link>
                  </li>
                  <div className="dropdown-right-buffer" />
                  <div className="dropdown-left-buffer" />
                  <div className="dropdown-top-buffer" />
                  <div className="dropdown-bottom-buffer" />
                </ul>
              </li>
              <li onClick={topFunction} className="navitem">
                <Link to="/Experience">Experience</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
              <Link to="/Projects/This-Website">This Website</Link>
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
