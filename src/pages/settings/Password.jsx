import React, { useEffect } from "react";
import { StyledSetting } from "../../styles/pages/settings/setting.stylled";
import { PasswordFeed, SideNavLinks } from "../../components";

const Password = () => {
  useEffect(() => {
    document.title = "Change your password - Infipedia";
  });
  return (
    <StyledSetting>
      <SideNavLinks />
      <PasswordFeed />
    </StyledSetting>
  );
};

export default Password;
