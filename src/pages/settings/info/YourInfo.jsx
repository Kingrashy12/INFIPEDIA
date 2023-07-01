import React, { useEffect } from "react";
import { StyledSetting } from "../../../styles/pages/settings/setting.stylled";
import { InfoFeed, SideNavLinks } from "../../../components";

const YourInfo = () => {
  useEffect(() => {
    document.title = "Account Information - Infipedia";
  });
  return (
    <StyledSetting>
      <SideNavLinks />
      <InfoFeed />
    </StyledSetting>
  );
};

export default YourInfo;
