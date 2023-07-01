import React, { useEffect, useState } from "react";
import { Button, MobileNavImage } from "../../libs";
import { FlexBetween } from "../../styles/common/Global";
import { Link, useNavigate } from "react-router-dom";
import LoginModel from "../models/LoginModel";
import RegisterModel from "../models/RegisterModel";
import useScrollDirection from "../../hooks/useScrollDirection";
import { Nav } from "../../styles/layout/Nav.styled";
import SearchInput from "../form/SearchInput";
import { StyledNavImage } from "../../styles/layout/navimage.styled";
import { Male } from "../../asset";
import MobileSideNav from "./MobileSideNav";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../store/authSlice";
import { toast } from "react-toastify";
import { FaBell } from "react-icons/fa";
import { Badge } from "@mui/material";
import { ReadNotification, getNotification } from "../../hooks/getUserById";
import NotificationModel from "../models/NotificationModel";

const Navbar = () => {
  const scrollDirection = useScrollDirection("down");
  const [opennav, setOpennav] = useState(false);
  const auth = useSelector((state) => state.credentails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [unreadNotifications, setUnreadNotifications] = useState([]);

  const userId = auth?._id;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!auth?._id) {
      return null;
    } else {
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
      };

      // Fetch unread notifications initially
      fetchUnreadNotifications();

      // Set up interval to fetch unread notifications at regular intervals (e.g., every 1 seconds)
      const interval = setInterval(fetchUnreadNotifications, 1000);

      // Clean up interval on component unmount
      return () => clearInterval(interval);
    }
  }, []);

  async function openAlert() {
    setOpen(true);
    await ReadNotification(userId);
  }

  return (
    <Nav
      scroll={scrollDirection}
      className="sticky -top-0 bg-white w-full z-30 p-3 shadow-md shadow-black flex justify-between max-[700px]:p-2"
    >
      <FlexBetween>
        <Link to="/">
          <h2 className="font-sofia text-3xl font-semibold text-black cursor-pointer logo">
            Infipedia
          </h2>
        </Link>
        <SearchInput />
        <MobileNavImage user={auth} onClick={() => setOpennav(true)} />
        {opennav && <MobileSideNav setOpennav={setOpennav} />}
      </FlexBetween>
      {auth?._id ? (
        <FlexBetween hideOnMobile onClick={openAlert}>
          <Badge
            badgeContent={unreadNotifications?.length}
            color="info"
            className="font-sofia"
          >
            <FaBell size={25} color="#000" className="cursor-pointer" />
          </Badge>
        </FlexBetween>
      ) : (
        ""
      )}
      {open && <NotificationModel open={open} setOpen={setOpen} />}
      {auth?._id ? (
        <FlexBetween hideOnMobile>
          <Button
            isCurrentBg
            text="Logout"
            onClick={() => {
              dispatch(logOutUser());
              toast.warning(`You logged out`, { position: "top-center" });
            }}
          />
        </FlexBetween>
      ) : (
        <FlexBetween hideOnMobile>
          <Button
            isCurrentBg
            text="Login"
            onClick={() => navigate("/auth/login")}
          />
          <Button
            isCurrentBgOutlined
            text="Signup"
            onClick={() => navigate("/auth/signup")}
          />
        </FlexBetween>
      )}
    </Nav>
  );
};

export default Navbar;
