import React from "react";
import {
  ClickActionWrapp,
  StyledItemWrapper,
} from "../../../styles/pages/settings/setting.stylled";
import { HeaderOne, HeaderTwo, Libography } from "../../../libs";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FlexBetween } from "../../../styles/common/Global";
import { privacydata } from "../../../constants/setting";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const PrivacyItems = () => {
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
        text="Privacy and safety"
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
        text="Manage what information you see and share on Infipedia."
      />
      <HeaderTwo
        fontSemiBold
        fontSofia
        text="Your Infipedia activity"
        className="text-[24px] p-[1rem]"
      />
      {privacydata.map((item, index) => (
        <Link to={item.link} key={index}>
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

export default PrivacyItems;
