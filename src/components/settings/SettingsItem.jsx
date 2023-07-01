import React from "react";
import { StyledItemWrapper } from "../../styles/pages/settings/setting.stylled";
import { Libography } from "../../libs";
import { useLocation } from "react-router-dom";

const SettingsItem = () => {
  const path = useLocation();
  const hidden = path.pathname === "/setting";
  return (
    <StyledItemWrapper
      className="items-center justify-center flex"
      hidden={hidden}
    >
      <Libography
        fontSofia
        className="text-neutral-500 text-[20px] p-[1rem]"
        text="Select a section to manage"
      />
    </StyledItemWrapper>
  );
};

export default SettingsItem;
