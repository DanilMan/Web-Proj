import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Block.css";

// Probably have to refactor this to a class in order to get a state to
// handle the image for mouse events
class Block extends Component {
  // inText, Dest, IMG, ALT, topFunction
  state = {
    img_src: this.props.IMG,
  };
  constructor(props) {
    super(props);
    this.mEnter = this.mEnter.bind(this);
    this.mLeave = this.mLeave.bind(this);
  }

  mEnter() {
    //console.log("Enter");
    let img = this.props.IMG;
    img = img.slice(0, -4);
    img += "-Blur.png";
    this.setState({
      img_src: img,
    });
  }

  mLeave() {
    //console.log("left");
    this.setState({
      img_src: this.props.IMG,
    });
  }

  render() {
    return (
      <Link
        onClick={this.props.topFunction}
        onMouseEnter={this.mEnter}
        onMouseLeave={this.mLeave}
        className="box"
        to={this.props.Dest}
      >
        <img className="b-img" src={this.state.img_src} alt={this.props.ALT} />
        <h4 className="title">{this.props.inText}</h4>
      </Link>
    );
  }
}

export default Block;
