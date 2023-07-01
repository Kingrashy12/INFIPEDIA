import React from "react";
import { useParams } from "react-router-dom";
import { StyledView } from "../../styles/pages/itemview.styled";
import { SideNavLinks, ViewItem } from "../../components";

const ItemView = () => {
  const { title } = useParams();
  const item = null;
  return (
    <StyledView>
      <SideNavLinks />
      <ViewItem item={item} />
    </StyledView>
  );
};

export default ItemView;
