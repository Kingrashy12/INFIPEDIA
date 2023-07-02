import React from "react";
import { PlayContainer, SideNavLinks } from "../../components";
import { PlayWrapper } from "../../styles/pages/play.styled";

const VideoPlayWrap = () => {
  return (
    <PlayWrapper>
      <SideNavLinks />
      <PlayContainer />
    </PlayWrapper>
  );
};

export default VideoPlayWrap;
