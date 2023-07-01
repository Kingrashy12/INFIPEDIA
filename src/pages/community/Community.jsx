import React, { useEffect } from "react";
import { StyledCommunity } from "../../styles/pages/community.styled";
import { CommunityFeed, SideNavLinks } from "../../components";

const Community = () => {
  useEffect(() => {
    document.title = "Community - Infipedia";
  });
  return (
    <StyledCommunity>
      <SideNavLinks />
      <CommunityFeed />
    </StyledCommunity>
  );
};

export default Community;
