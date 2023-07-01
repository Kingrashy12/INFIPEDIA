import React, { useEffect } from "react";
import { StyledSetting } from "../../../styles/pages/settings/setting.stylled";
import { AccountAccess, SideNavLinks } from "../../../components";

const SecurityAndAccess = () => {
  useEffect(() => {
    document.title = "Security and account access - Infipedia";
  });
  return (
    <StyledSetting>
      <SideNavLinks />
      <AccountAccess />
    </StyledSetting>
  );
};

export default SecurityAndAccess;
