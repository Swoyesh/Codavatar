import React from "react";

const Title = () => {
  return (
    <>
      {/* Container for logo and title */}
      <div className="flex items-center">
        
        {/* Logo image */}
        <img className="logo w-12 h-17" src="/logos.png" alt="Logo" />
        
        {/* Title text */}
        <p className="px-3 text-2xl text-[#e41e26] font-bold">
          SwoyeshShrestha
        </p>
      </div>
    </>
  );
};

export default Title;