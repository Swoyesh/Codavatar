import React from "react";
import "../../style.css";

const Subinput = ({ value, onChange }) => {
  return (
    <div className="border-[1px] border-[#E0E0E0] rounded-[6px] p-[8px] w-[52px] h-[52px] z-10">
      <input
        className="border-none focus:outline-none w-full m-0 text-center h-full"
        type="number"
        min="0" // Ensures only numbers are input
        max="9" // Limits input to single digits
        inputMode="numeric" // Optimizes input for numeric keypads on mobile devices
        maxLength="1" // Limits input to 1 character
        value={value} // Sets the current value of the input
        onChange={onChange} // Calls the parent handler when value changes
      />
    </div>
  );
};

export default Subinput;
