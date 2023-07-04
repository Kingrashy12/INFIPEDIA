import React from "react";
import { StyledVCommentsImg } from "../../styles/components/comments/videocomeents";
import { PlaceholderImage } from "../../asset";
import { DateFormatter, HeaderThree, Libography } from "../../libs";

const VCommentItem = ({ comment, isLoading }) => {
  return (
    <div className="flex flex-col w-full gap-[12px]">
      <div className="flex items-center gap-[9px]">
        <StyledVCommentsImg
          src={comment?.userProfile?.url || PlaceholderImage}
        />
        <Libography fontSofia text={comment?.name} />
        <DateFormatter item={comment} className="translate-y-0" />
      </div>
      <HeaderThree fontSofia text={comment?.text} />
    </div>
  );
};

export default VCommentItem;
