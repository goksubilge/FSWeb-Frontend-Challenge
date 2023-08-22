import React from "react";
import DataSkills from "../extras/DataSkills";

const Skills = () => {
  return (
    <div id="skills" className="mt-10 mb-4">
      <h4 className="text-[#1F2937] text-5xl leading-none font-semibold mb-4">
        Skills
      </h4>
      <div className="flex flex-row justify-between gap-10">
        {DataSkills().map((item, index) => (
          <div key={index} className="max-w-[300px]">
            <h2 className="text-[#7B61FF] text-3xl font-medium ">
              {item.title}
            </h2>
            <h3 className="text-xs/[18px]">{item.descr}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
