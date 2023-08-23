import React from "react";
import DataProjects from "../extras/DataProjects";

const Projects = () => {
  return (
    <div id="project" className="mt-4 mb-4">
      <div>
        <h4 className="text-[#1F2937] text-5xl leading-none font-semibold mb-4 ">
          Projects
        </h4>
      </div>
      <div className="flex flex-row justify-between gap-10 max-sm:flex-col max-sm:items-center">
        {DataProjects().map((item, index) => (
          <div key={index} className="max-w-[300px]">
            <img src={item.picture} alt="projects"></img>
            <h2 className="text-[#7B61FF] text-3xl font-medium self-stretch mt-2 mb-2">
              {item.title}
            </h2>
            <h3 className="text-sm pb-4">{item.descr}</h3>
            <article className="py-4 flex flex-wrap gap-2">
              {item.emptyInfo.map((item, index) => (
                <span
                  key={index}
                  className="flex-row justify-between border-2 rounded-md px-4 py-1 gap-2 border-[#7B61FF] text-[#7B61FF] "
                >
                  {item}
                </span>
              ))}
            </article>
            <div className="flex justify-between">
              <a href={item.link1} className="text-[#7B61FF] underline">
                Github
              </a>
              <a href={item.link2} className="text-[#7B61FF] underline">
                View Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
