import React from "react";

const Footer = () => {
  return (
    // Footer container with text styling
    <div className="text-[#646464] text-center text-[14px]">
      By continuing, you're agreeing to Nobody's{" "}
      
      <a href="#" className="text-sky-400">
        Terms of Service
      </a>
      ,{" "}
      
      <a href="#" className="text-sky-400">
        Privacy Policy
      </a>
      ,<br />
      
      and{" "}
      <a href="#" className="text-sky-400">
        Cookie Policy
      </a>
      .
    </div>
  );
};

export default Footer;