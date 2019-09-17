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
        <div className="col-lg-3">
          <NavLink exact to="/" clas sName="nav-link">
            <i className="fa fa-home"></i> Home
          </NavLink>
        </div>
        <div className="col-lg-3">
          <NavLink to="/about" className="nav-link">
            <i class="fa fa-address-card"></i> About
          </NavLink>
        </div>
        <div className="col-lg-3">
          <NavLink to="/reel" className="nav-link">
            <i class="fa fa-video"></i> Reel
          </NavLink>
        </div>
        <div className="col-lg-3">
          <NavLink to="/music" className="nav-link">
            <i class="fas fa-music"></i> Music
          </NavLink>
        </div>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
