import React from "react";

const SmallInput = (props) => {
  return (
    <>
      <div className="flex flex-col w-[387px]">
        {/* Label for the input field with required asterisk */}
        <div className="w-full font-normal text-[14px] leading-[14px]">
          {props.label} <span className="text-red-600">*</span>
        </div>

        {/* Input field with placeholder */}
        <div className="w-full mt-[8px] mb-[20px]">
          <input
            type={props.type} // Dynamic input type (text, password, etc.)
            className="w-full border-[#D7DADC] border-[1px] rounded-[8px] px-[16px] py-[12px]"
            placeholder={props.ph} // Placeholder text for the input
          />
        </div>
      </div>
    </>
  );
};

export default SmallInput;
