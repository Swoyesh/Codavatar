import React from "react";
import { useLocation } from "react-router-dom";
<link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>;

const Subtitle = () => {
  let location = useLocation()
  const email = location.state?.email
  return (
    <>
      <div className="font-sans text-[32px] font-bold h-[40px] leading-[40px]">
        Verify your Email
      </div>
      <div className="font-sans text-[16px] font-normal h-[24px] text-[#646464] leading-[24px]">
        Please enter the 6 digit code we just sent to {email}
      </div>
    </>
  );
};

export default Subtitle;
