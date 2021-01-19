import React, { useEffect, useState } from "react";
import FlexContainer from "flexcontainer-react";
import ProfilePhoto from "../media/photo6.png";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ProjectsList from "../projectslist.json";
import SideProjectsList from "../sideProjectsList.json";
import { SRLWrapper, useLightbox } from "simple-react-lightbox-pro";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState();
  let images1;
  const { openLightbox, closeLightbox } = useLightbox();
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
    "Electron",
    "Firebase",
    "DigitalOcean",
    "GitHub",
    "Bootstrap",
    "Ant-Design",
    "Sass",
    "PHP",
    "Arduino",
    "P5js",
    "Processing",
  ];

  function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      setImages([]);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return width;
  }
  const width = useWindowWidth();

  const handleOpenGallery = ({ images, title }) => {
    images = images.map((image) => ({
      src: `./projects/${title}/${image}`,
      showControls: true,
    }));
    setImages(images);
  };

  useEffect(() => {
    console.log(images);
    openLightbox();
  }, [images]);

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
          <FlexContainer
            type="vertical"
            gap={15}
            justifyContent="space-between"
          >
            <a href="#projects">
              <button className="btn btn-outlined">
                HAVE A LOOK AT MY PROJECTS
              </button>
            </a>
            <FlexContainer
              type="horizontal"
              width="100%"
              justifyContent="space-between"
            >
              <a
                href="https://www.linkedin.com/in/eliachiarucci/"
                target="_blank"
              >
                <button className="btn btn-outlined social-link">
                  LinkedIn
                </button>
              </a>
              <a href="https://github.com/eliachiarucci" target="_blank">
                <button className="btn btn-outlined social-link">GitHub</button>
              </a>
            </FlexContainer>
          </FlexContainer>
          <img src={ProfilePhoto} className="profile-picture" />
        </div>
      </FlexContainer>
      <br />
      <br />
      <h1>Skills</h1>
      <hr className="divider" />
      <FlexContainer width="100%" justifyContent="center" alignItems="center">
        <Skills skills={skills} />
      </FlexContainer>
      <br />
      <br />
      <h1 id="projects">Projects</h1>
      <hr className="divider" />
      <FlexContainer width="100%" justifyContent="center" alignItems="center">
        <Projects
          projects={ProjectsList}
          handleOpenGallery={handleOpenGallery}
        />
      </FlexContainer>
      <br />
      <br />
      <h1 id="projects">Other things I enjoy doing</h1>
      <hr className="divider" />
      <FlexContainer width="100%" justifyContent="center" alignItems="center">
        <Projects
          projects={SideProjectsList}
          handleOpenGallery={handleOpenGallery}
        />
      </FlexContainer>
      <br />
      <br />
      <h1 id="cv">CV</h1>
      <hr className="divider" />
      <FlexContainer
        type="vertical"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Document className="CV" file="EliaChiarucciCV.pdf">
          <Page
            renderMode="canvas"
            width={Math.min(width * 0.9, 1000)}
            renderAnnotationLayer={false}
            pageNumber={1}
          />
        </Document>
        <a className="CV_button" href="EliaChiarucciCV.pdf" target="_blank">
          <button className="btn btn-outlined">OPEN CV IN A NEW TAB</button>
        </a>
      </FlexContainer>
      <br />
      <br />
      <SRLWrapper elements={images} />
    </div>
  );
};

export default Homepage;
