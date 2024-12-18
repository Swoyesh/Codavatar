import React from "react";

const SmallSelect = (props) => {
  return (
    <div className="flex flex-col w-[387px]">
      {/* Label with a red asterisk indicating required field */}
      <label className="w-full font-normal text-[14px] leading-[14px]">
        {props.label} <span className="text-red-600">*</span>
      </label>

      {/* Dropdown select with placeholder */}
      <select
        name={props.label}
        className="w-full mt-[8px] mb-[20px] border border-[#D7DADC] rounded-[8px] px-[16px] py-[12px] text-[#9B9B9B]"
      >
        <option value="1">{props.ph}</option>
      </select>
    </div>
  );
};

export default SmallSelect;
