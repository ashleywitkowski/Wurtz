import "./Reel.css";
import React, { Component } from "react";

class Reel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      tID: ""
    };
    this.getID = this.getID.bind(this);
  }
  getID() {
    this.setState({ tID: "theatre-anim", open: true });
  }

  render() {
    return (
      <div onClick={this.getID} className={this.state.tID} id="theatre">
        <div className="reel-vid" style={{ width: "100%", height: "100%" }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/TC7csvH-Qsw?autoplay=1"
            frameBorder="0"
            // allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>
        <div id="curtain-left"></div>
        <div id="curtain-right"></div>
      </div>
    );
  }
}

export default Reel;
