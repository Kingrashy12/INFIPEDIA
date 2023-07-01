import React from "react";
import { CoverPlaceholder, Female, Male } from "../../asset";
import { Skeleton } from "@mui/material";
import { StyledUserCover } from "../../styles/components/user/user.styled";

const UserCover = ({ user, size, isLoading }) => {
  return (
    <>
      {user?.userCover ? (
        <>
          {isLoading ? (
            <Skeleton variant="rectangular" width={`100%`} height={`24rem`} />
          ) : (
            <StyledUserCover
              src={user.userCover.url}
              className="w-full h-96 max-[700px]:w-full max-[700px]:h-72 rounded-lg"
              style={{ objectFit: "cover" }}
              alt="User"
              width={size}
              height={size}
            />
          )}
        </>
      ) : (
        <>
          {isLoading ? (
            <Skeleton variant="rectangular" width={`100%`} height={`24rem`} />
          ) : (
            <StyledUserCover
              src={CoverPlaceholder}
              className="w-full h-96 max-[700px]:w-full max-[700px]:h-64 rounded-lg"
              style={{ objectFit: "cover" }}
              alt="User"
              width={size}
              height={size}
            />
          )}
        </>
      )}
    </>
  );
};

export default UserCover;
