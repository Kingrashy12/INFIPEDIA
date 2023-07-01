import React from "react";
import { StyledCLinksWrapper } from "../../styles/components/community/communityitem.styled";
import { Libography } from "../../libs";

const CommunityLinks = ({
  setPosts,
  setMembers,
  setAnn,
  isLoading,
  pos,
  a,
  mem,
}) => {
  function Post() {
    if (isLoading) return null;

    setAnn(false);
    setMembers(false);
    setPosts(true);
  }
  function Ann() {
    if (isLoading) return null;
    setPosts(false);
    setMembers(false);
    setAnn(true);
  }
  function Mem() {
    if (isLoading) return null;
    setPosts(false);
    setAnn(false);
    setMembers(true);
  }

  return (
    <StyledCLinksWrapper>
      <Libography
        fontSemiBold
        fontSofia
        text="Post"
        isLoading={isLoading}
        loadingHeight={"40px"}
        loadingWidth={"120px"}
        className={`${pos ? "border-b-[3px] border-b-black" : ""} p-2`}
        onClick={Post}
      />

      <Libography
        fontSemiBold
        fontSofia
        text="Anncounment"
        isLoading={isLoading}
        loadingHeight={"40px"}
        loadingWidth={"120px"}
        className={`${a ? "border-b-[3px] border-b-black" : ""} p-2`}
        onClick={Ann}
      />

      <Libography
        fontSemiBold
        fontSofia
        text="Members"
        isLoading={isLoading}
        loadingHeight={"40px"}
        loadingWidth={"120px"}
        className={`${mem ? "border-b-[3px] border-b-black" : ""} p-2`}
        onClick={Mem}
      />
    </StyledCLinksWrapper>
  );
};

export default CommunityLinks;
