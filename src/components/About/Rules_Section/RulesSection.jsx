import React from "react";

import "./RulesSection.css";

function RulesSection(props) {
  return (
    <div id="rule" style={{ backgroundColor: props.bgColor }}>
      <div id="rule_title">
        <img src={props.ruleLogo} alt="Rule_logo" />
        <h1>{props.title}</h1>
      </div>
      <ul>
        {props.list.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default RulesSection;
