import React from "react";
import ClickUpload from "./ClickUpload";

const UploadFile = (props) => {
  return (
    <div>
      {/* Displaying title with a red asterisk indicating required field */}
      <div className="w-full font-[550] text-[16px] leading-[24px]">
        {props.title} <span className="text-red-600">*</span>
      </div>
      {/* Description text with muted color */}
      <div className="mt-[6px] text-[#636567] leading-[20px] font-[450]">
        {props.description}
      </div>
      <div className="mt-[24px]">
        {/* Rendering the ClickUpload component */}
        <ClickUpload></ClickUpload>
      </div>
    </div>
  );
};

export default UploadFile;
