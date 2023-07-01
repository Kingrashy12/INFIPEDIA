import React from "react";
import {
  StyledRightSideNavWrapp,
  StyledRightSideNavWrappI,
} from "../../styles/layout/SideNav.styled";
import VerifyAd from "../advert/VerifyAd";
import AdvertFeed from "../advert/AdvertFeed";
import Trend from "../posts/trend/Trend";

const RightNav = () => {
  return (
    <StyledRightSideNavWrapp className="relative max-[800px]:hidden max-[700px]:hidden -mt-20 p-0 h-full">
      <StyledRightSideNavWrappI className="fixed  max-[800px]:hidden pt-5 bg-white mt-36 right-0 h-full border-l border-l-neutral-400">
        <VerifyAd />
        <AdvertFeed />
        <Trend />
      </StyledRightSideNavWrappI>
    </StyledRightSideNavWrapp>
  );
};

export default RightNav;
