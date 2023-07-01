import { Skeleton } from "@mui/material";
import React from "react";

const Image = ({
  isLoading,
  className,
  style,
  src,
  alt,
  loadingWidth,
  loadingHeight,
  variant,
  onClick,
}) => {
  return (
    <>
      {isLoading ? (
        <Skeleton
          variant={variant}
          width={loadingWidth}
          height={loadingHeight}
        />
      ) : (
        <img
          className={`${className}`}
          onClick={onClick}
          style={style}
          src={src}
          alt={alt}
        />
      )}
    </>
  );
};

export default Image;
