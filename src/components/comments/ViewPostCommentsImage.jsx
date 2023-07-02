import React from "react";
import { StyledViewPostImage } from "../../styles/components/post/view/view.styled";
import { Skeleton } from "@mui/material";

const ViewdPostCommentImage = ({ comment, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Skeleton
          width={`96%`}
          height="400px"
          variant="rectangular"
          sx={{ position: "relative" }}
        />
      ) : (
        <StyledViewPostImage
          src={comment?.commentsImg?.url}
          alt="Post Image"
          className="cursor-pointer"
        />
      )}
    </>
  );
};

export default ViewdPostCommentImage;
