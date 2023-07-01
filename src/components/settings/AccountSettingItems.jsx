import React, { useState } from "react";
import {
  ClickActionWrapp,
  StyledItemWrapper,
} from "../../styles/pages/settings/setting.stylled";
import { HeaderOne, Libography } from "../../libs";
import { accountdata } from "../../constants/setting";
import { FlexBetween } from "../../styles/common/Global";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const AccountSettingItems = () => {
  const navigate = useNavigate();

  const header = (
    <ClickActionWrapp>
      <HiOutlineArrowSmLeft
        className="cursor-pointer"
        size={25}
        onClick={() => navigate(-1)}
      />
      <HeaderOne
        fontSemiBold
        fontSofia
        text="Your Account"
        className="text-[27px]"
      />
    </ClickActionWrapp>
  );

  return (
    <StyledItemWrapper>
      <HeaderOne
        fontSemiBold
        fontSofia
        text={header}
        className="text-[27px] p-[1rem]"
      />
      <Libography
        fontSofia
        className="text-neutral-500 text-[14px] p-[1rem]"
        text="See information about your account, download an archive of your data, or learn about your account deactivation options"
      />
      {accountdata.map((item, index) => (
        <Link to={item.link}>
          <FlexBetween className="cursor-pointer hover:bg-neutral-200 p-[1rem]">
            <div className="flex gap-4 items-center">
              <>{item.icon}</>
              <Libography fontSemiBold fontSofia text={item.label} />
            </div>
            <MdOutlineKeyboardArrowRight />
          </FlexBetween>
        </Link>
      ))}
    </StyledItemWrapper>
  );
};

export default AccountSettingItems;
