import React, { useEffect, useState } from "react";
import { StyledFollowersPage } from "../../styles/pages/followers.styled";
import { Content, SideNavLinks, SideUsersNav } from "../../components";

const Followers = () => {
  useEffect(() => {
    document.title = "Users - Infipedia";
  });
  return (
    <StyledFollowersPage>
      <SideNavLinks />
      <Content />
    </StyledFollowersPage>
  );
};

export default Followers;
