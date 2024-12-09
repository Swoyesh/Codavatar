import React from "react";
import Form from "./Form"; // Importing the Form component
import PBar from "./PBar"; // Importing the ProgressBar component
import { motion } from "framer-motion"; // Importing motion for animations

const InfoInput = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FAFAFA] h-full pb-[80px]"> 
        {/* Main container with flex column layout */}
        
        <motion.div
          animate={{ opacity: 1 }} // Fade in effect for title
          initial={{ opacity: 0 }} // Initial opacity
          transition={{ duration: 2 }} // Animation duration
          className="mt-[32px] font-semibold text-[20px] leading-[24px] text-center h-[24px] 2xl:w-[1280px]"
        >
          Multi-Step Process Form Assignment
        </motion.div>

        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 2, delay: 0.5 }} // Delay before progress bar animation
          className="mt-[48px]"
        >
          <PBar></PBar> {/* Progress bar component */}
        </motion.div>

        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 2, delay: 1 }} // Delay before form section animation
          className="mt-[112px] flex flex-col bg-[white] px-[48px] py-[56px]"
        >
          <Form></Form> {/* Form component for input fields */}
        </motion.div>
      </div>
    </>
  );
};

export default InfoInput;
