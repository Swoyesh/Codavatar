import React from "react";
import Subtitle from "./Subtitle";
import Input from "./Input";
import Button from "./Button";

const Main = () => {
  return (
    <div className="mt-[97px] w-[519px] h-[284px]">
      <Subtitle></Subtitle>
      <div className="mt-[48px]">
        <Input></Input>
      </div>
      <div className="mt-[24px]">
        <Button></Button>
      </div>
    </div>
  );
};

export default Main;
