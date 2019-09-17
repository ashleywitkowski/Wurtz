import "./Home.css";
import React from "react";
import background from "../../resources/Video/Website-Background.mp4";

const Home = props => {
  return (
    <React.Fragment>
      <div id="video-bg">
        <div className="overlay"></div>
        <video autoPlay loop muted>
          <source src={background} type="video/mp4" />
        </video>
      </div>
      <div className="socials">
        <i class="fab fa-instagram fa-5x fa-fw"></i> &nbsp;
        <i class="fab fa-youtube fa-5x fa-fw"></i> &nbsp;
        <i class="fab fa-linkedin fa-5x fa-fw"></i> &nbsp;
        {/* <i class="fab fa-twitter fa-2x"></i> */}
        {/* <i class="fab fa-facebook fa-2x"></i>
      <i class="fab fa-bandcamp fa-2x"></i>
      <i class="fab fa-soundcloud fa-2x"></i> */}
        {/* <i class="fab fa-spotify fa-5x fa-fw"></i> */}
      </div>
    </React.Fragment>
  );
};

export default Home;
