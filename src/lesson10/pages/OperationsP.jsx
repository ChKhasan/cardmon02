import React from "react";
import { OpertCard } from "../comps";
import { useContext } from "react";
import { Context } from "..";

const OperationsP = () => {
  const { costs } = useContext(Context);
  return (
    <div className="container">
      {costs.map((item) => (
        <OpertCard {...item} />
      ))}
    </div>
  );
};

export default OperationsP;
