import React from "react";
import { StyledSetFeed } from "../../styles/pages/settings/setting.stylled";
import SettingsNav from "../layout/settings/SettingsNav";
import PasswordItem from "./PasswordItem";

const PasswordFeed = () => {
  return (
    <StyledSetFeed>
      <SettingsNav />
      <PasswordItem />
    </StyledSetFeed>
  );
};

export default PasswordFeed;
