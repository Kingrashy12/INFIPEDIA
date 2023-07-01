import React from "react";
import { StyledUserProfile } from "../../styles/components/user/user.styled";
import { Female, Male } from "../../asset";
import { Skeleton } from "@mui/material";
import { StyledImage } from "../../styles/components/UserImage.styled";

const UserImage = ({ user, loadingWidth, loadingHeight, isLoading }) => {
  return (
    <StyledImage>
      {user?.userProfile ? (
        <>
          {isLoading ? (
            <Skeleton
              variant="circular"
              width={loadingWidth}
              height={loadingHeight}
            />
          ) : (
            <StyledUserProfile src={user.userProfile?.url} />
          )}
        </>
      ) : (
        <>
          {isLoading ? (
            <Skeleton
              variant="circular"
              width={loadingWidth}
              height={loadingHeight}
            />
          ) : (
            <StyledUserProfile src={user?.gender === "male" ? Male : Female} />
          )}
        </>
      )}
    </StyledImage>
  );
};

export default UserImage;
