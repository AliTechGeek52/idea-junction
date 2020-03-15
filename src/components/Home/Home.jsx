import React from "react";
import NavBar from "../NavBar/NavBar";
import CrowdRise from "./Crowd_rise/CrowdRise";
import logo_white from "../../assets/images/unfold-logo-white.png";

function Home(props) {
  return (
    <div>
      <NavBar logo={logo_white} ulColor="white" />
      <div style={{ position: "absolute", top: 0, width: "100%" }}>
        <CrowdRise />
      </div>
    </div>
  );
}

export default Home;
