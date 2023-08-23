import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F9F9F9] max-sm:flex max-sm:flex-col max-sm:items-center">
      <h4 className="max-w-xl max-sm:max-w-sm  text-[#1F2937] text-5xl  leading-none font-semibold dark:text-[#AEBCCF] pt-28 pb-20">
        Let’s work together on your next product.
      </h4>
      <nav className="flex justify-between max-sm:gap-4 max-sm:flex-col max-sm:w-min max-sm:items-center ">
        <span className="leading-6 pr-1">👉 </span>
        <a
          className="text-[#AF0C48] h-6 flex-1 text-xl leading-6 font-normal underline dark:text-[#BAB2E7]"
          href="mailto:goksu.blge@hotmail.com"
        >
          goksu.blge@hotmail.com
        </a>

        <a
          className="ml-5 h-6 text-[#0A0A14] dark:text-[#E1E1FF]"
          href={
            "https://forum.freecodecamp.org/t/cant-remove-text-decoration-from-a-tag/473543"
          }
        >
          Personal Blog
        </a>
        <a
          className="ml-5 h-6 text-[#00AB6B] dark:text-[#17D18B]"
          href="https://github.com/goksubilge"
        >
          GitHub
        </a>
        <a
          className="ml-5 h-6 text-[#0077B5] dark:text-[#0BA6F6]"
          href="https://www.linkedin.com"
        >
          Linkedin
        </a>
      </nav>
    </div>
  );
};

export default Footer;

// QueenWise Software
