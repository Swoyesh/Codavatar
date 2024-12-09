import React, { useState } from "react";
import Subtitle from "./Subtitle";
import Input from "./Input";
import Button from "./Button";

const Main = () => {
  // State to control button's enabled/disabled state
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  // Handles changes in the input fields and enables the button if all fields are filled
  const handleInputChange = (values) => {
    const allFilled = values.every((value) => value !== "");
    setIsButtonEnabled(allFilled); // Enables button only if all input fields are filled
  };

  return (
    <div className="flex flex-wrap xl:w-[519px] xl:h-[40px] md:w-3/4">
      {/* Subtitle displaying the verification prompt */}
      <Subtitle />
      
      {/* Input component where the user provides input */}
      <div className="pt-[48px]">
        <Input onInputChange={handleInputChange} />
      </div>

      {/* Button that is enabled/disabled based on input validity */}
      <div className="pt-[24px]">
        <Button isEnabled={isButtonEnabled} />
      </div>
    </div>
  );
};

export default Main;