import React, { useEffect } from "react";
import { StyledMarket } from "../../styles/pages/market.styled";
import { ItemsFeed, SideNavLinks } from "../../components";

const MarketPlace = () => {
  useEffect(() => {
    document.title = "MarketPlace - Infipedia";
  });
  return (
    <StyledMarket>
      <SideNavLinks />
      <ItemsFeed />
    </StyledMarket>
  );
};

export default MarketPlace;
