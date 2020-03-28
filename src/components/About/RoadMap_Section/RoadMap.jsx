import React from "react";
import "./RoadMap.css";
import RoadMapTarget from "./RoadMap_Target/RoadMapTarget";

function RoadMap(props) {
  return (
    <div id="roadMap">
      <div id="roadMap_para">
        <h1>Roadmap for success</h1>
        <p>
          This is our tried and true process that ensures we’re in alignment
          with the goals of each project. We don’t just make things pretty, we
          make them work while remaining on target.
        </p>
      </div>
      <div id="roadMap_targets">
        <RoadMapTarget
          number="1"
          targetTitle="Discover"
          targetDetail="The first part or our process is about learning all about your industry"
        />
        <RoadMapTarget
          number="2"
          targetTitle="Strategy"
          targetDetail="Next, we determine the best way to strategically meet the design goals of your brand"
        />
        <RoadMapTarget
          number="3"
          targetTitle="Design"
          targetDetail="The design phase is where we build out the usage guidelines, user experience, and prototype the product"
        />
        <RoadMapTarget
          number="4"
          targetTitle="Build"
          targetDetail="We’re connected with some pretty talented and creative devs, they’ll get the job done right"
        />
        <RoadMapTarget
          number="5"
          targetTitle="Deliver"
          targetDetail="Finally, we package it all up and deliver the product to you. On time and on budget"
        />
      </div>
    </div>
  );
}

export default RoadMap;
