import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div id="projectCard" style={{ width: "33%" }}>
      <div id="pCardFront">
        <img src={props.projectImg} alt="projectImg" />
      </div>
      <div id="pCardBack">
        <h2>{props.projectName}</h2>
      </div>
    </div>
  );
}

export default ProjectCard;
