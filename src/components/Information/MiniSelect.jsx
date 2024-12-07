import React from "react";
import SmallSelect from "./SmallSelect";

const MiniSelect = (props) => {
  return (
    <div className="flex gap-8">
      <SmallSelect label={props.label1} ph={props.ph1} />
      <SmallSelect label={props.label2} ph={props.ph2} />
    </div>
  );
};

export default MiniSelect;
