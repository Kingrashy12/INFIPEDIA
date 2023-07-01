import { Skeleton } from "@mui/material";
import React from "react";

const Span = ({
  isLoading,
  className,
  text,
  fontMedium,
  fontSemiBold,
  fontBold,
  fontExtra,
  fontPoppins,
  fontSofia,
  fontShareMono,
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
        <span
          onClick={onClick}
          className={`${className} ${fontPoppins && "font-poppin"} ${
            fontMedium ? "font-medium" : "font-normal"
          } ${fontSemiBold ? "font-semibold" : "font-normal"} ${
            fontBold ? "font-bold" : "font-normal"
          } ${fontExtra ? "font-extrabold" : "font-normal"} ${
            fontShareMono && "font-share"
          } ${fontSofia && "font-sofia"}`}
        >
          {text}
        </span>
      )}
    </>
  );
};

export default Span;
