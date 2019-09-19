import "./NavBar.css";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import React from "react";

const NavBar = props => {
  return (
    <Navbar className="navbar">
      <Nav
        className="col-lg-12 navigation"
        style={{ textAlign: "center", fontSize: 25 }}
      >
        <div className="col-lg-2.5">
          <NavLink exact to="/" className="nav-link">
            <i className="fa fa-home"></i> Home
          </NavLink>
        </div>
        <div className="col-lg-2.5">
          <NavLink to="/about" className="nav-link">
            <i className="fa fa-address-card"></i> About
          </NavLink>
        </div>
        <div className="col-lg-2.5">
          <NavLink to="/reel" className="nav-link">
            <i className="fa fa-video"></i> Reel
          </NavLink>
        </div>
        <div className="col-lg-2.5">
          <NavLink to="/music" className="nav-link">
            <i className="fa fa-music"></i> Music
          </NavLink>
        </div>
        <div className="col-lg-2.5">
          <NavLink to="/photos" className="nav-link">
            <i className="fa fa-camera-retro"></i> Photos
          </NavLink>
        </div>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
