import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Button = ({ isEnabled }) => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(40);
  const [display1, setDisplay1] = useState("");
  const [display2, setDisplay2] = useState("hidden");

  // Timer logic to handle countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) return prevSeconds - 1;
        if (minutes > 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          return 59;
        } else {
          clearInterval(timer);
          setDisplay1("hidden");
          setDisplay2("");
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, [minutes]);

  return (
    <>
      <div className="w-[519px] h-[48px]">
        <Link to={isEnabled ? "/Information" : "#"}>
          <button
            className={`h-full xl:w-full p-[14px] rounded-[10px] bg-[#e50000] opacity-80 text-white transition-colors duration-500 ${isEnabled ? "hover:bg-[#c42f2f]" : "bg-[#e50000] cursor-not-allowed"} md:w-3/4 sm:w-1/2`}
            disabled={!isEnabled}
          >
            Verify
          </button>
        </Link>
      </div>
      <div className={`mt-[16px] font-normal text-[16px] leading-[24px] text-[#646464] ${display1}`}>
        Wait {minutes}:{seconds < 10 ? `0${seconds}` : seconds} seconds before requesting a new code.
      </div>
      <div className={`mt-[16px] font-normal text-[16px] leading-[24px] text-[#646464] ${display2}`}>
        Didn't receive a code?{" "}
        <a href="#" className="text-sky-400">
          Resend code
        </a>
      </div>
    </>
  );
};

export default Button;
