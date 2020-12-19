import React from "react";
import FlexContainer from "flexcontainer-react";
import ProfilePhoto from "../media/photo6.png";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const homepage = () => {
  const skills = [
    "Javascript",
    "Typescript",
    "HTML",
    "CSS",
    "React",
    "React Native",
    "Express",
    "MongoDB",
    "Node",
    "Firebase",
    "DigitalOcean",
    "Electron",
    "GitHub",
    "Bootstrap",
    "Ant-Design",
    "Sass",
    "PHP",
    "Arduino",
    "P5js",
    "Processing",
  ];
  const projects = [
    "Tomino",
    "CYBYWY",
    "Polpo di Fulmine",
    "FlexContainer",
    "Line",
    "Anthropocene",
    "Companion",
    "Remote Control Antenna",
  ];
  const unrelated = ["UltraSonoro", "CorpoSonoro"];
  return (
    <div>
      <FlexContainer
        type="horizontal"
        width="100%"
        justifyContent="center"
        className="presentation-section"
      >
        <div type="vertical" className="presentation-grid">
          <h1 className="title">Hi! I'm Elia!</h1>
          <h2>Welcome to my portfolio</h2>
          <button className="btn btn-outlined">
            HAVE A LOOK AT MY PROJECTS
          </button>
          <img src={ProfilePhoto} className="profile-picture" />
        </div>
      </FlexContainer>
      <br />
      <h1>Skills</h1>
      <hr className="divider" />
      <FlexContainer width="100%" justifyContent="center" alignItems="center">
        <Skills skills={skills} />
      </FlexContainer>
      <br />
      <h1>Projects</h1>
      <hr className="divider" />
      <FlexContainer width="100%" justifyContent="center" alignItems="center">
        <Projects projects={projects} />
      </FlexContainer>
    </div>
  );
};

export default homepage;
