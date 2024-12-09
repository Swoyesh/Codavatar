import React from "react";
import { useLocation } from "react-router-dom";

// External font link (Inter font)
<link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>;

const Subtitle = () => {
  // Get email from the router state
  let location = useLocation();
  const email = location.state?.email;

  // Mask part of the email for privacy
  const end_index = email.indexOf("@");
  const substring = email.slice(1, end_index - 1);
  const final_email = email.replace(substring, "*".repeat(substring.length));

  return (
    <>
      <div className="font-sans text-[32px] font-bold h-[40px] leading-[40px]">
        Verify your Email
      </div>
      <div className="font-sans text-[16px] font-normal h-[24px] text-[#646464] leading-[24px]">
        Please enter the 6 digit code we just sent to {final_email}
      </div>
    </>
  );
};

export default Subtitle;