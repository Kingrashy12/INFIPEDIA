import { Skeleton } from "@mui/material";
import React from "react";
import { StyledUImage } from "../../styles/components/user/uimage.styled";
import { PlaceholderImage } from "../../asset";

const UImge = ({ user, isLoading }) => {
  return (
    <>
      {user.userProfile ? (
        <>
          {isLoading ? (
            <Skeleton variant="circular" width={"45px"} height={"45px"} />
          ) : (
            <StyledUImage src={user.userProfile?.url} />
          )}
        </>
      ) : (
        <>
          {isLoading ? (
            <Skeleton variant="circular" width={"45px"} height={"45px"} />
          ) : (
            <StyledUImage src={PlaceholderImage} />
          )}
        </>
      )}
    </>
  );
};

export default UImge;
