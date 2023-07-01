import React, { useEffect, useState } from "react";
import { getNotification } from "../../hooks/getUserById";
import { Backdrop } from "@mui/material";
import { useSelector } from "react-redux";
import {
  StyledNoHeader,
  StyledNotify,
} from "../../styles/components/notification.styled";
import { IoClose } from "react-icons/io5";
import Notification from "../Notification";
import { HeaderOne } from "../../libs";

const NotificationModel = ({ open, setOpen }) => {
  const userId = useSelector((state) => state.credentails?._id);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState([]);
  console.log("notifiactions:", notification);

  useEffect(() => {
    const getNotify = async () => {
      setIsLoading(true);
      try {
        const data = await getNotification(userId);
        setNotification(data);
      } catch (error) {
        console.log({ error: error.message });
      } finally {
        setIsLoading(false);
      }
    };
    getNotify();

    const interval = setInterval(getNotify, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Backdrop open={open} sx={{ zIndex: 99 }}>
      <StyledNotify className="shadow shadow-slate-600">
        <StyledNoHeader className="shadow-md shadow-slate-600">
          <HeaderOne
            text="Notification"
            fontSofia
            isLoading={isLoading}
            loadingWidth={"150px"}
            loadingHeight={"30px"}
            className={"text-[20px]"}
          />
          <IoClose
            size={30}
            onClick={() => setOpen(false)}
            className="p-1 bg-neutral-400 cursor-pointer rounded-full"
          />
        </StyledNoHeader>
        {notification.map((notify, index) => (
          <Notification
            notify={notify}
            key={index}
            isLoading={isLoading}
            setOpen={setOpen}
          />
        ))}
      </StyledNotify>
    </Backdrop>
  );
};

export default NotificationModel;
