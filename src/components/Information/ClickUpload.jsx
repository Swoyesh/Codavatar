import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const ClickUpload = () => {
  return (
    <div className="border-[1px] border-[#E5E7EA] rounded-[11px] flex flex-col border-dashed items-center py-[36px] px-[32px]">
      <div className="h-[52px] w-[52px] bg-[#F6F6F6] rounded-full flex justify-center items-center">
        <FontAwesomeIcon icon={faFile} className="text-[24px]" />
      </div>
      <div className="mt-[20px] ">
        <div className="text-center text-[#636567] text-[14px] font-normal">
          <span className="text-gray-700 text-[14px] font-normal leading=[18px] underline decoration-gray-700 underline-offset-2">Click to upload</span> or drag and drop
        </div>
        <div className="mt-[8px] text-[#636567] text-[14px] font-normal text-center leading-[18px]">
          Maximum file size of 50 MB
        </div>
      </div>
    </div>
  );
};

export default ClickUpload;
