import React from "react";
import { PlayVideo, SideNav, SideNavLinks } from "../../components";
import { PlayWrapper } from "../../styles/pages/play.styled";

const VideoPlayWrap = () => {
  return (
    <PlayWrapper>
      <SideNavLinks />
      <PlayVideo />
    </PlayWrapper>
  );
};

export default VideoPlayWrap;
