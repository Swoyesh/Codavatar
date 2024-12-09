import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="mt-[40px] flex gap-10 flex-col 2xl:flex-row">
      <Card
        country="hk"
        title="Hong Kong"
        location="Branches"
        company="XYZ Pte. Ltd."
        description="The Infinite Loop Office, 404 Timeout Plaza"
      ></Card>
      <Card
        country="us"
        title="USA"
        location="Branches"
        company="XYZ Inc."
        description="Nulltown, Buglandia, 500 0xDEADBEE"
      ></Card>
    </div>
  );
};

export default Cards;
