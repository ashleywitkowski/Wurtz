import "./NavBar.css";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";
import React from "react";

const NavBar = props => {
  function getClassName(path) {
    if (path === "/music") {
      return "music-nav";
    } else {
      return "";
    }
  }

  return (
    <Navbar className="navBar">
      <Nav
        className={`navigation ${getClassName(props.location.pathname)}`}
        style={{ textAlign: "center", fontSize: 25 }}
      >
        <div className="col-lg-2.5">
          <NavLink exact to="/" className="nav-link">
            <div className="menu-item">
              <i className="fa fa-home"></i> Home
            </div>
          </NavLink>
        </div>
        <div className="col-lg-2.5">
          <NavLink to="/about" className="nav-link">
            <div className="menu-item">
              <i className="fa fa-address-card"></i> About
            </div>
          </NavLink>
        </div>
        <div className="col-lg-2.5">
          <NavLink to="/reel" className="nav-link">
            <div className="menu-item">
              <i className="fa fa-video"></i> Reel
            </div>
          </NavLink>
        </div>
        <div className="col-lg-2.5">
          <NavLink to="/music" className="nav-link">
            <div className="menu-item">
              <i className="fa fa-music"></i> Music
            </div>
          </NavLink>
        </div>
        <div className="col-lg-2.5">
          <NavLink to="/photos" className="nav-link">
            <div className="menu-item">
              <i className="fa fa-camera-retro"></i> Photos
            </div>
          </NavLink>
        </div>
      </Nav>
    </Navbar>
  );
};

export default withRouter(NavBar);
