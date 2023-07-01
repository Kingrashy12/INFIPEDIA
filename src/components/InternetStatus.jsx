import React, { useEffect, useState } from "react";
import { Libography } from "../libs";
import { TiInfoOutline } from "react-icons/ti";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";
import { FlexBetween } from "../styles/common/Global";

const InternetStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const offline = (
    <FlexBetween
      className={`${
        show ? "none" : "flex"
      } p-[5px] gap-2 bg-white w-[200px] h-[40px] items-center relative rounded-[5px] border-b-2 border-b-yellow-400`}
    >
      <div className="flex gap-2">
        <TiInfoOutline className="text-[20px] text-yellow-400" />
        <Libography fontSemiBold fontSofia text="You're offline" />
      </div>
      <IoClose
        className="cursor-pointer flex justify-end items-end"
        onClick={() => setShow(true)}
      />
    </FlexBetween>
  );
  const online = (
    <div
      className={`flex p-[5px] gap-2 bg-white w-[200px] h-[40px] items-center relative rounded-[5px] border-b-2 border-b-blue-600`}
    >
      <HiOutlineStatusOnline className="text-[20px] text-blue-600" />
      <Libography fontSemiBold fontSofia text="Internet Connected" />
      <IoClose className="cursor-pointer" onClick={() => setShow(true)} />
    </div>
  );
  return (
    <div
      className={`${
        show ? "hidden" : "block"
      } fixed bottom-10 left-10 shadow shadow-black rounded-[5px] z-[99]`}
    >
      {isOnline ? <Libography text={online} /> : <Libography text={offline} />}
    </div>
  );
};

export default InternetStatus;
