import React from "react";
import { Female, Male, PlaceholderImage } from "../asset";
import { Skeleton } from "@mui/material";
import { StyledImage } from "../styles/components/UserImage.styled";

const UserImage = ({
  user,
  size,
  profile,
  onClick,
  video,
  isLoading,
  comment,
  className,
  loadingWidth,
  loadingHeight,
  posts,
}) => {
  return (
    <StyledImage>
      {user?.userProfile ? (
        <>
          {isLoading ? (
            <Skeleton
              width={
                (video ? "2.25rem" : loadingWidth) ||
                (comment && "68px") ||
                (posts && "4rem")
              }
              height={
                (video ? "2.25rem" : loadingHeight) ||
                (comment && "68px") ||
                (posts && "4rem")
              }
              variant="circular"
            />
          ) : (
            <img
              src={user.userProfile?.url}
              style={{ borderRadius: "50%" }}
              className={`${className} w-20 h-20 relative ${
                profile &&
                "w-36 h-36 border-2 border-black max-[700px]:w-32 max-[700px]:h-32"
              } rounded-full ${video && "w-9 h-9"} ${
                comment && "w-68px h-68px max-[700px]:w-10 max-[700px]:h-8"
              } ${posts && "w-68px h-68px max-[700px]:w-12 max-[700px]:h-12"}`}
              alt="User"
              width={size}
              height={size}
              onClick={onClick}
            />
          )}
        </>
      ) : (
        <>
          {isLoading ? (
            <Skeleton
              width={(video ? "2.25rem" : loadingWidth) || (comment && "68px")}
              height={
                (video ? "2.25rem" : loadingHeight) || (comment && "68px")
              }
              variant="circular"
            />
          ) : (
            <img
              src={PlaceholderImage}
              style={{ borderRadius: "50%" }}
              className={`${className} w-20 h-20 ${
                profile &&
                "w-36 h-36 border-2 border-black max-[700px]:w-28 max-[700px]:h-28"
              } rounded-full  ${video && "w-9 h-9"} ${
                comment && "w-68px h-68px max-[700px]:w-11 max-[700px]:h-11"
              }`}
              alt="User"
              width={size}
              height={size}
              onClick={onClick}
            />
          )}
        </>
      )}
    </StyledImage>
  );
};

export default UserImage;
