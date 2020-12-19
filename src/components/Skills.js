import FlexContainer from "flexcontainer-react";
import React from "react";

const Skills = ({ skills }) => {
  return (
    <div className="grid row-gap-15 column-gap-15">
      {skills.map((skill) => (
        <div key={skill} className="col-sm-6 col-md-4 col-xl-3">
          <div className="btn btn-disabled skill" key={skill}>
            <img src={`./skills/${skill}.png`}></img>
            {skill}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
