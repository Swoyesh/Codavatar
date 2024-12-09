import React, { useState } from "react";
import Subinput from "./Subinput";

const Input = ({ onInputChange }) => {
  // Initialize state for the input values, defaulting to an array of 6 empty strings
  const [values, setValues] = useState(["", "", "", "", "", ""]);

  // Handles the change in each individual input field
  const handleChange = (index, event) => {
    const newValue = event.target.value;

    // Ensure the value is a number or empty (to allow clearing input)
    if (/^\d?$/.test(newValue)) {
      const updatedValues = [...values];
      updatedValues[index] = newValue;
      setValues(updatedValues);  // Update the state with the new values
      onInputChange(updatedValues); // Call parent component's callback with the updated values
    }
  };

  return (
    <div className="h-[52px] flex gap-[30.5px] items-center">
      {/* Map through the first 3 values and render the Subinput component */}
      {values.slice(0, 3).map((value, index) => (
        <Subinput
          key={index}
          value={value}
          onChange={(event) => handleChange(index, event)}
        />
      ))}
      
      {/* Divider between the first and second set of inputs */}
      <div className="w-[16px] h-[3px] border-[#333333] border-2 rounded-sm"></div>
      
      {/* Map through the last 3 values and render the Subinput component */}
      {values.slice(3).map((value, index) => (
        <Subinput
          key={index + 3}  // Ensure unique key for each Subinput
          value={value}
          onChange={(event) => handleChange(index + 3, event)}
        />
      ))}
    </div>
  );
};

export default Input;
