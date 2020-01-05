import "./About.css";
import React, { Component, useState } from "react";
import { Collapse } from "react-bootstrap/Collapse";
import { Button } from "react-bootstrap";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoGear: false,
      audioGear: false
    };
  }
  updateVideoGear = () => {
    this.setState({ videoGear: !this.state.videoGear });
  };
  updateAudioGear = () => {
    this.setState({ audioGear: !this.state.audioGear });
  };

  render() {
    return (
      <div className="jwIcon">
        <h1 id="jwHeader">Justin Wurtz</h1>
        {/* <img
          src={require("../../resources/Pictures/jwAbout.jpg")}
          width="300"
          height="300"
          // style={{ marginTop: 100, marginLeft: 900 }}
        /> */}
        <div className="innerBox">
          <p>
            Graduate of New England Institute of Technology with a Bachelor’s
            Degree in Digital Media Production. Experience working as a
            director, editor, camera operator, and replay operator for multiple
            types of video projects, including live broadcast events, short
            films, news pieces, documentaries, and corporate videos. Additional
            experience in music production including recording, mixing, and
            mastering in live and studio settings.
          </p>
          <h1 id="audio">Audio</h1>
          <p>
            My highlighted works include producing, mixing, and mastering
            various genres of music for local artists. Experience includes
            knowledge of multiple DAWs, analog boards, digital boards, outboard
            gear, patch bays, and recording studio/live concert experiences.
          </p>
          <h2 id="audioGear1"></h2>
          <Button
            id="audio"
            className="fa fa-chevron-right rotate"
            onClick={this.updateAudioGear}
            aria-controls="example-collapse-text"
            //aria-expanded={this.state.audioGear}
          >
            Gear
          </Button>
          {/* <Collapse in={this.UpdateAudioGear}> */}
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
          {/* </Collapse> */}
          {/* <updateAudioGear /> */}
          <h1 id="video">Video</h1>
          <p>
            My highlighted works include working as a director, replay operator,
            editor, and camera operator for multiple types of video projects.
            These include live broadcast events, short films, documentaries,
            newscasts and freelance videos. Experience working with the New York
            Mets, ABC 6 News, the Pawtucket Red Sox, Providence College
            Athletics, and Pack Network, for various televised broadcast events
            (ESPN3, FOX Sports 1, NESN, etc)
          </p>
        </div>
      </div>
    );
  }
}

export default About;
