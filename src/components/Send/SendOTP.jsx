import React from "react";
import Footer from "../Footer";
import SendTitle from "./SendTitle";
import SendMain from "./SendMain";
import { motion } from "framer-motion";

const SendOTP = () => {
  return (
    <>
      <div className="flex overflow-hidden h-screen w-screen">
        <div className="flex flex-col items-center w-full">
          {/* Title section with motion effect */}
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.75 }}
            className=" pt-[95px]"
          >
            <SendTitle />
          </motion.div>

          <div className="pt-[97px]">
            <SendMain />
          </div>

          {/* Footer section with motion effect */}
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.75, delay: 2 }}
            className="flex flex-row items-end h-full mb-2"
          >
            <Footer />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SendOTP;
