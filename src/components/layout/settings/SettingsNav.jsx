import React from "react";
import {
  StyledSetLinks,
  StyledSettingLayout,
} from "../../../styles/layout/settings/setting.styled";
import { ActiveLinkDivider, HeaderOne, Libography } from "../../../libs";
import { settingdata } from "../../../constants/setting";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const SettingsNav = () => {
  const path = useLocation();
  const hidden = path.pathname !== "/setting";
  return (
    <StyledSettingLayout hide={hidden}>
      <HeaderOne
        fontSemiBold
        fontSofia
        text="Settings"
        className="text-2xl mb-5 p-[1rem]"
      />
      {settingdata.map((item, index) => (
        <Link to={item.link}>
          <StyledSetLinks
            className={`cursor-pointer hover:bg-neutral-200 p-[1rem] ${
              path.pathname === `${item.link}` && "bg-neutral-200"
            }`}
            key={index}
          >
            <Libography
              fontSemiBold
              fontSofia
              text={item.label}
              className="text-[18px]"
            />
            <MdOutlineKeyboardArrowRight />
          </StyledSetLinks>
        </Link>
      ))}
    </StyledSettingLayout>
  );
};

export default SettingsNav;
