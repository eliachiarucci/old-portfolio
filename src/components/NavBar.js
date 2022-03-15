import React from "react";
import FlexContainer from "flexcontainer-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <FlexContainer
      className="navbar"
      type="horizontal"
      height="75px"
      justifyContent="center"
      alignItems="center"
      gap={30}
    >
      <a className="link" href="#about">
        <div>About Me</div>
        <hr />
      </a>
      <a className="link" href="#projects">
        <div>Projects</div>
        <hr />
      </a>
      <a className="link" href="#contact">
        <div>Contact</div>
        <hr />
      </a>
      {/* <a className="link" href="#cv">
        <div>CV</div>
        <hr />
      </a> */}
    </FlexContainer>
  );
};

export default NavBar;
