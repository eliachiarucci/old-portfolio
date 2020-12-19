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
      <Link className="link" to="/">
        <div>About Me</div>
        <hr />
      </Link>
      <Link className="link" to="/projects">
        <div>Projects</div>
        <hr />
      </Link>
      <Link className="link" to="/cv">
        <div>CV</div>
        <hr />
      </Link>
    </FlexContainer>
  );
};

export default NavBar;
