import React from "react";
import NavBar from "../NavBar/NavBar";
import logo_white from "../../assets/images/unfold-logo-white.png";
import AboutHeader from "./AboutHeader";
import "./About.css";

function About(props) {
  return (
    <div id="about">
      <NavBar logo={logo_white} ulColor="white" position="relative" />
      <div style={{ position: "absolute", top: 0, width: "100%" }}>
        <AboutHeader />
      </div>
      <div style={{ height: "90vh" }}></div>
      <section id="intro">
        <div style={{ width: "15%" }}></div>

        <div style={{ width: "40%" }}>
          <h1>Building awesome, One pixel at a time</h1>
          <p>
            We strategically design beautiful brands, websites, and digital
            products that actually work. Creating a product that connects with
            your target group is essential for success, and we know how to do
            it.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
