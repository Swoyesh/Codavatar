import React from "react";
import SmallSelect from "./SmallSelect"; // Importing the SmallSelect component to be used in MiniSelect

const MiniSelect = (props) => {
  return (
    <div className="flex gap-8"> {/* Flex container with a gap between the child elements */}
      {/* Render two SmallSelect components, passing props to each */}
      <SmallSelect label={props.label1} ph={props.ph1} />
      <SmallSelect label={props.label2} ph={props.ph2} />
    </div>
  );
};

export default MiniSelect;