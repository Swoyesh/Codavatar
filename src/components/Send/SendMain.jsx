import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SendMain = () => {
  const [display, setDisplay] = useState("hidden");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendOTP = () => {
    if (!emailRegex.test(email)) {
      setDisplay(""); // Display error message for invalid email
    } else {
      setDisplay("hidden");
      navigate("/VerifyOTP", { state: { email } }); // Navigate to VerifyOTP with email state
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center">
      {/* Email input label with motion effect */}
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <label className="font-sans text-[32px] font-bold h-[40px] leading-[40px]">
          Enter your email
        </label>
      </motion.div>

      <br />
      {/* Email input field with motion effect */}
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="w-full"
      >
        <input
          type="email"
          className="border rounded-md border-[#636567] text-center p-2 w-full"
          id="input"
          value={email}
          onChange={handleChange}
        />
      </motion.div>

      <p className={`mt-6 ${display} font-normal text-[#e50000]`}>
        Invalid Email!!
      </p>
      <div className="h-full w-full flex flex-col items-center">
        {/* Send OTP button with motion effect */}
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <button
            className="mt-6 w-full p-[14px] rounded-[10px] bg-[#e50000] opacity-80 text-white transition-colors duration-500 hover:bg-red-800"
            onClick={handleSendOTP}
          >
            Send OTP
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SendMain;
