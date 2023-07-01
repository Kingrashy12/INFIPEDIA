import React, { useEffect } from "react";
import { StyledVideo } from "../../styles/pages/videos.styled";
import { SideNav, VideoByTag, VideoTag } from "../../components";

const TagedVideo = () => {
  useEffect(() => {
    document.title = "Videos - InfiPedia";
  });
  return (
    <StyledVideo className="relative">
      <SideNav />
      <VideoByTag />
      <VideoTag />
    </StyledVideo>
  );
};

export default TagedVideo;
