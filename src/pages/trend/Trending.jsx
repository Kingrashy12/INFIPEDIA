import React from "react";
import { StyledHome } from "../../styles/pages/home.styled";
import { RightNav, SideNavII, TrendContent } from "../../components";

const Trending = () => {
  return (
    <StyledHome>
      <SideNavII />
      <TrendContent />
      <RightNav />
    </StyledHome>
  );
};

export default Trending;
