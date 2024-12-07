import React from "react";
import Subtitle from "./Subtitle";
import Input from "./Input";
import Button from "./Button";

const Main = () => {
  return (
    <div className="w-[519px] h-[284px]">
      <Subtitle></Subtitle>
      <div className="pt-[48px]">
        <Input></Input>
      </div>
      <div className="pt-[24px]">
        <Button></Button>
      </div>
    </div>
  );
};

export default Main;
