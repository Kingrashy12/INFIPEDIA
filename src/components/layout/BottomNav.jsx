import React from "react";
import { ActiveLinkBottom } from "../../libs";
import { HiHome } from "react-icons/hi";
import { Link, useLocation, useParams } from "react-router-dom";
import { FlexBetween } from "../../styles/common/Global";
import { MdVideoLibrary } from "react-icons/md";
import { videosdata } from "../../data/videos";
import { BiMessageDetail } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { StyledBottom } from "../../styles/layout/Bottom.styled";

const BottomNav = () => {
  const path = useLocation();
  const { playId } = useParams();
  const pId = videosdata.find((v) => v.playId === playId);
  return (
    <StyledBottom className="fixed bottom-0 w-full bg-white shadow shadow-black p-1 max-[2560px]:hidden max-[700px]:block">
      <FlexBetween>
        <Link to="/" className="relative">
          <HiHome size={30} className="icons" />
          {path.pathname === "/" ? <ActiveLinkBottom /> : <div className="" />}
        </Link>
        <Link to="/videos" className="relative">
          <MdVideoLibrary size={30} className="icons" />
          {path.pathname === "/videos" ? (
            <ActiveLinkBottom />
          ) : (
            <div className="" />
          )}
        </Link>
        <Link to="/messages" className="relative">
          <BiMessageDetail size={30} className="icons" />
          {path.pathname === "/messages" ? (
            <ActiveLinkBottom />
          ) : (
            <div className="" />
          )}
        </Link>
        <Link to={null} className="relative">
          <IoNotifications size={30} className="icons" />
          {path.pathname === `${null}` ? (
            <ActiveLinkBottom />
          ) : (
            <div className="" />
          )}
        </Link>
      </FlexBetween>
    </StyledBottom>
  );
};

export default BottomNav;
