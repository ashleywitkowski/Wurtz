import "./Music.css";
import React from "react";
import { withRouter } from "react-router-dom";

class Music extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="musicRow">
          <div
            className="albumCover"

            // style={{
            //   display: "inline",
            //   overflow: "hidden",
            //   width: "500px",
            //   // height: "415px",
            //   borderRadius: "10px",
            //   boxShadow: " 0 6px #99907e",
            //   marginLeft: 30,
            //   marginTop: 70
            // }}
          >
            <img
              src={require("../../resources/Pictures/eventides.PNG")}
              width="500px"
              height="415px"
              position="absolute"
              style={{
                marginLeft: 80,
                marginTop: 70
              }}
            ></img>
          </div>
          <div
            className="record"
            style={{
              position: "absolute",
              margin: "140px 0 0 270px",
              transition: "ease-in, 2s",
              width: "262px",
              height: "262px",
              borderRadius: "50%",
              backgroundSize: "50% 100%, 100% 50%, 100% 100%",
              zIndex: 1
            }}
          ></div>
          {/* <img
              src={require("../../resources/Pictures/jwMusic.jpg")}
              width="80%"
              height="90%"
              style={{ marginLeft: 125, marginTop: 25 }}
            /> */}

          <div id="divider"></div>
          <div id="player">
            <iframe
              src="https://open.spotify.com/embed/album/3IYqFvTyLjAoWycby3rGLw"
              width="510"
              height="415"
              style={{
                marginLeft: 80,
                marginRight: 80,
                marginTop: 70
              }}
              frameBorder="1"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
        {/* <div id="followButton">
          <iframe
            src="https://open.spotify.com/follow/1/?uri=spotify:artist:4fyGp5bRFqFh9DAKYg2fb4&size=detail&theme=light&show-count=0"
            width="300"
            height="100"
            style={{
              position: "relative",
              float: "top",
              marginRight: 220
            }}
            scrolling="no"
            frameBorder="0"
            allowtransparency="true"
          ></iframe>
        </div>{" "} */}
        <div id="musicSocials">
          <a
            href="https://wurtz.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-bandcamp fa-1x"></i>
          </a>
          <a
            href="https://soundcloud.com/justin-wurtz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-soundcloud fa-1x"></i>
          </a>
          <a
            href="https://open.spotify.com/artist/4fyGp5bRFqFh9DAKYg2fb4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-spotify fa-1x fa-fw"></i>
          </a>
        </div>{" "}
      </React.Fragment>
    );
  }
}

export default Music;
