import React from "react";
import { StyledVCommentsImg } from "../../styles/components/comments/videocomeents";
import { PlaceholderImage } from "../../asset";
import { DateFormatter, HeaderThree, Libography } from "../../libs";
import { Skeleton } from "@mui/material";

const VCommentItem = ({ comment, isLoading }) => {
  return (
    <div className="flex flex-col w-full gap-[12px]">
      <div className="flex items-center gap-[9px]">
        {isLoading ? (
          <Skeleton variant="circular" width="40px" height="40px" />
        ) : (
          <StyledVCommentsImg
            src={comment?.userProfile?.url || PlaceholderImage}
          />
        )}
        <Libography
          fontSofia
          text={comment?.name}
          isLoading={isLoading}
          loadingHeight={"25px"}
          loadingWidth={"100px"}
        />
        <DateFormatter
          item={comment}
          className="translate-y-0"
          isLoading={isLoading}
          loadingHeight={"20px"}
          loadingWidth={"80px"}
        />
      </div>
      <HeaderThree
        fontSofia
        text={comment?.text}
        isLoading={isLoading}
        loadingHeight={"30px"}
        loadingWidth={"99%"}
      />
    </div>
  );
};

export default VCommentItem;
