import React, { useState } from "react";
import UserCover from "./UserCover";
import UserImage from "./UserImage";
import {
  HeroCoverCamera,
  HeroProfileCamera,
  StyledHero,
} from "../../styles/components/user/user.styled";
import { BsCameraFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Libography } from "../../libs";
import { Backdrop } from "@mui/material";
import ProfileImageModel from "../models/ProfileImageModel";
import { FcCamera } from "react-icons/fc";
import ProfileCoverModel from "../models/ProfileCoverModel";

const UserHero = ({ user, isLoading }) => {
  const auth = useSelector((state) => state.credentails);
  const [open, setOpen] = useState(false);
  const [openCover, setOpenCover] = useState(false);
  return (
    <StyledHero>
      <UserCover user={user} isLoading={isLoading} />
      {user._id === auth?._id ? (
        <div className="relative">
          <HeroCoverCamera
            className="bg-neutral-300 hover:bg-neutral-400 border border-black"
            // onClick={() => {setOpenCover(true)}}
          >
            <FcCamera size={25} />
            <Libography fontSofia text="Edit cover photo" />
          </HeroCoverCamera>
        </div>
      ) : (
        ""
      )}
      <div className="relative w-full">
        <UserImage
          user={user}
          isLoading={isLoading}
          loadingHeight={`9rem`}
          loadingWidth={`9rem`}
        />
      </div>
      {user._id === auth?._id ? (
        <HeroProfileCamera className="relative">
          <FcCamera
            size={40}
            onClick={() => setOpen(true)}
            className="absolute bg-neutral-300 hover:bg-neutral-400 border border-black -bottom-12 left-[11rem] cursor-pointer p-[7px] rounded-full"
          />
        </HeroProfileCamera>
      ) : (
        ""
      )}
      {open && (
        <Backdrop open={open} sx={{ zIndex: 99 }}>
          <ProfileImageModel user={user} setOpen={setOpen} />
        </Backdrop>
      )}
      {openCover && (
        <Backdrop open={openCover} sx={{ zIndex: 99 }}>
          <ProfileCoverModel setOpenCover={setOpenCover} />
        </Backdrop>
      )}
    </StyledHero>
  );
};

export default UserHero;
