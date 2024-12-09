import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const PBar = () => {
  // Steps for the progress bar
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

  const currentStep = 1; // Current step index

  return (
    <div className="progress-container w-[1120px] relative">
      {/* Progress bar component */}
      <ProgressBar
        percent={(currentStep / (steps.length - 1)) * 100} // Calculate the percentage based on current step
        filledBackground="linear-gradient(to right, #4caf50, #4caf50)" // Green background for completed steps
        height={3} // Height of the progress bar
      >
        {/* Map through the steps array and create individual step components */}
        {steps.map((step, index) => (
          <Step key={index}>
            {({ accomplished }) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {/* Circle indicator for each step */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    backgroundColor: accomplished ? "#4caf50" : "white", // Green for accomplished steps
                    border:
                      accomplished || index === currentStep
                        ? "3px solid #4caf50" // Green border for accomplished or current step
                        : "3px solid #d3d3d3", // Light gray border for other steps
                  }}
                >
                  {/* Checkmark icon for accomplished steps */}
                  <span
                    style={{
                      display: accomplished ? "" : "none",
                      fontSize: "8px",
                      color: "white",
                    }}
                  >
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  </span>
                </div>

                {/* Step label text */}
                <p
                  className="absolute mt-[2px] text-[12px]"
                  style={{
                    color: index === currentStep ? "#000" : "#d3d3d3", // Black for current step, gray for others
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
