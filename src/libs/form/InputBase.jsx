import React from "react";
import { StyledInputBase } from "../../styles/libs/form/inputbase.styled";

const InputBase = ({ placeholder, className, value, onChange }) => {
  return (
    <StyledInputBase
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${className} p-2 font-semibold font-sofia`}
    />
  );
};

export default InputBase;
