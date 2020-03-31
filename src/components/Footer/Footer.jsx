import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faPinterest,
  faLinkedinIn,
  faYoutube,
  faDribbble,
  faBehance,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"

function Footer(props) {
  return (
    <div id="footer">
      <p>© 2020 Unfold.</p>
      <ul>
        <li>
          <FontAwesomeIcon icon={faFacebookF} />
        </li>
        <li>
          <FontAwesomeIcon icon={faPinterest} />
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </li>
        <li>
          <FontAwesomeIcon icon={faYoutube} />
        </li>
        <li>
          <FontAwesomeIcon icon={faDribbble} />
        </li>
        <li>
          <FontAwesomeIcon icon={faBehance} />
        </li>
        <li>
          <FontAwesomeIcon icon={faInstagram} />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
