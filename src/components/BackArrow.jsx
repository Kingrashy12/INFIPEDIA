import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const BackArrow = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex gap-1 items-center cursor-pointer"
      onClick={() => navigate(-1)}
    >
      <HiArrowNarrowLeft size={25} />
    </div>
  );
};

export default BackArrow;
