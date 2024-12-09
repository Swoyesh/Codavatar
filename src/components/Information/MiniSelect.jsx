import React from "react";
import SmallSelect from "./SmallSelect"; // Importing the SmallSelect component for usage in MiniSelect

const MiniSelect = (props) => {
  return (
    <div className="flex gap-8"> {/* Flex container with a gap of 8px between child elements */}
      {/* Passing props to two SmallSelect components for label and placeholder */}
      <SmallSelect label={props.label1} ph={props.ph1} />
      <SmallSelect label={props.label2} ph={props.ph2} />
    </div>
  );
};

export default MiniSelect;
