import React, { useEffect } from "react";
import { StyledSetFeed } from "../../styles/pages/settings/setting.stylled";
import SettingItems from "./AccountSettingItems";
import SettingsNav from "../layout/settings/SettingsNav";
import AccountSettingItems from "./AccountSettingItems";

const SettingsFeed = () => {
  return (
    <StyledSetFeed>
      <SettingsNav />
      <AccountSettingItems />
    </StyledSetFeed>
  );
};

export default SettingsFeed;
