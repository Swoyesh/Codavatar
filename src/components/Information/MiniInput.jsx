import React from "react";
import SmallInput from "./SmallInput";

const MiniInput = (props) => {
  return (
    <div className="flex gap-8">
      <SmallInput
        label={props.label1}
        ph={props.ph1}
        type={props.type1}
      ></SmallInput>
      <SmallInput
        label={props.label2}
        ph={props.ph2}
        type={props.type2}
      ></SmallInput>
    </div>
  );
};

export default MiniInput;
