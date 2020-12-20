import FlexContainer from "flexcontainer-react";
import React from "react";
import { SRLWrapper, useLightbox } from "simple-react-lightbox-pro";

const Projects = ({ projects, handleOpenGallery }) => {
  const { openLightbox, closeLightbox } = useLightbox();
  return (
    <div className="grid row-gap-20 column-gap-20">
      {projects.map((project) => (
        <div
          key={project.title}
          className="grid row-gap-15 col-sm-12 col-xl-6 project-container"
        >
          <div className="col-md-1 col-sm-12 image">
            {project.multipleImages ? (
              <img
                src={`./projects/${project.title}/${project.title}.png`}
              ></img>
            ) : (
              <img src={`./projects/${project.title}.png`}></img>
            )}
          </div>
          <div className="col-md-11 col-sm-12 grid project-info-container row-gap-5">
            <div className="title col-9 text-align-left">
              <h2>{project.title}</h2>
            </div>
            <FlexContainer
              alignItems="center"
              justifyContent="flex-end"
              className="col-3"
            >
              <h4>{project.date}</h4>
            </FlexContainer>
            <div
              type="horizontal"
              className="grid technologies-grid row-gap-5 column-gap-5 -col-12"
            >
              {project.technologies.map((skill) => (
                <img
                  src={`./skills/${skill}.png`}
                  className="project-skill"
                  key={skill}
                ></img>
              ))}
            </div>
            <div className="col-12 text-align-left">
              {project.shortDescription}
            </div>
            <div className="col-12 align-self-bottom">
              {project.link ? (
                <a href={project.link} target="_blank">
                  <button className="btn btn-outlined width-fluid btn-a">
                    OPEN
                  </button>
                </a>
              ) : project.multipleImages ? (
                <button
                  className="btn btn-outlined width-fluid btn-a"
                  onClick={() => {
                    handleOpenGallery(project);
                  }}
                >
                  OPEN GALLERY
                </button>
              ) : (
                <a href={""}>
                  <button className="btn width-fluid btn-a btn-disabled">
                    COMING SOON
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
