import React from "react";
import VideoCommentsForm from "../form/VideoCommentsForm";
import {
  StyledComments,
  StyledVCommentWrapper,
} from "../../styles/components/comments/videocomeents";
import VCommentItem from "./VCommentItem";

const VideoComment = ({ comments, video, isLoading }) => {
  return (
    <StyledComments>
      <VideoCommentsForm video={video} />
      <StyledVCommentWrapper>
        {comments.map((comment, index) => (
          <VCommentItem comment={comment} key={index} isLoading={isLoading} />
        ))}
      </StyledVCommentWrapper>
    </StyledComments>
  );
};

export default VideoComment;
