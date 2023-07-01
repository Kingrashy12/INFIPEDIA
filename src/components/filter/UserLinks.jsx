import { Skeleton } from "@mui/material";
import React from "react";
import { StyledLinkNav } from "../../styles/components/filter/userlinks.styled";

const UserLinks = ({
  post,
  video,
  setPost,
  setVideo,
  follower,
  followin,
  setFollowin,
  setFollower,
  h1,
  h2,
  h3,
  h4,
  h5,
  isLoading,
  loadingWidth,
  loadingHeight,
}) => {
  function postFilter() {
    setVideo(false);
    setFollower(false);
    setFollowin(false);
    setPost(true);
  }
  function videoFilter() {
    setPost(false);
    setFollower(false);
    setFollowin(false);
    setVideo(true);
  }
  function followersFilter() {
    setPost(false);
    setFollowin(false);
    setVideo(false);
    setFollower(true);
  }
  function followingFilter() {
    setPost(false);
    setFollower(false);
    setVideo(false);
    setFollowin(true);
  }

  return (
    <StyledLinkNav post={post}>
      {isLoading ? (
        <Skeleton variant="text" width={loadingWidth} height={loadingHeight} />
      ) : (
        <p
          className={`font-semibold text-base cursor-pointer text-neutral-500 rounded-md hover:bg-neutral-200 p-2 ${
            post &&
            "border-b-4 bor text-base border-b-[#f95f35] pb-2 logo rounded-none"
          }`}
          onClick={postFilter}
        >
          {h1}
        </p>
      )}
      {isLoading ? (
        <Skeleton variant="text" width={loadingWidth} height={loadingHeight} />
      ) : (
        <p
          className={`font-semibold text-base cursor-pointer text-neutral-500 rounded-md hover:bg-neutral-200 p-2  ${
            video &&
            "border-b-4 bo text-base border-b-[#f95f35] logo rounded-none pb-2"
          }`}
          onClick={videoFilter}
        >
          {h2}
        </p>
      )}
      {isLoading ? (
        <Skeleton variant="text" width={loadingWidth} height={loadingHeight} />
      ) : (
        <p
          className={`font-semibold text-base cursor-pointer text-neutral-500 rounded-md hover:bg-neutral-200 p-2 ${
            follower &&
            "border-b-4 text-base  border-b-[#f95f35] logo rounded-none pb-2"
          }`}
          onClick={followersFilter}
        >
          {h3}
        </p>
      )}
      {isLoading ? (
        <Skeleton variant="text" width={loadingWidth} height={loadingHeight} />
      ) : (
        <p
          className={`font-semibold text-base cursor-pointer text-neutral-500 rounded-md hover:bg-neutral-200 p-2 ${
            followin &&
            "border-b-4 text-base  border-b-[#f95f35] logo rounded-none pb-2"
          }`}
          onClick={followingFilter}
        >
          {h4}
        </p>
      )}
    </StyledLinkNav>
  );
};

export default UserLinks;
