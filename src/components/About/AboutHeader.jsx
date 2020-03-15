import React from "react";
import about_bg1 from "../../assets/images/about/about_bg1.png";
import about_bg2 from "../../assets/images/about/about_bg2.png";
import about_bg3 from "../../assets/images/about/about_bg3.jpg";
import "./AboutHeader.css";

function AboutHeader(props) {
  return (
    <div id="about_rise">
      <div id="about_background">
        <img src={about_bg3} alt="" className="about_bg" id="about_bg3" />
        <img src={about_bg2} alt="" className="about_bg" id="about_bg2" />
        <img src={about_bg1} alt="" className="about_bg" id="about_bg1" />
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          backgroundColor: "#00000061"
        }}
      ></div>
      <div id="about_detail">
        <h1>Digital storytellers</h1>
        <p>Hand crafting award winning digital experiences</p>
      </div>
    </div>
  );
}

export default AboutHeader;
