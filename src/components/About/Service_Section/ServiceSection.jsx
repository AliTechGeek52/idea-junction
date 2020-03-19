import React from "react";
import "./ServiceSection.css";

function ServiceSection(props) {
  return (
    <div
      id="servise"
      style={{
        backgroundColor: props.bgcolor,
        color: props.textColor,
        gridRow: props.gridRow,
        gridColumn: props.gridColumn
      }}
    >
      <main>
        <div id="servise_title">
          <img src={props.logo} alt="icon" />
          <h1>{props.title}</h1>
        </div>
        <p>{props.content}</p>
      </main>
    </div>
  );
}

export default ServiceSection;
