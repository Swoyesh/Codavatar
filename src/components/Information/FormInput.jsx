import React from "react";
import MiniInput from "./MiniInput";
import MiniSelect from "./MiniSelect";
import UploadFile from "./UploadFile";

const FormInput = () => {
  return (
    <>
    <MiniInput
      label1="Legal Name"
      ph1="Legal Name"
      type1="text"
      label2="Doing business as"
      ph2="Doing business as"
      type2="text"
    ></MiniInput>
    <MiniInput
      label1="Company Registration Number"
      ph1="Company Registration Number"
      type1="number"
      label2="Random Registration Number"
      ph2="Random Registration Number"
      type2="number"
    ></MiniInput>
    <MiniSelect
      label1="One Random Dropdown?"
      ph1="Options nai options"
      label2="Which dropdown would you like to select?"
      ph2="More Options"
    ></MiniSelect>
    <MiniSelect
      label1="Another Random Dropdown Appears"
      ph1="Return the options"
      label2="Account Usage Intent"
      ph2="Account Usage Intent"
    ></MiniSelect>
    <div className="flex gap-8">
    <div className="flex flex-col w-[387px]">
        <div className="w-full font-normal text-[14px] leading-[14px]">
          Purpose of using fake form <span className="text-red-600">*</span>
        </div>
        <div className="w-full mt-[8px] mb-[20px]">
          <textarea
            type='text'
            className="w-full h-[100px] border-[#D7DADC] border-[1px] rounded-[8px] px-[16px] py-[12px]"
            placeholder='Purpose of using fake form'
          />
        </div>
      </div>
    <div className="flex flex-col w-[387px]">
        <div className="w-full font-normal text-[14px] leading-[14px]">
          Ek description toh banta hai <span className="text-red-600">*</span>
        </div>
        <div className="w-full mt-[8px] mb-[20px]">
          <textarea
            type='text'
            className="w-full h-[100px] border-[#D7DADC] border-[1px] rounded-[8px] px-[16px] py-[12px]"
            placeholder='Product Description'
          />
        </div>
      </div>
      </div>
    <MiniInput
      label1="Random count per month"
      ph1="Put the value to get the answer"
      type1="number"
      label2="Expected total visits in this page"
      ph2="In Number"
      type2="number"
    ></MiniInput>
    <div className="flex flex-col w-[387px]">
        <div className="w-full font-normal text-[14px] leading-[14px]">
          Contact email <span className="text-red-600">*</span>
        </div>
        <div className="w-full mt-[8px] mb-[20px]">
          <input
            type='email'
            className="w-full border-[#D7DADC] border-[1px] rounded-[8px] px-[16px] py-[12px]"
            placeholder='Contact email'
          />
        </div>
      </div>
      <div className="mt-[40px]">
        <UploadFile title = "Certificate of Incorporation" description = "Upload the incorporation certificate"></UploadFile>
      </div>
      <div className="mt-[40px]">
        <UploadFile title = "Company Logo" description = "Upload the company logo"></UploadFile>
      </div>
    </>
  );
};

export default FormInput;
