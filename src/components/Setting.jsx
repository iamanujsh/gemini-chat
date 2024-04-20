import React from "react";
import { assets } from "../assets/assets";

const Setting = ({ clicked }) => {
  const { plus_icon } = assets;
  console.log(clicked);

  return (
    <>
      <div className="flex items-center gap-3 rounded-full w-fit bg-[#DDE3EA] hover:cursor-pointer font-semibold ">
        <img
          src={plus_icon}
          alt="plus"
          className="w-10 rounded-full hover:cursor-pointer p-3 py-2"
        />
        {!clicked && (
          <p className="pr-5 text-[14px] whitespace-nowrap ">Setting</p>
        )}
      </div>
    </>
  );
};

export default Setting;
