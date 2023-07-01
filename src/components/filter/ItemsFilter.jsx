import React from "react";
import {
  StyledItemsFilter,
  StyledItemsFilterNav,
} from "../../styles/components/marketplace/itemsfeed.styled";
import { HeaderOne } from "../../libs";
import ItemsSearchInput from "../form/ItemsSearchInput";
import useScrollDirection from "../../hooks/useScrollDirection";

const ItemsFilter = ({ text, setText }) => {
  const scrollDirection = useScrollDirection("down");
  return (
    <StyledItemsFilter scroll={scrollDirection} className="shadow shadow-black">
      <StyledItemsFilterNav>
        <ItemsSearchInput text={text} setText={setText} />
      </StyledItemsFilterNav>
    </StyledItemsFilter>
  );
};

export default ItemsFilter;
