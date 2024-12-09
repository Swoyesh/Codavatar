import React from "react";

const SendTitle = () => {
  return (
    <>
      <div className="flex items-center">
        {/* Logo image with responsive sizing */}
        <img
          className="logo w-12 h-17 2xl:w-16 2xl:h-16"
          src="/logos.png"
          alt="Logo"
        />
        {/* Title text with responsive font size */}
        <p className="px-3 text-2xl text-[#e41e26] font-bold 2xl:text-4xl">
          SwoyeshShrestha
        </p>
      </div>
    </>
  );
};

export default SendTitle;