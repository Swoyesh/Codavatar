import React from "react";

const Card = (props) => {
  return (
    <>
      {/* Card container with a radial gradient background */}
      <div className="bg-gradient-radial from-[rgba(255,255,255,0.2)] to-[rgba(9,0,23,0.2)] px-[28px] py-[24px] rounded-[12px] border-[rgba(9,0,23,0.4)] border-[1px] w-[340px] h-[236px] 2xl:overflow-hidden">
        
        {/* Flag icon for the country passed in props */}
        <span
          className={`fi fi-${props.country} rounded-md text-[38px]`}
          title={props.title}
        ></span>
        
        {/* Title of the card (e.g., city or country name) */}
        <div className="font-semibold text-[18px] leading-[24px] text-[#F9F9F9] mt-2">
          {props.title}
        </div>
        
        {/* Location of the company/branch */}
        <div className="font-normal text-[14px] text-[#E0E0E0]">
          {props.location}
        </div>
        
        <div className="mt-[24px]">
          {/* Company name */}
          <div className="text-[#E0E0E0] font-normal text-[14px] leading-[18px]">
            {props.company}
          </div>
          
          {/* Description or address of the location */}
          <div className="w-[284px] mt-2 text-[#E0E0E0]">
            {props.description}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
