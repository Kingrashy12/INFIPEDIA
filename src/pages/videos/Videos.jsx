import React, { useEffect } from "react";
import { StyledVideo } from "../../styles/pages/videos.styled";
import { SideNavII, VideoItem } from "../../components";

const Videos = () => {
  useEffect(() => {
    document.title = "Videos - InfiPedia";
  });
  return (
    <StyledVideo className="relative">
      <SideNavII />
      <VideoItem />
    </StyledVideo>
  );
};

export default Videos;
