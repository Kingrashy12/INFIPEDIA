import React from "react";
import { StyledSetFeed } from "../../../styles/pages/settings/setting.stylled";
import SettingsNav from "../../layout/settings/SettingsNav";
import InfoItems from "./InfoItems";

const InfoFeed = () => {
  return (
    <StyledSetFeed>
      <SettingsNav />
      <InfoItems />
    </StyledSetFeed>
  );
};

export default InfoFeed;
