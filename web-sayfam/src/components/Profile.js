import React from "react";
import Info from "../extras/Info";

const Profile = () => {
  return (
    <div className=" mt-4 mb-4 ">
      <div>
        <h4 className="text-[#1F2937] text-5xl leading-none font-semibold  ">
          Profile
        </h4>
      </div>

      <div className="flex flex-row justify-around mb-4 max-sm:flex-col max-sm:items-start">
        <div className="max-sm:pt-10 mr-8 ">
          <h2 className=" text-[#7B61FF] text-3xl font-medium mb-3 ">
            Profile
          </h2>
          <div className="flex flex-row gap-8">
            <div className="">
              {Info().map((item, index) => (
                <div
                  key={index}
                  className="max-w-[300px] flex flex-row items-baseline"
                >
                  <p className="text-black text-xl font-semibold py-2 max-sm:py-5 ">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="">
              {Info().map((item, index) => (
                <div
                  key={index}
                  className="max-w-[300px] flex flex-row items-end text-lg"
                >
                  <p className="text-black py-2 max-sm:py-5">{item.descr}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" pr-10 max-sm:py-10">
          <h2 className="text-[#7B61FF] text-3xl font-medium mb-3">About Me</h2>
          <p className="max-w-lg text-lg ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia. Mnima accusamus
            ratione soluta aperiam sit voluptate? Dicta quod deserunt quam
            temporibus cumque magnam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
