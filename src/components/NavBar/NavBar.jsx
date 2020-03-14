import React from "react";
import logo_white from "../../assets/images/unfold-logo-white.png";
import "./Navbar.css";

function NavBar(props) {
  return (
    <div id="header_nav">
      <img src={logo_white} alt="logo_white" />
      <nav id="nav_bar">
        <ul>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
