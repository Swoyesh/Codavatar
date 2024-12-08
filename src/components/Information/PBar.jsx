import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const PBar = () => {
  const steps = [
    "Business Type",
    "Business Details",
    "Authorized Representative",
    "Business Owners",
    "Company Directors",
    "Support Information",
    "Add Details",
    "Complete Registration",
  ];

  const currentStep = 1; 

  return (
    <div className="progress-container w-[1120px] relative">
        <div></div>
      <ProgressBar
        percent={(currentStep / (steps.length - 1)) * 100}
        filledBackground="linear-gradient(to right, #4caf50, #4caf50)"
        height={3} 
        
      >
        {steps.map((step, index) => (
          <Step key={index}>
            {({ accomplished }) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative"
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    backgroundColor: accomplished ? "#4caf50" : "white",
                    border: accomplished | index == currentStep ? "3px solid #4caf50" : "3px solid #d3d3d3",
                  }}
                ><span style={{
                  display:accomplished ? "": "none",
                  fontSize: "8px",
                  color: "white"
                }}
                  ><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span></div>
                <p
                  className="absolute mt-[2px] text-[12px]"
                  style={{
                    color: index === currentStep ? "#000" : "#d3d3d3",
                    top: "24px", 
                  }}
                >
                  {step}
                </p>
              </div>
            )}
          </Step>
        ))}
      </ProgressBar>
    </div>
  );
};

export default PBar;