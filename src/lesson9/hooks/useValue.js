import React, { useState } from "react";

const useValue = (b) => {
  const [value, setValue] = useState(1);
  const decrease = () => {
    setValue(value - b);
  };
  const increase = () => {
    setValue(value + b);
  };
  return [value, increase, decrease];
};

export default useValue;
