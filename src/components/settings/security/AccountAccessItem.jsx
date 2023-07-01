import React from "react";
import {
  ClickActionWrapp,
  StyledItemWrapper,
} from "../../../styles/pages/settings/setting.stylled";
import { HeaderOne, Libography } from "../../../libs";
import { FlexBetween } from "../../../styles/common/Global";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { securitydata } from "../../../constants/setting";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const AccountAccessItem = () => {
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
        text="Security and account access"
        className="text-[27px]"
      />
    </ClickActionWrapp>
  );
  return (
    <StyledItemWrapper>
      <HeaderOne fontSemiBold fontSofia text={header} className=" p-[1rem]" />
      <Libography
        fontSofia
        className="text-neutral-500 text-[14px] p-[1rem]"
        text="Manage your account’s security and keep track of your account’s usage including apps that you have connected to your account."
      />
      {securitydata.map((item, index) => (
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

export default AccountAccessItem;
