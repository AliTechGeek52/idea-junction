import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div id="header_nav">
      <Link to="/">
        <img src={props.logo} alt="logo" />
      </Link>
      <nav id="nav_bar">
        <ul style={{ color: props.ulColor }}>
          <li>
            <a>
              <Link to="/projects">Projects</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="/About">About</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="/contact">Contact</Link>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
