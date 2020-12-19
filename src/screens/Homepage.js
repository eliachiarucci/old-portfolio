import React from "react";
import FlexContainer from "flexcontainer-react";
import ProfilePhoto from "../media/photo6.png";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ProjectsList from "../projectslist.json";
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
  return (
    <div id="about">
      <FlexContainer
        type="horizontal"
        width="100%"
        justifyContent="center"
        className="presentation-section"
      >
        <div type="vertical" className="presentation-grid">
          <h1 className="title">Hi! I'm Elia!</h1>
          <h2>Welcome to my portfolio</h2>
          <a href="#projects">
            <button className="btn btn-outlined">
              HAVE A LOOK AT MY PROJECTS
            </button>
          </a>
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
      <h1 id="projects">Projects</h1>
      <hr className="divider" />
      <FlexContainer width="100%" justifyContent="center" alignItems="center">
        <Projects projects={ProjectsList} />
      </FlexContainer>
      <br />
      <h1 id="cv">CV</h1>
      <hr className="divider" />
    </div>
  );
};

export default homepage;
