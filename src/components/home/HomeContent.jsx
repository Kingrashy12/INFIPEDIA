import React, { useState } from "react";
import {
  StyledHomeContent,
  StyledTypeFilter,
  StyledTypeLinks,
} from "../../styles/components/home/styledcontent";
import { HeaderOne, Libography, Span } from "../../libs";
import PostFeed from "../posts/PostFeed";
import useScrollDirection from "../../hooks/useScrollDirection";
import TagFeed from "../posts/tag/TagFeed";
import FollowingPostFeed from "../posts/followingpost/FollowingPostFeed";
import { useSelector } from "react-redux";
import Share from "../posts/Share";

const HomeContent = () => {
  const [For, setFor] = useState(true);
  const [fol, setFol] = useState(false);
  const [tag, setTag] = useState(false);
  const scroll = useScrollDirection();
  const currentUserId = useSelector((state) => state.credentails?._id);
  function openFol() {
    setFor(false);
    setTag(false);
    setFol(true);
  }
  function openTag() {
    setFor(false);
    setFol(false);
    setTag(true);
  }
  function openFor() {
    setFol(false);
    setTag(false);
    setFor(true);
  }
  const hide = (
    <div className="flex gap-1">
      <h5>Tagged</h5>
      <h5 className="minHide">posts</h5>
    </div>
  );
  return (
    <StyledHomeContent>
      <StyledTypeFilter scroll={scroll}>
        <HeaderOne fontSofia fontSemiBold text="Home" />
        <StyledTypeLinks>
          <Libography
            fontSemiBold
            fontSofia
            text="For you"
            onClick={openFor}
            className={`${For && "border-b-[3px] border-b-black"}`}
          />
          <Libography
            fontSemiBold
            fontSofia
            text="Following"
            onClick={openFol}
            className={`${fol && "border-b-[3px] border-b-black"}`}
          />
          <Libography
            fontSemiBold
            fontSofia
            text={hide}
            onClick={openTag}
            className={`${tag && "border-b-[3px] border-b-black"} minHide`}
          />
        </StyledTypeLinks>
        <div className="border-b border-b-black" />
      </StyledTypeFilter>
      {For && <PostFeed />}
      {tag && <TagFeed />}
      {fol && <FollowingPostFeed currentUserId={currentUserId} />}
      <Share />
    </StyledHomeContent>
  );
};

export default HomeContent;
