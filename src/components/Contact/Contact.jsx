import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Contact.css";
import logo_dark from "../../assets/images/unfold-logo-dark.png";
import contact_map from "../../assets/images/contact/map.png";

function Contact(props) {
  return (
    <div>
      <NavBar logo={logo_dark} ulColor="black" />
      <section id="contact">
        <div id="contact_map">
          <img src={contact_map} alt="map" />
        </div>
        <div id="contact_form">
          <h1>We hoped you’d end up here.</h1>
          <form>
            <label>
              First Name <span>*</span>
            </label>
            <input type="text" />
            <label>
              Last Name <span>*</span>
            </label>
            <input type="text" />
            <label>
              Email <span>*</span>
            </label>
            <input type="email" />
            <label>
              Phone Number <span>*</span>
            </label>
            <input type="text" />
            <label>
              Company Name <span>*</span>
            </label>
            <input type="text" />
            <label>
              Tell Us About Your Project <span>*</span>
            </label>
            <textarea name="" cols="30" rows="5"></textarea>
            <span>The more details the better!</span>
            <input type="button" value="SEND IT" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
