import FlexContainer from "flexcontainer-react";
import React from "react";

const Projects = ({ projects }) => {
  return (
    <div className="grid row-gap-15 column-gap-15">
      {projects.map((project) => (
        <div
          key={project}
          className="grid row-gap-15 col-sm-12 col-xl-6 project-container"
        >
          <div className="col-1 image">
            <img src="https://source.unsplash.com/random/800x800"></img>
          </div>
          <div className="col-11 grid project-info-container">
            <div className="title col-9 text-align-left">
              <h2>{project}</h2>
            </div>
            <FlexContainer
              alignItems="center"
              justifyContent="flex-end"
              className="col-3"
            >
              <h4>Date</h4>
            </FlexContainer>
            <div className="col-12">skills</div>
            <div className="col-12 text-align-left">
              Description awf af aiwf awif af as awf
            </div>
            <div className="col-12 align-self-bottom">
              <button className="btn btn-outlined width-fluid">OPEN</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
