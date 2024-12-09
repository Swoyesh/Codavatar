import React from "react";
import FormInput from "./FormInput"; // Importing the FormInput component
import { motion } from "framer-motion"; // Importing framer-motion for animations

const Form = () => {
  return (
    <>
      {/* Title and description of the form */}
      <div className="flex flex-col">
        <div className="font-[550] text-[20px] leading-[24px] text-[#1D1D22]">
          Tell us more about your business
        </div>
        <div className="flext justify-evenly mt-[8px] font-[450] text-[13px] leading-[20px] text-[#636567]">
          <span className="text-justify inline-block">
            Your info is like the Wi-Fi password—totally crucial for keeping
            things running, impressing the money folks, and making sure you
            <br></br>get top-notch service without any buffering!
          </span>
        </div>
      </div>

      {/* Form input fields */}
      <div className="mt-[40px] flex flex-col">
        <FormInput></FormInput> {/* Embedding the FormInput component here */}
      </div>

      {/* Animated buttons: Previous and Next */}
      <motion.div
        initial={{ opacity: 0 }} // Starting opacity for animation
        whileInView={{ opacity: 1 }} // Ending opacity when in view
        viewport={{ once: true, amount: 0.5 }} // Ensures the animation happens once when half of the element is in view
        transition={{ duration: 2 }} // Animation duration
        className="flex justify-between mt-[40px]"
      >
        {/* Previous Button */}
        <button className="flex justify-center items-center h-[48px] w-[95px] border-[1px] rounded-[10px] border-[#1D1D22] leading-[20px] text-[16px] font-[550] transition-colors duration-500 hover:bg-[#e2e2e2]">
          Previous
        </button>

        {/* Next Button */}
        <button className="flex justify-center items-center h-[48px] w-[95px] border-[1px] rounded-[10px] border-[#E50101] bg-[#E50101] text-[white] leading-[20px] text-[16px] font-[550] transition-colors duration-500 hover:bg-red-800">
          Next
        </button>
      </motion.div>
    </>
  );
};

export default Form;
