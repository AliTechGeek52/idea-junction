import React from "react";
import "./RoadMapTarget.css"

function RoadMapTarget(props) {
  return (
    <div id="roadMap_target">
      <h2>
        {props.number}. {props.targetTitle}
      </h2>
      <p>{props.targetDetail}.</p>
    </div>
  );
}

export default RoadMapTarget;
