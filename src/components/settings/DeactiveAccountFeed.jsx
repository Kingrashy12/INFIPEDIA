import React from "react";
import { StyledSetFeed } from "../../styles/pages/settings/setting.stylled";
import SettingsNav from "../layout/settings/SettingsNav";
import DeactiveAccountItems from "./DeactiveAccountItems";

const DeactiveAccountFeed = () => {
  return (
    <StyledSetFeed>
      <SettingsNav />
      <DeactiveAccountItems />
    </StyledSetFeed>
  );
};

export default DeactiveAccountFeed;
