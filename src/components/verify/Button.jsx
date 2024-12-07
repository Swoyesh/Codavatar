import React, { useState, useEffect } from "react";

const Button = () => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(40);

  const [display1, setDisplay1] = useState("");
  const [display2, setDisplay2] = useState("hidden");

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else if (minutes > 0) {
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

    return () => clearInterval(timer);
  }, [minutes]); 

  return (
    <>
      <div className="w-[519px] h-[48px]">
        <button className="h-full w-full p-[14px] rounded-[10px] bg-[#e50000] opacity-80 text-white transition-colors duration-500 hover:bg-red-800">
          Verify
        </button>
      </div>
      <div
        className={`mt-[16px] font-normal text-[16px] leading-[24px] text-[#646464] ${display1}`}
      >
        Wait {minutes}:{seconds < 10 ? `0${seconds}` : seconds} seconds before
        requesting a new code.
      </div>
      <div
        className={`mt-[16px] font-normal text-[16px] leading-[24px] text-[#646464] ${display2}`}
      >
        Didn't recieve a code?{" "}
        <a href="#" className="text-sky-400">
          Resend code
        </a>
      </div>
    </>
  );
};

export default Button;
