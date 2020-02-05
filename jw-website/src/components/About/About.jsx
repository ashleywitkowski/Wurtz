import "./About.css";
import React, { Component, useState } from "react";
import { Collapse } from "react-bootstrap/Collapse";
import { Button } from "react-bootstrap";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoGear: "none",
      audioGear: "none"
    };
  }
  updateVideoGear = () => {
    this.setState({
      videoGear: this.state.videoGear === "block" ? "none" : "block"
    });
  };
  updateAudioGear = () => {
    this.setState({
      audioGear: this.state.audioGear === "block" ? "none" : "block"
    });
  };

  render() {
    console.log(this.state.audioGear);
    return (
      <div className="row">
        <div
          className="col-lg-5"
          style={{
            marginRight: "35px"
            // verticalAlign: "top"
          }}
        >
          <div className="row">
            <div className="jwIcon">
              <h1 id="jwHeader">Justin Wurtz</h1>
            </div>
          </div>
          <div className="row">
            <img
              id="jwImg"
              src={require("../../resources/Pictures/jwPhoto.jpg")}
              width="70%"
              height="60%"
            ></img>
          </div>
          <div className="row">
            <p id="pgraph">
              Graduate of New England Institute of Technology with a Bachelor’s
              Degree in Digital Media Production. Experience working as a
              director, editor, camera operator, and replay operator for
              multiple types of video projects, including live broadcast events,
              short films, news pieces, documentaries, and corporate videos.
              Additional experience in music production including recording,
              mixing, and mastering in live and studio settings.
            </p>
          </div>
        </div>
        <div className="col-lg-6" style={{ marginLeft: "35px" }}>
          <div className="row">
            <h1 id="audio">Audio</h1>
          </div>
          <div className="row">
            <p id="audioP">
              My highlighted works include producing, mixing, and mastering
              various genres of music for local artists. Experience includes
              knowledge of multiple DAWs, analog boards, digital boards,
              outboard gear, patch bays, and recording studio/live concert
              experiences.
            </p>
          </div>
          <div className="row">
            <h1 id="audioGear">Gear</h1>
            <span
              onClick={this.updateAudioGear}
              style={{
                color: "white",
                transform: `rotate(${
                  this.state.audioGear === "block" ? "90" : "0"
                }deg)`,
                height: "30px",
                marginTop: "5px",
                marginLeft: "10px"
              }}
            >
              <i className={`fa fa-chevron-right`} />
            </span>
          </div>
          <div
            className="audGear"
            style={{
              display: this.state.audioGear,
              fontFamily: "BroadwayFlat",
              color: "white",
              fontSize: "16px"
            }}
          >
            <div className="row">
              <div className="col-lg-4">
                <u
                  style={{
                    fontSize: "20px"
                  }}
                >
                  Microphones
                </u>
                <ul style={{ paddingLeft: "12px" }}>
                  <li>SM57 x2</li>
                  <li>Shure Beta 52a</li>
                  <li>Rhode M5 Matched Pair</li>
                  <li>Sennhesier e604 x3</li>
                  <li>AT 3035 Matched Pair</li>
                  <li>AKG D112</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <u
                  style={{
                    fontSize: "20px"
                  }}
                >
                  Hardware
                </u>
                <ul
                  style={{
                    paddingLeft: "12px"
                  }}
                >
                  <li>Focusrite Scarlett 18i8</li>
                  <li>Macbook Pro 2015</li>
                  <li>Event Tuned Referenced Matched Speakers</li>
                  <li>Beyer Dynamic DT770 Headphones</li>
                  <li>Akai MPK 1 Mini MIDI Keyboard</li>
                  <li>Maschine Mikro ​</li>
                  <li>Yamaha p-120 Keyboard</li>
                  <li>Ludwig Element Lacquer Drum kit</li>
                </ul>
              </div>

              <div className="col-lg-4">
                <u
                  style={{
                    fontSize: "20px"
                  }}
                >
                  Software
                </u>
                <ul style={{ paddingLeft: "12px" }}>
                  <li>Pro Tools</li>
                  <li>Logic Pro X</li>
                  <li>Native Instruments Komplete 11</li>
                  <li>Waves Gold Bundle</li>
                </ul>
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
          <div className="row">
            <h1 id="video">Video</h1>
          </div>
          <div className="row">
            <p id="videoP">
              My highlighted works include working as a director, replay
              operator, editor, and camera operator for multiple types of video
              projects. These include live broadcast events, short films,
              documentaries, newscasts and freelance videos. Experience working
              with the New York Mets, ABC 6 News, the Pawtucket Red Sox,
              Providence College Athletics, and Pack Network, for various
              televised broadcast events (ESPN3, FOX Sports 1, NESN, etc)
            </p>
          </div>
          <div
            className="row"
            style={{
              color: "white"
            }}
          >
            {/* <div> */}
            <div className="row">
              <h1 id="videoGear">Gear</h1>
              <span
                onClick={this.updateVideoGear}
                style={{
                  transform: `rotate(${
                    this.state.videoGear === "block" ? "90" : "0"
                  }deg)`,
                  marginBottom: "40px",
                  height: "30px"
                }}
              >
                <i className={`fa fa-chevron-right`} />
              </span>
            </div>
            {/* </div> */}
            <div className="row">
              <div
                className="vidGear"
                style={{
                  display: this.state.videoGear,
                  fontFamily: "BroadwayFlat",
                  color: "white",
                  fontSize: "16px"
                }}
              >
                <div id="camList">
                  <u
                    style={{
                      fontSize: "20px"
                    }}
                  >
                    <br></br>
                    Camera
                  </u>
                  <ul>
                    <li>Lumix G85</li>
                    <li>Canon EOS 70D</li>
                    <li>Yelangu Gimbal</li>
                    <li>Rode VideoMic GO Light</li>
                    <li>Tripod x2</li>
                    <li>DJI Mavic Air</li>
                  </ul>
                </div>
                <br></br>
                <div id="lensesList">
                  <u
                    style={{
                      fontSize: "20px",
                      marginLeft: "25px"
                    }}
                  >
                    Lenses
                  </u>
                  <ul>
                    <li>Canon EFS 55-250mm​</li>
                    <li>Canon EFS 18-55mm</li>
                    <li>Canon EF 75-300</li>
                    <li>Canon Macro Lens EF 50mm</li>
                    <li>Canon EF 50mm</li>
                    <li>Canon EF 28-105mm</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
