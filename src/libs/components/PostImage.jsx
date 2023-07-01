import React from "react";
import { StyledPostImage } from "../../styles/libs/components/postimage.styled";
import { Skeleton } from "@mui/material";
import { Female, Male } from "../../asset";

const PostImage = ({ user, isLoading, className, onClick }) => {
  return (
    <>
      {user?.userProfile ? (
        <>
          {isLoading ? (
            <Skeleton variant="circular" width="40px" height="40px" />
          ) : (
            <StyledPostImage
              src={user.userProfile?.url}
              className={`${className}`}
              onClick={onClick}
            />
          )}
        </>
      ) : (
        <>
          {isLoading ? (
            <Skeleton variant="circular" width="40px" height="40px" />
          ) : (
            <StyledPostImage
              src={user.gender === "male" ? Male : Female || Male}
              className={`${className}`}
              onClick={onClick}
            />
          )}
        </>
      )}
    </>
  );
};

export default PostImage;
