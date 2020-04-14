import "./Music.css";
import React from "react";

class Music extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row" style={{ height: "85%" }}>
          <div className="col-lg-5">
            <div
              className="albumCover"
              style={{
                position: "absolute",
                marginLeft: "15%",
                marginTop: "6%",
              }}
            >
              <img
                src={require("../../resources/Pictures/eventides.PNG")}
                alt="Album cover"
                width="95%"
                height="95%"
                position="absolute"
                // style={{
                //   marginLeft: "20%",
                //   marginTop: "14%",
                // }}
              ></img>
            </div>
            <div
              className="record"
              style={{
                position: "absolute",
                margin: "140px 0 0 200px",
                transition: "ease-in, 2s",
                width: "262px",
                height: "262px",
                borderRadius: "50%",
                backgroundSize: "50% 100%, 100% 50%, 100% 100%",
                zIndex: 1,
              }}
            ></div>
          </div>
          <div
            className="col-lg-1"
            style={{
              marginLeft: "9%",
              marginTop: "4%",
              height: "360px",
              borderLeft: " 5px dotted white",
            }}
          >
            <div id="divider"></div>
          </div>
          <div className="col-lg-6">
            <div id="player" style={{ height: "100%" }}>
              <iframe
                src="https://open.spotify.com/embed/album/3IYqFvTyLjAoWycby3rGLw"
                width="100%"
                height="83%"
                title="spotify player"
                style={{
                  marginTop: "8%",
                  marginLeft: "6%",
                }}
                frameBorder="1"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
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
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Music;
