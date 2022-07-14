import React from "react";
import { Link } from "react-router-dom";
import "./Block.css";

// Probably have to refactor this to a class in order to get a state to
// handle the image for mouse events
function Block({ inText, Dest, IMG, ALT, topFunction }) {
  return (
    <Link
      onClick={topFunction}
      onMouseEnter={mEnter}
      onMouseLeave={mLeft}
      className="box"
      to={Dest}
    >
      <img className="b-img" src={IMG} alt={ALT} />
      <h4 className="title">{inText}</h4>
    </Link>
  );
}

function mEnter() {
  //console.log("Enter");
}

function mLeft() {
  //console.log("left");
}

export default Block;
