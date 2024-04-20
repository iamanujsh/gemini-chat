import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Context } from "../context/context";

const NewChat = ({ clicked }) => {
  const { plus_icon } = assets;
  const { setShowResult, showResult, setLoading } = useContext(Context);
  // console.log(showResult);
  const handleClick = () => {
    setShowResult(false);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="flex items-center gap-3 rounded-full w-fit bg-[#DDE3EA] hover:cursor-pointer font-semibold "
      >
        <img
          src={plus_icon}
          alt="plus"
          className="w-10 rounded-full hover:cursor-pointer p-3 py-2"
        />
        {!clicked && (
          <p className="pr-5 text-[14px] whitespace-nowrap overflow-hidden ">
            New Chat
          </p>
        )}
      </div>
    </>
  );
};

export default NewChat;
