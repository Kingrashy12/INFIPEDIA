import React, { useEffect } from "react";
import { StyledSaved } from "../../styles/pages/saved/saved.styled";
import { SavedPostFeed, SideNavLinks } from "../../components";
import { useSelector } from "react-redux";

const Saved = () => {
  const saved = useSelector((state) => state.posts.savedPosts);
  useEffect(() => {
    document.title = `${saved.length} Saved - Infipedia`;
  });
  return (
    <StyledSaved>
      <SideNavLinks />
      <SavedPostFeed />
    </StyledSaved>
  );
};

export default Saved;
