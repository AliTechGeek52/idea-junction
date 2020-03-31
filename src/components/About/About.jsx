import React from "react";
import NavBar from "../NavBar/NavBar";
import logo_white from "../../assets/images/unfold-logo-white.png";
import AboutHeader from "./AboutHeader";
import RulesSection from "./Rules_Section/RulesSection";
import RoadMap from "./RoadMap_Section/RoadMap";
import weAreLogo from "../../assets/images/about/we-are-logo.png";
import weAreNotLogo from "../../assets/images/about/we-are-not-logo.png";
import whatWeDoLogo from "../../assets/images/about/what-we-do-logo.png";
import s2 from "../../assets/images/about/s2.png";
import s1 from "../../assets/images/about/s1.png";
import s3 from "../../assets/images/about/s3.png";
import s4 from "../../assets/images/about/s4.png";
import face1 from "../../assets/images/about/face_2.png";

import "./About.css";
import ServiceSection from "./Service_Section/ServiceSection";
import Member from "./Team_Section/Member";

function About(props) {
  let weAreArray = [
    "Humans",
    "Branding Experts",
    "Strategists",
    "Designers",
    "Illustrators",
    "Consultants",
    "Front-End Developers",
    "Artists",
    "Collaborators",
    "Specialists"
  ];
  let weAreNotArray = [
    "Robots",
    "Corporate",
    "In SF",
    "Dinosaurs",
    "Freelancers",
    "Cookie Cutters",
    "Your Mama"
  ];
  let whatWeDoArray = [
    "Brand Audit & Research",
    "Brand Strategy & Positioning",
    "Naming",
    "UI / UX",
    "Web & Mobile Apps",
    "Visual Identity Design",
    "Brand Guidelines",
    "Brand Voice & Messaging",
    "Packaging Design",
    "Print Collateral",
    "Illustration"
  ];

  return (
    <div id="about">
      <NavBar logo={logo_white} ulColor="white" position="relative" />
      <div style={{ position: "absolute", top: 0, width: "100%" }}>
        <AboutHeader />
      </div>
      <div style={{ height: "90vh" }}></div>
      <section class="intro">
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
      <section id="rules_section">
        <RulesSection
          title="We Are"
          list={weAreArray}
          ruleLogo={weAreLogo}
          bgColor="#f5f6f8"
        />
        <RulesSection
          title="We Are Not"
          list={weAreNotArray}
          ruleLogo={weAreNotLogo}
          bgColor="white"
        />
        <RulesSection
          title="What We Do"
          list={whatWeDoArray}
          ruleLogo={whatWeDoLogo}
          bgColor="white"
        />
      </section>
      <section id="service_section">
        <h1>Our Services</h1>
        <div id="serices">
          <ServiceSection
            gridRow="1/3"
            gridColumn="1/3"
            bgcolor="#ff0055"
            textColor="white"
            logo={s2}
            title="Branding"
            content="Your brand is what connects you with your target group, encourages loyalty and motivates users to use your product. We can help bring your vision to life with beauty and clarity."
          />
          <ServiceSection
            gridRow="1/2"
            gridColumn="3/5"
            bgcolor="#61c6ff"
            textColor="white"
            logo={s1}
            title="Illustrations"
            content="We’re industry leaders and innovators when it comes to illustration. Let us bring your imagination to life."
          />
          <ServiceSection
            gridRow="2/3"
            gridColumn="3/4"
            bgcolor="white"
            textColor="#444"
            logo={s3}
            title="Web"
            content="UI/UX, Strategy, and Design. Creating outstanding websites is our bread and butter."
          />
          <ServiceSection
            gridRow="2/3"
            gridColumn="4/5"
            bgcolor="#ffd542"
            textColor="white"
            logo={s4}
            title="Apps"
            content="We design beautiful apps that help enrich and bring value to people’s lives."
          />
        </div>
      </section>
      <section id="roadMap_Section">
        <RoadMap />
      </section>
      <section class="intro">
        <div style={{ width: "15%" }}></div>
        <div style={{ width: "40%" }}>
          <h1>Meet tha fam ✌</h1>
          <p>
            We’re a passionate and dynamic group of friends who’ve become like
            family. That’s the kind of environment we’ve cultivated at Unfold.
            We enjoy what we do, and have fun while we’re at it.
          </p>
        </div>
      </section>
      <section id="team">
        <Member
          memberImg={face1}
          memberName="Syed Sameer"
          memberTitle="Web-Developer"
          bgColor="#5ebff5"
        />
        <Member
          memberImg={face1}
          memberName="Syed Sameer"
          memberTitle="Web-Developer"
          bgColor="#e4404d"
        />
        <Member
          memberImg={face1}
          memberName="Syed Sameer"
          memberTitle="Web-Developer"
          bgColor="#68d0fb"
        />
        <Member
          memberImg={face1}
          memberName="Syed Sameer"
          memberTitle="Web-Developer"
          bgColor="#84f6d3"
        />
        <Member
          memberImg={face1}
          memberName="Syed Sameer"
          memberTitle="Web-Developer"
          bgColor="#f9db64"
        />
        <Member
          memberImg={face1}
          memberName="Syed Sameer"
          memberTitle="Web-Developer"
          bgColor="#e97c2b"
        />
        <Member
          memberImg={face1}
          memberName="Syed Sameer"
          memberTitle="Web-Developer"
          bgColor="#e44152"
        />
        <Member
          memberImg={face1}
          memberName="Syed Sameer"
          memberTitle="Web-Developer"
          bgColor="#63c6f9"
        />
        <Member
          memberImg={face1}
          memberName="Syed Sameer"
          memberTitle="Web-Developer"
          bgColor="#f4c449"
        />
        <Member
          memberImg={face1}
          memberName="Syed Sameer"
          memberTitle="Web-Developer"
          bgColor="#84f6d5"
        />
      </section>
      <section class="join">
        <h1>Join Our Squad</h1>
        <p>
          We specialize in branding, web design, mobile apps, illustrations and
          anything UI/UX. Sound good? We’re always looking for great people who
          bring value to the table.
        </p>
        <button>See Opportunites</button>
      </section>
    </div>
  );
}

export default About;
