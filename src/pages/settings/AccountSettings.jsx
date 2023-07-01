import React, { useEffect } from "react";
import { StyledSetting } from "../../styles/pages/settings/setting.stylled";
import { AccountSettingsFeed, SideNavLinks } from "../../components";

const Settings = () => {
  useEffect(() => {
    document.title = "Your Account - Infipedia";
  });
  return (
    <StyledSetting>
      <SideNavLinks />
      <AccountSettingsFeed />
    </StyledSetting>
  );
};

export default Settings;
