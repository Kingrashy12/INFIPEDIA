import React, { useState } from "react";
import {
  CFilterContainer,
  CFilterWrapper,
} from "../../styles/components/filter/community.styled";
import CommunitySearchInput from "../form/CommunitySearchInput";
import { Button } from "../../libs";
import NewCommunity from "../models/NewCommunity";

const CommunityFilter = () => {
  const [open, setOpen] = useState(false);
  return (
    <CFilterWrapper className="border-b border-b-neutral-400">
      {open && (
        <div className="z-z-70">
          <NewCommunity open={open} close={() => setOpen(false)} />
        </div>
      )}
      <CFilterContainer>
        <CommunitySearchInput />
        <Button
          isCurrentBg
          text="Create Community"
          onClick={() => setOpen(true)}
        />
      </CFilterContainer>
    </CFilterWrapper>
  );
};

export default CommunityFilter;
