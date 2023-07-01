import { Skeleton } from "@mui/material";
import React from "react";
import { RiLoader2Fill } from "react-icons/ri";

const Button = ({
  secondary,
  fullWidth,
  fit,
  primary,
  primaryOutlined,
  outlined,
  text,
  disabled,
  isLoading,
  onClick,
  onSubmit,
  fontBold,
  end,
  className,
  componentsLoading,
  variant,
  loadingHeight,
  loadingWidth,
  isCurrentBg,
  isCurrentBgOutlined,
}) => {
  return (
    <>
      {componentsLoading ? (
        <Skeleton
          variant={variant}
          width={loadingWidth}
          height={loadingHeight}
        />
      ) : (
        <button
          onSubmit={onSubmit}
          onClick={onClick}
          disabled={disabled}
          className={`${className} border-2 p-2 rounded-md outline-none justify-center font-bold disabled:opacity-70 font-sofia h-9 relative flex items-center hover:opacity-70 text-sm disabled:cursor-not-allowed cursor-pointer ${
            secondary ? "bg-black text-white border-none" : ""
          } ${outlined ? "bg-transparent border-black text-black" : ""} ${
            primary ? "bg-white text-black border-none" : ""
          } ${
            primaryOutlined ? "bg-transparent text-white border-white" : ""
          } ${fit ? "w-fit" : ""} ${fullWidth ? "w-full" : ""} ${
            fontBold ? "text-lg" : ""
          } ${end ? "justify-end ml-5 items-end self-end" : ""} ${
            isCurrentBg ? "border-none bg text-white" : ""
          } ${isCurrentBgOutlined ? "bgOutlined bg-transparent" : ""} `}
        >
          {isLoading ? (
            <RiLoader2Fill className="loader font-bold" size={18} />
          ) : (
            text
          )}
        </button>
      )}
    </>
  );
};

export default Button;
