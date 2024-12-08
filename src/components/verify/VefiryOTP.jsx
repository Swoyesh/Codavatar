import React from "react";
import Title from "./Title";
import Main from "./Main";
import Footer from "../Footer";
import Back from "./Back";
import Card from "./Card";
import Cards from "./Cards";

const VefiryOTP = () => {
  return (
    <div className="flex h-full w-full overflow-hidden 2xl:h-screen 2xl:w-screen">
      {/* Left Section */}
      <div className="relative w-full h-full bg-gradient-to-r from-gray-600 via-gray-600 to-gray-700 pb-10 2xl:p-0">
        {/* Background Circle */}
        <div className="fixed left-[10%] top-[90%] 2xl:top-3/4 sl:top transform -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] 2xl:h-[900px] 2xl:w-[900px] bg-gradient-to-tl from-[#e49815] via-[#a113c9] to-[#2000d3] rounded-full shadow-3xl opacity-90 z-10"></div>

        {/* Main Content */}
        <div className="flex flex-col items-start w-full h-full">
          {/* Back Button */}
          <div className="cursor-pointer mt-[48px] ml-[60.17px]">
            <Back />
          </div>

          {/* Title */}
          <div className="z-20 mt-[126px] mx-[80px] w-full h-[40px] text-[32px] font-semibold text-white flex items-start justify-start 2xl:justify-center 2xl:w-[788px]">
            Layout Cards
          </div>

          {/* Card Section */}
          <div className="flex justify-center w-full">
            <div className="z-20 flex flex-col items-center mt-[56px]">
              <Card
                country="sg"
                title="Singapore"
                location="Head Office"
                company="XYZ Pvt. Ltd."
                description="Road to nowhere, 06-404, 500 Internal Error"
              />
              <Cards />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-start w-full overflow-x-hidden ml-10 2xl:ml-[133px]">
        <div className=" pt-[95px]">
          <Title />
        </div>

        <div className="pt-[97px]">
          <Main />
        </div>

        <div className="flex flex-row items-end w-[519px] h-full mb-2 2xl:mb-[32px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default VefiryOTP;
