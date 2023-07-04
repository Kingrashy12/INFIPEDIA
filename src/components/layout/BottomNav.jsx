import React, { useEffect, useState } from "react";
import { ActiveLinkBottom, IconBadge } from "../../libs";
import { HiHome } from "react-icons/hi";
import { Link, useLocation, useParams } from "react-router-dom";
import { FlexBetween } from "../../styles/common/Global";
import { MdVideoLibrary } from "react-icons/md";
import { videosdata } from "../../data/videos";
import { IoNotifications } from "react-icons/io5";
import { StyledBottom } from "../../styles/layout/Bottom.styled";
import { RiSearchLine } from "react-icons/ri";
import { useSearchModal } from "../../hooks";
import { useSelector } from "react-redux";
import { getNotification } from "../../hooks/getUserById";

const BottomNav = () => {
  const path = useLocation();
  const { playId } = useParams();
  const pId = videosdata.find((v) => v.playId === playId);
  const searchmodal = useSearchModal();
  const auth = useSelector((state) => state.credentails);
  const userId = auth?._id;
  const [unreadNotifications, setUnreadNotifications] = useState([]);

  useEffect(() => {
    const fetchUnreadNotifications = async () => {
      try {
        const data = await getNotification(userId);
        const notifications = data.filter(
          (notification) => !notification.isRead
        );
        setUnreadNotifications(notifications);
      } catch (error) {
        console.error(error);
      }

      // Fetch unread notifications initially
      fetchUnreadNotifications();

      // Set up interval to fetch unread notifications at regular intervals (e.g., every 1 seconds)
      const interval = setInterval(fetchUnreadNotifications, 1000);

      // Clean up interval on component unmount
      return () => clearInterval(interval);
    };
  }, []);

  return (
    <StyledBottom className="fixed bottom-0 w-full bg-white shadow shadow-black p-[6px] max-[2560px]:hidden max-[700px]:block">
      <FlexBetween>
        <Link to="/" className="relative">
          <HiHome size={26} className="icon" />
          {path.pathname === "/" ? <ActiveLinkBottom /> : <div className="" />}
        </Link>
        <Link to="/videos" className="relative">
          <MdVideoLibrary size={26} className="icon" />
          {path.pathname === "/videos" ? (
            <ActiveLinkBottom />
          ) : (
            <div className="" />
          )}
        </Link>

        <RiSearchLine size={26} className="icon" onClick={searchmodal.onOpen} />

        <Link to={null} className="relative">
          <IconBadge content={unreadNotifications.length} />
          <IoNotifications size={26} className="icon" />
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
