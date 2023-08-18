import React from "react";
import DataProjects from "../extras/DataProjects";

const Projects = () => {
  return (
    <div id="project">
      <div>
        <h2>Projects</h2>
      </div>
      {DataProjects().map((item, index) => (
        <div key={index}>
          <div src={item.picture}></div>
          <h2>{item.title}</h2>
          <h3>{item.descr}</h3>
        </div>
      ))}
    </div>
  );
};

export default Projects;
