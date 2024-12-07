import React from "react";

const SmallInput = (props) => {
  return (
    <>
      <div className="flex flex-col w-[387px]">
        <div className="w-full font-normal text-[14px] leading-[14px]">
          {props.label} <span className="text-red-600">*</span>
        </div>
        <div className="w-full mt-[8px] mb-[20px]">
          <input
            type={props.type}
            className="w-full border-[#D7DADC] border-[1px] rounded-[8px] px-[16px] py-[12px]"
            placeholder={props.ph}
          />
        </div>
      </div>
    </>
  );
};

export default SmallInput;
