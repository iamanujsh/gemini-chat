import React, { useContext, useRef } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Context } from "../context/context";
import { assets } from "../assets/assets";
import { DefaultSkeleton } from "./DefaultSkeleton";

import Markdown from "react-markdown";
import MobileNav from "./MobileNav";
const Main = ({ onHandleClick, clicked }) => {
  const {
    onSent,
    recentPrompt,
    setShowResult,
    setRecentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    setPrevPrompts,
    prevPrompts,
  } = useContext(Context);

  const { gemini_icon } = assets;

  const promptRef = useRef(null);

  const handleSubmit = () => {
    if (prevPrompts.includes(promptRef.current.value)) return;
    setInput(promptRef.current?.value);
    setRecentPrompt(promptRef.current?.value);
    setPrevPrompts([...prevPrompts, promptRef.current.value]);
  };
  const enterSubmit = (e) => {
    if (prevPrompts.includes(promptRef.current.value)) return;
    if (e.key === "Enter") {
      setInput(promptRef.current.value);
      setRecentPrompt(promptRef.current?.value);
      setPrevPrompts([...prevPrompts, promptRef.current.value]);
    }
  };

  return (
    <div className=" flex flex-col justify-between w-full h-screen px-4 ">
      <div className=" h-[50vh] py-3">
        <div className="flex justify-between items-center w-full">
          <div className="sm:block md:hidden block">
            <MobileNav onHandleClick={onHandleClick} clicked={clicked} />
          </div>
          <h1 className="text-xl">Gemini</h1>
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="https://picsum.photos/200/300"
            alt=""
          />
        </div>
        {!showResult && (
          <div className="mt-14 flex justify-center text-[#C4C7C5] md:text-[4vw] sm:text-[8vw] text-[10vw] font-semibold tracking-tight">
            <div>
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-orange-500 leading-relaxed">
                Hello,
              </p>
              <p className="leading-tight">How can I help you today?</p>
            </div>
          </div>
        )}

        {showResult && (
          <div className="flex items-center pt-16 flex-col h-[78vh] overflow-auto ">
            <div className="flex md:w-[51vw]  sm:w-[90vw] w-[90vw] gap-4 ">
              <div className="w-[40px] h-[40px] ">
                <img
                  className="w-[40px] h-[40px] rounded-full "
                  src="https://picsum.photos/200/300"
                  alt=""
                />
              </div>
              <p>{recentPrompt}</p>
            </div>

            <div className=" mt-4 md:w-[52vw] sm:w-[91vw] w-[91vw] leading-loose flex">
              <div className="w-[70px] h-[70px] ">
                <div className="w-[70px] h-[70px]">
                  <img
                    src={gemini_icon}
                    alt="gemini_icon"
                    className="w-[100px] h-[70px]"
                  />
                </div>
              </div>
              <div className="p-2">
                {loading && <DefaultSkeleton />}
                <Markdown>{resultData}</Markdown>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center w-full h-[12vh] ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center gap-3 "
        >
          <input
            ref={promptRef}
            onKeyUp={enterSubmit}
            type="text"
            placeholder="Enter a prompt here"
            className="md:w-[50vw] sm:w-[70vw] w-[70vw] h-16 border-2 bg-[#E8ECF1] rounded-full px-5 py-6 focus:outline-none focus:bg-[#E9EEF6] "
          />
          <div className="border-2 p-3 rounded-full hover:bg-[#E8ECF1] cursor-pointer">
            <AiOutlineRight onClick={handleSubmit} className="text-3xl" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;
