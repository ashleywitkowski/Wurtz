import "./Reel.css";
import React from "react";

const Reel = props => {
  return (
    <React.Fragment>
      <div className="reel-vid">
        <iframe
          width="900px"
          height="600px"
          src="https://www.youtube.com/embed/TC7csvH-Qsw"
          frameborder="0"
          allow="autoplay"
          allowfullscreen
        ></iframe>
      </div>
    </React.Fragment>
  );
};

export default Reel;
