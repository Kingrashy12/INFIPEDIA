import React from "react";
import { StyledViewPostImage } from "../../styles/components/post/view/view.styled";
import { Skeleton } from "@mui/material";

const ViewdPostImage = ({ post, isLoading }) => {
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
          src={post?.postImg?.url}
          alt="Post Image"
          className="cursor-pointer"
        />
      )}
    </>
  );
};

export default ViewdPostImage;
