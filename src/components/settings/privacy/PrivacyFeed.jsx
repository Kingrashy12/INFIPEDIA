import React from "react";
import SettingsNav from "../../layout/settings/SettingsNav";
import { StyledSetFeed } from "../../../styles/pages/settings/setting.stylled";
import PrivacyItems from "./PrivacyItems";

const PrivacyFeed = () => {
  return (
    <StyledSetFeed>
      <SettingsNav />
      <PrivacyItems />
    </StyledSetFeed>
  );
};

export default PrivacyFeed;
