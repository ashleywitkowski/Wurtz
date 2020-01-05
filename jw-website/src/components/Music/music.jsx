import "./Music.css";
import React from "react";

class Music extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div id="jwProduction">
            {/* <img
              src={require("../../resources/Pictures/jwMusic.jpg")}
              width="400"
              height="400"
              style={{ marginTop: 100, marginLeft: 900 }}
            /> */}
          </div>
          <div id="player">
            <iframe
              src="https://open.spotify.com/embed/album/3IYqFvTyLjAoWycby3rGLw"
              width="500"
              height="400"
              style={{
                display: "relative",
                // justifyContent: "center",
                // alignItems: "center"
                marginLeft: 500,
                marginTop: "auto"
              }}
              frameBorder="1"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
          <div id="followButton">
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
          </div>{" "}
        </div>
        <div id="musicSocials">
          <a
            href="https://wurtz.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-bandcamp fa-1x"></i>
          </a>
          <a
            href="https://soundcloud.com/justin-wurtz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-soundcloud fa-1x"></i>
          </a>
          <a
            href="https://open.spotify.com/artist/4fyGp5bRFqFh9DAKYg2fb4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-spotify fa-1x fa-fw"></i>
          </a>
        </div>{" "}
      </React.Fragment>
    );
  }
}

export default Music;
