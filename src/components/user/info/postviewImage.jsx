import { Skeleton } from "@mui/material";
import React from "react";
import { StyledViewUserImg } from "../../../styles/components/post/view/view.styled";

const PostviewImage = ({ post, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Skeleton variant="circular" width="50px" height="50px" />
      ) : (
        <StyledViewUserImg src={post?.userProfile?.url} />
      )}
    </>
  );
};

export default PostviewImage;
