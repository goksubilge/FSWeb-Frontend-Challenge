import React from "react";
const Header = (props) => {
  const { toggle, setToggle } = props;
  return (
    <>
      <div className="flex justify-end py-4 ">
        <button class="font-bold pr-4 dark:text-[#BAB3E7]">DARK MODE</button>

        <span>|</span>
        <button class=" pl-4 text-[#7B61FF] font-bold dark:text-[#BAB3E7]">
          TÜRKÇE
        </button>
        <p className=" dark:text-[#FFFFFF] font-bold">'YE GEÇ</p>
      </div>

      <div className="flex justify-between text-center ">
        <div className=" flex items-center">
          <h2 className="text-[#7B61FF] text-2xl leading-8 font-semibold rounded-full bg-[#EFEBFF] w-16 h-16 text-center rotate-[40deg] flex justify-center items-center dark:bg-[#4731D3] dark:text-[#8F88FF] ">
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
            className="p-3 font-medium border-2 rounded-md border-[#FFFFFF] hover:border-2 hover:border-[#7B61FF] hover:bg-[#7B61FF] hover:text-[#FFFFFF] hover:rounded-md duration-500"
          >
            Skills
          </a>
          <a
            href="#project"
            className="p-3 font-medium ml-3 border-2 rounded-md  border-[#FFFFFF] hover:border-2 hover:border-[#7B61FF] hover:bg-[#7B61FF] hover:text-[#FFFFFF] hover:rounded-md duration-500 "
          >
            Project
          </a>
          <a
            className="font-medium border-2 ml-3 border-[#7B61FF] p-3 hover:bg-[#7B61FF] hover:text-[#FFFFFF] rounded-md duration-500"
            href="mailto:goksu.blge@gmail.com"
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
