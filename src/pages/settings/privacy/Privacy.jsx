import React, { useEffect } from "react";
import { PrivacyFeed, SideNavLinks } from "../../../components";
import { StyledSetting } from "../../../styles/pages/settings/setting.stylled";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy and safty - Infipedia";
  });
  return (
    <StyledSetting>
      <SideNavLinks />
      <PrivacyFeed />
    </StyledSetting>
  );
};

export default Privacy;
