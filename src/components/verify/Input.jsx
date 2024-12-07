import React from "react";
import Subinput from "./Subinput";

const Input = () => {
  const subinputs = [1, 2, 3];
  return (
    <div className="h-[52px] flex gap-[30.5px] items-center">
      {subinputs.map((index) => (
        <Subinput key={index} />
      ))}
      <div className="w-[16px] h-[3px] border-[#333333] border-2 rounded-sm"></div>
      {subinputs.map((index) => (
        <Subinput key={index} />
      ))}
    </div>
  );
};

export default Input;
