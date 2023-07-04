import React from "react";
import { StyledButtonPlay } from "../../styles/components/comments/videocomeents";
import LikesContainer from "./LikesContainer";
import VideoComment from "../comments/VideoComment";

const PlayButtonContainer = ({ comments, video, likes, isLoading }) => {
  return (
    <StyledButtonPlay>
      <LikesContainer />
      <VideoComment comments={comments} video={video} isLoading={isLoading} />
    </StyledButtonPlay>
  );
};

export default PlayButtonContainer;
