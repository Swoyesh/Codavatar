import React from "react";
import Title from "./Title";
import Main from "./Main";
import Footer from "./Footer"

const VefiryOTP = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col items-start bg-red-800 w-2/4 h-full">
      
      </div>
      <div className="flex flex-col items-start mt[95px] h-full ml-[133px] w-2/4 overflow-x-hidden">
        <Title></Title>
        <Main></Main>
        <div className="w-[519px] h-screen ">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default VefiryOTP;
