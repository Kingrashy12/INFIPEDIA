import React, { useEffect, useState } from "react";
import { ActiveLinkBottom, IconBadge } from "../../libs";
import { HiHome, HiOutlineHome } from "react-icons/hi";
import { Link, useLocation, useParams } from "react-router-dom";
import { FlexBetween, SpaceEvenly } from "../../styles/common/Global";
import { MdVideoLibrary, MdOutlineVideoLibrary } from "react-icons/md";
import { videosdata } from "../../data/videos";
import { IoNotifications, IoNotificationsOutline } from "react-icons/io5";
import { StyledBottom } from "../../styles/layout/Bottom.styled";
import { RiSearchLine } from "react-icons/ri";
import { useSearchModal } from "../../hooks";
import { useSelector } from "react-redux";
import { getNotification } from "../../hooks/getUserById";
import { getUnreadNotification } from "../../helper/fetch";

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
        const data = await getUnreadNotification(auth?.username);
        setUnreadNotifications(data);
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
    fetchUnreadNotifications();
  });

  return (
    <StyledBottom className="fixed bottom-0 w-full bg-white shadow shadow-slate-700 p-[8px] max-[2560px]:hidden max-[700px]:block">
      <SpaceEvenly>
        <Link to="/" className="relative">
          {path.pathname === "/" ? (
            <HiHome size={26} className="icon" />
          ) : (
            <HiOutlineHome size={26} className="icon" />
          )}
        </Link>
        <Link to="/videos" className="relative">
          {path.pathname === "/videos" ? (
            <MdVideoLibrary size={26} className="icon" />
          ) : (
            <MdOutlineVideoLibrary size={26} className="icon" />
          )}
        </Link>

        <RiSearchLine size={26} className="icon" onClick={searchmodal.onOpen} />

        <Link to={null} className="relative">
          <IconBadge content={unreadNotifications.length} />
          {path.pathname === `/notification` ? (
            <IoNotifications size={26} className="icon" />
          ) : (
            <IoNotificationsOutline size={26} className="icon" />
          )}
        </Link>
      </SpaceEvenly>
    </StyledBottom>
  );
};

export default BottomNav;
