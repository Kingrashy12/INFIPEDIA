import { Skeleton } from "@mui/material";
import React from "react";
import { IconBase } from "react-icons/lib";

const IconWrap = ({
  isLoading,
  size,
  color,
  className,
  icon,
  loadingHeight,
  loadingWidth,
  title,
  hasText,
}) => {
  return (
    <div title={title}>
      {isLoading ? (
        <Skeleton variant="text" width={loadingWidth} height={loadingHeight} />
      ) : (
        <div className="flex flex-col">
          <IconBase className={`${className}`} color={color}>
            <>{icon}</>
          </IconBase>
          <>{hasText && hasText}</>
        </div>
      )}
    </div>
  );
};

export default IconWrap;
