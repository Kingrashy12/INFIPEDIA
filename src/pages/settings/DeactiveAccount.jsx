import React, { useEffect } from "react";
import { StyledSetting } from "../../styles/pages/settings/setting.stylled";
import { DeactiveAccountFeed, SideNavLinks } from "../../components";

const DeactiveAccount = () => {
  useEffect(() => {
    document.title = "Deactivate account - Infipedia";
  });
  return (
    <StyledSetting>
      <SideNavLinks />
      <DeactiveAccountFeed />
    </StyledSetting>
  );
};

export default DeactiveAccount;
