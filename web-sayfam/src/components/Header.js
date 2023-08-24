import React from "react";
import { useContext } from "react";
import { GeneralDatas } from "../extras/GeneralDatas";
import { LanguageContext } from "../extras/Context";

const Header = (props) => {
  //<button class="font-bold pr-4 dark:text-[#BAB3E7]"></button>
  const { toggle, setToggle } = props;

  const { languagePreference, setLanguagePreference } =
    useContext(LanguageContext);

  const handleOnClick = (lang) => {
    if (lang === "en") {
      setLanguagePreference("en");
      document.documentElement.lang = "en";
      return;
    } else {
      setLanguagePreference("tr");
      document.documentElement.lang = "tr";
      return;
    }
  };

  const header = GeneralDatas[languagePreference.toLowerCase()].header;

  return (
    <>
      <div className="flex justify-end py-4 max-sm:text-sm max-sm:justify-center">
        <div
          className={toggle ? "radio-btn bg" : "radio-btn"}
          onClick={() => {
            setToggle(toggle);
            localStorage.setItem(
              "theme",
              JSON.stringify(toggle ? "light" : "dark")
            );
          }}
        >
          <div className={toggle ? "radio-inner active" : "radio-inner"}></div>
        </div>
        <span className="font-bold px-4 dark:text-[#BAB3E7]">
          {toggle ? header.mode[0] : header.mode[1]}
        </span>
        <span>|</span>
        <div className="dark:text-[#777777] ">
          <button
            className="pl-4 text-[#7B61FF] font-bold dark:text-[#BAB3E7]"
            onClick={() => {
              handleOnClick(header.lngbutton[1]);
            }}
          >
            {header.lngbutton[0]}
          </button>
          {header.to}
        </div>
      </div>

      <div className="flex justify-between text-center max-sm:flex-col max-sm:items-center">
        <div className=" flex items-center">
          <h2 className="text-[#7B61FF] text-2xl leading-8 font-semibold rounded-full bg-[#EFEBFF] w-16 h-16 text-center rotate-[40deg] flex justify-center items-center dark:bg-[#E25A43] dark:text-[#FED9BE] ">
            B
          </h2>
        </div>

        {/*       <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="62"
        viewBox="0 0 64 62"
        fill="none"
        >
        <ellipse cx="31.8378" cy="31" rx="31.8378" ry="31" fill="#EEEBFF" />
        <text>B</text>
        </svg> */}

        <div className=" my-5 ">
          <a
            href="#skills"
            className="p-3 font-medium border-2 rounded-md border-[#FFFFFF] hover:border-2 hover:border-[#7B61FF] hover:bg-[#7B61FF] hover:text-[#FFFFFF] hover:rounded-md duration-500 dark:hover:bg-[#FFFFFF] dark:border-none dark:text-[#6B7280]"
          >
            {header.skills}
          </a>
          <a
            href="#project"
            className="p-3 font-medium ml-3 border-2 rounded-md  border-[#FFFFFF] hover:border-2 hover:border-[#7B61FF] hover:bg-[#7B61FF] hover:text-[#FFFFFF] hover:rounded-md duration-500 dark:hover:bg-[#FFFFFF] dark:border-none dark:text-[#6B7280] "
          >
            {header.projects}
          </a>
          <a
            className="font-medium border-2 ml-3 border-[#7B61FF] p-3 hover:bg-[#7B61FF] hover:text-[#FFFFFF] rounded-md duration-500 dark:hover:bg-[#FFFFFF] dark:border-none dark:text-[#6B7280]"
            href="mailto:goksu.blge@gmail.com"
          >
            {header.hire}
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
