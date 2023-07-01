import React, { useState } from "react";
import { EmptyWrap } from "../../styles/components/community/empty.styled";
import { Button, HeaderOne, Libography } from "../../libs";
import NewCommunity from "../models/NewCommunity";

const Empty = () => {
  const [open, setOpen] = useState(false);
  return (
    <EmptyWrap>
      {open && (
        <div className="z-z-70">
          <NewCommunity open={open} close={() => setOpen(false)} />
        </div>
      )}
      <HeaderOne
        fontSemiBold
        fontSofia
        className="text-neutral-400 text-2xl"
        text="No Community onboard"
      />
      <Libography
        fontSemiBold
        fontSofia
        text="Be the first to have your community on Infipedia"
        className="text-neutral-600"
      />
      <Button isCurrentBg text="Create" onClick={() => setOpen(true)} />
    </EmptyWrap>
  );
};

export default Empty;
