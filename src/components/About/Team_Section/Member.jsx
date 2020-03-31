import React from "react";
import "./Member.css";

function Member(props) {
  return (
    <div id="member" style={{width:'25%'}}>
      <div id="member_front" style={{backgroundColor: props.bgColor}}>
        <img src={props.memberImg} alt="memberImg" />
      </div>
      <div id="member_back">
        <h2>{props.memberName}</h2>
        <p>{props.memberTitle}</p>
      </div>
    </div>
  );
}

export default Member;
