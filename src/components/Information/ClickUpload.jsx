import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from "react-dropzone";

const ClickUpload = () => {
  const [file, setFile] = useState(null);

  // Handle file drop or file selection
  const handleFile = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const validMimeTypes = ["image/jpeg", "image/png", "application/pdf"];
    
    if (validMimeTypes.includes(file.type)) {
      setFile(file);
      console.log(file);
    } else {
      console.warn("Invalid file type:", file.type);
    }
  };

  // Initialize dropzone
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleFile,
    accept: "image/*,application/pdf", // Ensure valid MIME types
    multiple: false,
  });

  // Trigger file input dialog
  const triggerFileInput = () => {
    document.getElementById("fileInp").click();
  };

  return (
    <div
      className="border-[1px] border-[#E5E7EA] rounded-[11px] flex flex-col border-dashed items-center py-[36px] px-[32px]"
      {...getRootProps()} // Dropzone props
    >
      {/* File icon */}
      <div className="h-[52px] w-[52px] bg-[#F6F6F6] rounded-full flex justify-center items-center">
        <FontAwesomeIcon icon={faFile} className="text-[24px]" />
      </div>

      {/* Instructions */}
      <div className="mt-[20px]">
        <div className="text-center text-[#636567] text-[14px] font-normal">
          <button
            onClick={triggerFileInput}
            className="text-gray-700 text-[14px] font-normal leading-[18px] underline decoration-gray-700 underline-offset-2"
          >
            Click to upload
          </button>
          <span className="ml-[5px]">or</span>
          <input
            className="hidden"
            type="file"
            id="fileInp"
            {...getInputProps()} // Link input element to dropzone
            onChange={(e) => handleFile(e.target.files)}
          />
          <span className="mx-[5px]">drag and drop</span>
        </div>
        <div className="mt-[8px] text-[#636567] text-[14px] font-normal text-center leading-[18px]">
          Maximum file size of 50 MB
        </div>
      </div>
    </div>
  );
};

export default ClickUpload;
