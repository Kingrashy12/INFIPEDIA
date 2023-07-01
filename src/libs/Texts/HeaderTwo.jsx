import React from "react";
import { HeaderTwoText } from "../../styles/libs/texts/HeaderTexts";
import { Skeleton } from "@mui/material";

const HeaderTwo = ({
  className,
  fontSemiBold,
  fontBold,
  fontMedium,
  fontExtraBold,
  isLoading,
  variant,
  loadingWidth,
  loadingHeight,
  text,
  fontSofia,
  fontPoppins,
  fontShare,
  onClick,
}) => {
  return (
    <HeaderTwoText>
      {isLoading ? (
        <Skeleton
          variant={variant}
          width={loadingWidth}
          height={loadingHeight}
        />
      ) : (
        <h2
          onClick={onClick}
          className={`${className} ${
            fontMedium ? "font-medium" : "font-normal"
          } ${fontSemiBold ? "font-semibold" : "font-normal"} ${
            fontExtraBold ? "font-extrabold" : "font-normal"
          } ${fontBold ? "font-bold" : "font-normal"} ${
            fontSofia && "font-sofia"
          } ${fontPoppins && "font-poppin"} ${fontShare && "font-share"}`}
        >
          {text}
        </h2>
      )}
    </HeaderTwoText>
  );
};

export default HeaderTwo;
