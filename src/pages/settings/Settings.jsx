import React, { useEffect } from "react";
import { StyledSetting } from "../../styles/pages/settings/setting.stylled";
import { SideNavLinks } from "../../components";
import SettingsFeed from "../../components/settings/SettingsFeed";

const Settings = () => {
  useEffect(() => {
    document.title = "Settings - Infipedia";
  });
  return (
    <StyledSetting>
      <SideNavLinks />
      <SettingsFeed />
    </StyledSetting>
  );
};

export default Settings;
