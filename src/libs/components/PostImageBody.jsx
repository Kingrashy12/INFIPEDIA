import { Skeleton } from "@mui/material";
import React from "react";
import { StyledBodyImagePost } from "../../styles/libs/components/postimage.styled";

const PostImageBody = ({
  post,
  isLoading,
  loadingHeight,
  className,
  ImageHeight,
}) => {
  return (
    <>
      {isLoading ? (
        <Skeleton variant="rectangular" width="100%" height={loadingHeight} />
      ) : (
        <StyledBodyImagePost
          src={post.postImg?.url}
          className={`${className}`}
          height={ImageHeight}
        />
      )}
    </>
  );
};

export default PostImageBody;
