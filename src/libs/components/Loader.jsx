import { Backdrop } from "@mui/material";
import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader = ({ isLoading }) => {
  return (
    <Backdrop open={isLoading} sx={{ zIndex: 80 }}>
      <AiOutlineLoading3Quarters className="text-7xl tryloader" />
    </Backdrop>
  );
};

export default Loader;
