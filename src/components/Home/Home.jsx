import React from "react";
import NavBar from "../NavBar/NavBar";
import CrowdRise from "./Crowd_rise/CrowdRise";
import logo_white from "../../assets/images/unfold-logo-white.png";
import "./Home.css";

function Home(props) {
  return (
    <div>
      <NavBar logo={logo_white} ulColor="white" position="sticky" />
      <section id="home_footer">
        <h1>See where we can take you</h1>
        <button>let's chat</button>
      </section>
      <div style={{ position: "absolute", top: 0, width: "100%" }}>
        <CrowdRise />
      </div>
      <div style={{ height: "1000px" }}></div>
    </div>
  );
}

export default Home;
