import React from "react";
import { Skeleton } from "@mui/material";
import { LinkBoTagWrapp } from "../../styles/libs/texts/Link";

const LinkPography = ({
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
}) => {
  return (
    <LinkBoTagWrapp>
      {isLoading ? (
        <Skeleton
          variant={variant}
          width={loadingWidth}
          height={loadingHeight}
        />
      ) : (
        <div className="flex flex-col">
          <a
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
            {text}
          </a>
          <>{underText && underText}</>
        </div>
      )}
    </LinkBoTagWrapp>
  );
};

export default LinkPography;
