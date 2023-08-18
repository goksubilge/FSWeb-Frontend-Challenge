import React from "react";
const Header = (props) => {
  const { toggle, setToggle } = props;
  return (
    <>
      <div class="flex flex-wrap">
        <div
          className={toggle ? "decoration-sky-800" : "App"}
          onClick={() => setToggle(!toggle)}
        >
          <p>DARK MODE</p>
        </div>
        <span>|</span>
        <p class="cursor-pointer pl-4 dark:text-[#777777]">TÜRKÇE</p>
        <p>'YE GEÇ</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="62"
        viewBox="0 0 64 62"
        fill="none"
      >
        <ellipse cx="31.8378" cy="31" rx="31.8378" ry="31" fill="#EEEBFF" />
        <text>B</text>
      </svg>

      <a href="#skills">Skills</a>
      <a href="#project" className="text-center text-gray-500">
        Project
      </a>
      <button>Hire Me</button>
    </>
  );
};

export default Header;
