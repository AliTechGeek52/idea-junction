import React from "react";
import "./Project.css";
import NavBar from "../NavBar/NavBar";
import logo_dark from "../../assets/images/unfold-logo-dark.png";
import ProjectCard from "./Project_Card/ProjectCard";
import crowdRise from "../../assets/images/project/crowdrise.png";
import payjunction from "../../assets/images/project/payjunction.png";
import sweet from "../../assets/images/project/sweet.png";
import homely from "../../assets/images/project/homely.png";
import matterport from "../../assets/images/project/matterport.png";
import natoni from "../../assets/images/project/natoni.png";
import indigo from "../../assets/images/project/indigo.png";
import kizen from "../../assets/images/project/kizen.png";
import mindshow from "../../assets/images/project/mindshow.png";
import ijr from "../../assets/images/project/ijr.png";
import zentrust from "../../assets/images/project/zentrust.png";


function Project(props) {
  return (
    <div id="project">
      <NavBar logo={logo_dark} ulColor="black" position="relative" />
      <section id="projectStart">
        <h1>We design a lot of things</h1>
        <p>Here are some of our favorites…</p>
      </section>
      <section id="projectCards">
        <ProjectCard projectImg={crowdRise} projectName="CrowdRise"/>
        <ProjectCard projectImg={payjunction} projectName="PayJunction"/>
        <ProjectCard projectImg={sweet} projectName="Sweet"/>
        <ProjectCard projectImg={homely} projectName="Homely"/>
        <ProjectCard projectImg={matterport} projectName="Matterport"/>
        <ProjectCard projectImg={natoni} projectName="Natoni"/>
        <ProjectCard projectImg={indigo} projectName="Indigo Sleep"/>
        <ProjectCard projectImg={kizen} projectName="Kizen"/>
        <ProjectCard projectImg={mindshow} projectName="Mindshow"/>
        <ProjectCard projectImg={ijr} projectName="IJR"/>
        <ProjectCard projectImg={zentrust} projectName="ZenTrust"/>
      </section>
    </div>
  );
}

export default Project;
