import React from "react";
import crow_bg1 from "../../../assets/images/crowd_bg1.jpg";
import crow_bg2 from "../../../assets/images/crowd_bg2.png";
import crow_bg3 from "../../../assets/images/crowd_bg3.png";
import crow_bg4 from "../../../assets/images/crowd_bg4.png";
import "./CrowdRise.css";

function CrowdRise(props) {
  return (
    <div id="crowd_rise">
      <div id="crowd_background">
        <img src={crow_bg1} alt="" className="crow_bg" id="crow_bg1" />
        <img src={crow_bg2} alt="" className="crow_bg" id="crow_bg2" />
        <img src={crow_bg3} alt="" className="crow_bg" id="crow_bg3" />
        <img src={crow_bg4} alt="" className="crow_bg" id="crow_bg4" />
      </div>
      <div id="crow_detail">
        <h1>CrowdRise</h1>
        <p>
          A GoFundMe™ company. Putting “fun” back in fundraising – we created a
          new strategically positioned visual style and identity.
        </p>
        <button> SEE CASE STUDY</button>
      </div>
    </div>
  );
}

export default CrowdRise;
