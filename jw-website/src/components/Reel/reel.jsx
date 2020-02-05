import "./Reel.css";
import React, { Component } from "react";
import { filmImg } from "../../resources/Pictures/film.jpg";

class Reel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="film"
        style={{
          backgroundImage: `url(require("../../resources/Pictures/film.jpg"))`,
          width: "50%",
          height: "70%"
        }}
      >
        <div className="reel-vid">
          <iframe
            width="855"
            height="369"
            src="https://www.youtube.com/embed/TC7csvH-Qsw?autoplay=1"
            frameBorder="0"
            // allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Reel;
