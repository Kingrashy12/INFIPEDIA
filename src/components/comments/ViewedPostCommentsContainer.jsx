import React, { useState } from "react";
import { StyledViewedPostCommentSectionContainer } from "../../styles/components/community/viewedpost.styled";
import PostviewImage from "../user/info/postviewImage";
import { StyledViewUserDeatils } from "../../styles/components/post/view/view.styled";
import { DateFormatter, Libography, TruncatedText } from "../../libs";
import { MdVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ViewdPostImage from "../posts/ViewdPostImage";
import ViewdPostCommentImage from "./ViewPostCommentsImage";

const ViewedPostCommentsContainer = ({ comment, isLoading }) => {
  const navigate = useNavigate();
  const [max, setMax] = useState(70);
  const [less, setLess] = useState(false);

  function show() {
    setMax(1000);
    setLess(true);
  }
  function hide() {
    setMax(70);
    setLess(false);
  }

  const s = (
    <Libography text="See more" onClick={show} className="font-semibold" />
  );
  const h = (
    <Libography text="See less" onClick={hide} className="font-semibold" />
  );
  return (
    <StyledViewedPostCommentSectionContainer className="shadow shadow-slate-500">
      <StyledViewUserDeatils>
        <PostviewImage isLoading={isLoading} post={comment} />
        <div className="flex flex-col text-justify">
          <Libography
            fontBold
            className="text-lg hover:underline cursor-pointer"
            fontSofia
            loadingWidth="100px"
            loadingHeight="30px"
            text={comment?.name}
            isLoading={isLoading}
            onClick={() => navigate(`/${comment?.username}`)}
          />
          <DateFormatter
            item={comment}
            isLoading={isLoading}
            loadingHeight={"25px"}
            loadingWidth={"80px"}
          />
        </div>
        {comment?.verified ? (
          <MdVerified size={20} color="#f95f35" className="translate-y-1" />
        ) : (
          ""
        )}
      </StyledViewUserDeatils>
      <TruncatedText
        loadingWidth="100"
        loadingHeight="80px"
        className="flex text-[15px] cursor-pointer p-2"
        fontMedium
        text={comment?.text}
        maxLength={max}
        underText={less ? h : s}
        fontPoppins
        isLoading={isLoading}
        variant="text"
      />
      {comment?.commentsImg ? (
        <ViewdPostCommentImage comment={comment} isLoading={isLoading} />
      ) : (
        ""
      )}
      <hr />
    </StyledViewedPostCommentSectionContainer>
  );
};

export default ViewedPostCommentsContainer;
