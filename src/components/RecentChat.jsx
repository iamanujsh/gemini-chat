import React, { useContext } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { Context } from "../context/context";

const RecentChat = ({ clicked }) => {
  const { prevPrompts, setInput, setRecentPrompt } = useContext(Context);

  return (
    <>
      <div className="recent mt-10 mx-2">
        {!clicked && (
          <p className="text-sm whitespace-nowrap overflow-hidden font-semibold ">
            Recent
          </p>
        )}
      </div>

      {!clicked && (
        <div className="overflow-hidden  h-[70vh]">
          <div className="overflow-y-auto 00 h-[70vh]">
            {prevPrompts.map((prompt) => (
              <div
                key={prompt}
                className="flex items-center hover:bg-[#E8ECF1] rounded-full cursor-pointer "
                onClick={() => {
                  setInput(prompt);
                  setRecentPrompt(prompt);
                }}
              >
                <div className="px-3 py-3 font-semibold">
                  <FiMessageSquare />
                </div>
                <p className="whitespace-nowrap overflow-hidden ">
                  {prompt.length > 10 ? `${prompt.slice(0, 18)}...` : prompt}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RecentChat;
