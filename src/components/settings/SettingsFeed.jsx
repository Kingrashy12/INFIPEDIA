import React from "react";
import { StyledSetFeed } from "../../styles/pages/settings/setting.stylled";
import SettingsNav from "../layout/settings/SettingsNav";
import SettingsItem from "./SettingsItem";

const SettingsFeed = () => {
  return (
    <StyledSetFeed>
      <SettingsNav />
      <SettingsItem />
    </StyledSetFeed>
  );
};

export default SettingsFeed;
