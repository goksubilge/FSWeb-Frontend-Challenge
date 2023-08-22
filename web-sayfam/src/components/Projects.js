import React from "react";
import DataProjects from "../extras/DataProjects";

const Projects = () => {
  return (
    <div id="project">
      <div>
        <h4 className="leading-[72px] font-bold text-3xl ">Projects</h4>
      </div>
      <div className="flex flex-row justify-between gap-10">
        {DataProjects().map((item, index) => (
          <div key={index} className="max-w-[300px]">
            {/* {console.log(item.picture)} */}
            <img src={item.picture} alt="projects"></img>
            <h2>{item.title}</h2>
            <h3>{item.descr}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
