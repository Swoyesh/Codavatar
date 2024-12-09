import React from "react";
import MiniInput from "./MiniInput"; // Importing the MiniInput component
import MiniSelect from "./MiniSelect"; // Importing the MiniSelect component
import UploadFile from "./UploadFile"; // Importing the UploadFile component

const FormInput = () => {
  return (
    <>
      {/* First set of inputs: Legal Name and Doing Business As */}
      <MiniInput
        label1="Legal Name"
        ph1="Legal Name"
        type1="text"
        label2="Doing business as"
        ph2="Doing business as"
        type2="text"
      ></MiniInput>

      {/* Second set of inputs: Company Registration Number and Random Registration Number */}
      <MiniInput
        label1="Company Registration Number"
        ph1="Company Registration Number"
        type1="number"
        label2="Random Registration Number"
        ph2="Random Registration Number"
        type2="number"
      ></MiniInput>

      {/* First dropdown set */}
      <MiniSelect
        label1="One Random Dropdown?"
        ph1="Options nai options"
        label2="Which dropdown would you like to select?"
        ph2="More Options"
      ></MiniSelect>

      {/* Second dropdown set */}
      <MiniSelect
        label1="Another Random Dropdown Appears"
        ph1="Return the options"
        label2="Account Usage Intent"
        ph2="Account Usage Intent"
      ></MiniSelect>

      {/* Textarea for "Purpose of using fake form" */}
      <div className="flex gap-8">
        <div className="flex flex-col w-[387px]">
          <div className="w-full font-normal text-[14px] leading-[14px]">
            Purpose of using fake form <span className="text-red-600">*</span>
          </div>
          <div className="w-full mt-[8px] mb-[20px]">
            <textarea
              type="text"
              className="w-full h-[100px] border-[#D7DADC] border-[1px] rounded-[8px] px-[16px] py-[12px]"
              placeholder="Purpose of using fake form"
            />
          </div>
        </div>

        {/* Textarea for "Ek description toh banta hai" */}
        <div className="flex flex-col w-[387px]">
          <div className="w-full font-normal text-[14px] leading-[14px]">
            Ek description toh banta hai <span className="text-red-600">*</span>
          </div>
          <div className="w-full mt-[8px] mb-[20px]">
            <textarea
              type="text"
              className="w-full h-[100px] border-[#D7DADC] border-[1px] rounded-[8px] px-[16px] py-[12px]"
              placeholder="Product Description"
            />
          </div>
        </div>
      </div>

      {/* Third set of inputs: Random count per month and Expected total visits */}
      <MiniInput
        label1="Random count per month"
        ph1="Put the value to get the answer"
        type1="number"
        label2="Expected total visits in this page"
        ph2="In Number"
        type2="number"
      ></MiniInput>

      {/* Email input field */}
      <div className="flex flex-col w-[387px]">
        <div className="w-full font-normal text-[14px] leading-[14px]">
          Contact email <span className="text-red-600">*</span>
        </div>
        <div className="w-full mt-[8px] mb-[20px]">
          <input
            type="email"
            className="w-full border-[#D7DADC] border-[1px] rounded-[8px] px-[16px] py-[12px]"
            placeholder="Contact email"
          />
        </div>
      </div>

      {/* File Upload for Certificate of Incorporation */}
      <div className="mt-[40px]">
        <UploadFile
          title="Certificate of Incorporation"
          description="Upload the incorporation certificate"
        ></UploadFile>
      </div>

      {/* File Upload for Company Logo */}
      <div className="mt-[40px]">
        <UploadFile
          title="Company Logo"
          description="Upload the company logo"
        ></UploadFile>
      </div>
    </>
  );
};

export default FormInput;
