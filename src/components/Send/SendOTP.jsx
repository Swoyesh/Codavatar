import React from "react";
import Footer from "../Footer";
import SendTitle from "./SendTitle";
import SendMain from "./SendMain";

const SendOTP = () => {
  return (
    <>
    <div className="flex overflow-hidden h-screen w-screen">
      <div className="flex flex-col items-center w-full">
        <div className=" pt-[95px]">
          <SendTitle />
        </div>

        <div className="pt-[97px]">
          <SendMain />
        </div>

        <div className="flex flex-row items-end h-full mb-2">
          <Footer />
        </div>
      </div>
      </div>
    </>
  );
};

export default SendOTP;
