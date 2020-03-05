import "./Reel.css";
import React, { Component } from "react";
import axios from "axios";

class Reel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channelId: "UCEs67m3EYo7Pw_16IokFrtg",
      videoIds: [], //"vidId1, vidId2"
      activeIndex: 0
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UUEs67m3EYo7Pw_16IokFrtg&key=AIzaSyAhNiyFdJIutZMTkYpC82cxYm6p8YDMHtc&part=snippet&maxResults=5"
      )
      .then(res => {
        let vidIds = [];

        for (let i = 0; i < res.data.items.length; i++) {
          vidIds.push(res.data.items[i].snippet.resourceId.videoId);
        }
        this.setState({
          videoIds: vidIds
        });
      });
  }

  renderVidThumbnail = vidIds => {
    let vidThumbnails = [];
    var colSize = Math.round(12 / vidIds.length);
    for (let i = 0; i < vidIds.length; i++) {
      vidThumbnails.push(
        <img
          src={`https://i.ytimg.com/vi/${vidIds[i]}/hqdefault.jpg`}
          onClick={() => this.handleClick(i)}
          key={i}
          className={`col-${colSize}`}
        />
      );
    }
    return vidThumbnails;
  };

  handleClick = index => {
    console.log(index);
    this.setState({ activeIndex: index });

    //console.log(this.state.videoIds);
    //console.log(this.state.activeIndex);
  };

  renderActiveVid = (vidIds, activeIndex) => {
    return (
      <iframe
        width="900"
        height="500"
        src={`https://www.youtube.com/embed/${vidIds[activeIndex]}`}
        allowFullScreen
      ></iframe>
    );
  };

  mod(index, length) {
    return ((index % length) + length) % length;
  }
  render() {
    console.log(this.state.activeIndex);
    return this.state.videoIds.length === 0 ? (
      <React.Fragment />
    ) : (
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <div className="row">
            <div className="col-lg-12" style={{ textAlign: "center" }}>
              {this.renderActiveVid(
                this.state.videoIds,
                this.state.activeIndex
              )}
              <span
                onClick={() =>
                  this.handleClick(
                    this.mod(
                      this.state.activeIndex - 1,
                      this.state.videoIds.length
                    )
                  )
                }
              >
                <i className={`fa fa-chevron-left`} />
              </span>
              <span
                onClick={() =>
                  this.handleClick(
                    (this.state.activeIndex + 1) % this.state.videoIds.length
                  )
                }
              >
                <i className={`fa fa-chevron-right`} />
              </span>
            </div>
          </div>
          <div className="row" style={{ justifyContent: "center" }}>
            {this.renderVidThumbnail(this.state.videoIds)}
          </div>
        </div>
      </div>
    );

    // <div
    //   className="film"
    //   style={{
    //     backgroundImage: `url(require("../../resources/Pictures/film.jpg"))`,
    //     width: "50%",
    //     height: "70%"
    //   }}
    // >
    // <div className="reel-vid">
    //   <iframe
    //     width="855"
    //     height="369"
    //     src="https://www.youtube.com/embed/TC7csvH-Qsw?autoplay=1"
    //     frameBorder="0"
    //     // allow="autoplay"
    //     allowFullScreen
    //   ></iframe>
    // </div>
    // </div>
  }
}

export default Reel;
