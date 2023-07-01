import React from "react";
import { StyledSetFeed } from "../../../styles/pages/settings/setting.stylled";
import SettingsNav from "../../layout/settings/SettingsNav";
import AccountAccessItem from "./AccountAccessItem";

const AccountAccess = () => {
  return (
    <StyledSetFeed>
      <SettingsNav />
      <AccountAccessItem />
    </StyledSetFeed>
  );
};

export default AccountAccess;
