import React from "react";
import { HeaderThreeText } from "../../styles/libs/texts/HeaderTexts";
import { Skeleton } from "@mui/material";

const HeaderThree = ({
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
}) => {
  return (
    <HeaderThreeText>
      {isLoading ? (
        <Skeleton
          variant={variant}
          width={loadingWidth}
          height={loadingHeight}
        />
      ) : (
        <h3
          className={`${className} ${
            fontMedium ? "font-medium" : "font-normal"
          } ${fontSemiBold ? "font-semibold" : "font-normal"} ${
            fontExtraBold ? "font-extrabold" : "font-normal"
          } ${fontBold ? "font-bold" : "font-normal"} ${
            fontSofia && "font-sofia"
          } ${fontPoppins && "font-poppin"} ${fontShare && "font-share"}`}
        >
          {text}
        </h3>
      )}
    </HeaderThreeText>
  );
};

export default HeaderThree;
