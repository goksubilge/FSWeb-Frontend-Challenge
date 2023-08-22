import React from "react";
import Info from "../extras/Info";

const Profile = () => {
  return (
    <div className="block mt-4 mb-4 ">
      <div>
        <h4 className="text-[#1F2937] text-5xl leading-none font-semibold  ">
          Profile
        </h4>
      </div>

      <div className="flex flex-row justify-between mt-4 mb-4">
        <div className="">
          <h2 className=" text-[#7B61FF] text-3xl font-medium mb-3">Profile</h2>
          <div className="flex flex-row gap-8">
            <div className="block justify-between gap-10">
              {Info().map((item, index) => (
                <div
                  key={index}
                  className="max-w-[300px] flex flex-row items-baseline"
                >
                  <p className="text-black text-xl font-semibold ">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="block justify-between gap-10">
              {Info().map((item, index) => (
                <div
                  key={index}
                  className="max-w-[300px] flex flex-row items-end text-lg"
                >
                  <p className="text-black gap-4">{item.descr}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" pr-10">
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
