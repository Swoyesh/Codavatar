import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      setDisplay("");
    } else {
      setDisplay("hidden"); 
      navigate("/VerifyOTP", { state: { email } });
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center">
      <label className="font-sans text-[32px] font-bold h-[40px] leading-[40px]">
        Enter your email
      </label>
      <br />
      <input
        type="email"
        className="border rounded-md border-[#636567] text-center p-2 w-full"
        id="input"
        value={email}
        onChange={handleChange}
      />
      <p className={`mt-6 ${display} font-normal text-[#e50000]`}>
        Invalid Email!!
      </p>
      <button
        className="mt-6 h-full w-full p-[14px] rounded-[10px] bg-[#e50000] opacity-80 text-white transition-colors duration-500 hover:bg-red-800"
        onClick={handleSendOTP}
      >
        Send OTP
      </button>
    </div>
  );
};

export default SendMain;