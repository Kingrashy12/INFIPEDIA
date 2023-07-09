import React from "react";
import { Skeleton } from "@mui/material";
import {
  LinkBoTagWrapp,
  TruncatedTextStyled,
} from "../../styles/libs/texts/Link";
import Libography from "./Libography";

const TruncatedText = ({
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
  url,
  download,
  target,
  rel,
  underText,
  onClick,
  maxLength,
  underClick,
}) => {
  const textReducer =
    text?.length > maxLength ? `${text.slice(0, maxLength)}....` : text;
  return (
    <TruncatedTextStyled>
      {isLoading ? (
        <Skeleton
          variant={variant}
          width={loadingWidth}
          height={loadingHeight}
        />
      ) : (
        <div className="flex flex-col">
          <pre
            onClick={onClick}
            target={target}
            rel={rel}
            href={url}
            download={download}
            className={`${className} ${
              fontMedium ? "font-medium" : "font-normal"
            } ${fontSemiBold ? "font-semibold" : "font-normal"} ${
              fontExtraBold ? "font-extrabold" : "font-normal"
            } ${fontBold ? "font-bold" : "font-normal"} ${
              fontSofia && "font-sofia"
            } ${fontPoppins && "font-poppin"} ${fontShare && "font-share"}`}
          >
            {textReducer}
          </pre>
          <p
            onClick={underClick}
            className="cursor-pointer hover:underline font-semibold p-[1px]"
          >
            {text?.length > 60 ? underText : ""}
          </p>
        </div>
      )}
    </TruncatedTextStyled>
  );
};

export default TruncatedText;
