import React from "react";
import { HeaderFourText } from "../../styles/libs/texts/HeaderTexts";
import { Skeleton } from "@mui/material";

const HeaderFour = ({
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
    <HeaderFourText>
      {isLoading ? (
        <Skeleton
          variant={variant}
          width={loadingWidth}
          height={loadingHeight}
        />
      ) : (
        <h4
          className={`${className} ${
            fontMedium ? "font-medium" : "font-normal"
          } ${fontSemiBold ? "font-semibold" : "font-normal"} ${
            fontExtraBold ? "font-extrabold" : "font-normal"
          } ${fontBold ? "font-bold" : "font-normal"} ${
            fontSofia && "font-sofia"
          } ${fontPoppins && "font-poppin"} ${fontShare && "font-share"}`}
        >
          {text}
        </h4>
      )}
    </HeaderFourText>
  );
};

export default HeaderFour;
