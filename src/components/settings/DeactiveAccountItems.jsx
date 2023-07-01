import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ClickActionWrapp,
  DangerZoneContainer,
  StyledItemWrapper,
} from "../../styles/pages/settings/setting.stylled";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { Button, HeaderOne, Libography } from "../../libs";
import { useSelector } from "react-redux";
import { MdDangerous } from "react-icons/md";
import { FcCancel } from "react-icons/fc";
import { Backdrop } from "@mui/material";
import Confirm from "../models/Confirm";

const DeactiveAccountItems = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.credentails);
  const [show] = useState(true);
  const [open, setOpen] = useState(false);
  const header = (
    <ClickActionWrapp show={show}>
      <HiOutlineArrowSmLeft
        className="cursor-pointer"
        size={25}
        onClick={() => navigate(-1)}
      />
      <HeaderOne
        fontSemiBold
        fontSofia
        text="Deactivate account"
        className="text-[27px]"
      />
    </ClickActionWrapp>
  );
  const danger = (
    <DangerZoneContainer>
      {/* <MdDangerous /> */}
      <FcCancel />
      <HeaderOne text="Danger Zone" />
    </DangerZoneContainer>
  );
  return (
    <StyledItemWrapper>
      <HeaderOne
        fontSemiBold
        fontSofia
        text={header}
        className="text-[27px] p-[1rem]"
      />
      <hr />
      <Libography
        fontSofia
        className="text-neutral-500 text-[14px] p-[1.2rem]"
        text={`You’re about to start the process of deactivating your Infipedia account. Your display name, and @${auth?.username}, and public profile will no longer be viewable on infipedia.vercel.app,`}
      />
      <div className="flex w-full p-[1rem] flex-col">
        <Button isCurrentBg text="Deactivate" />
      </div>
      <hr />
      <HeaderOne fontSemiBold fontSofia text={danger} className="p-[1rem]" />
      <div className="flex flex-col p-[1rem] gap-3">
        <Libography
          fontSofia
          className="text-neutral-500 text-[14px]"
          text={`You’re about to delete your account. this action can be reserved`}
        />
        <Button
          isCurrentBg
          text={"Delete Account"}
          className="w-36"
          onClick={() => setOpen(true)}
        />
      </div>
      {open && (
        <Backdrop open={open}>
          <Confirm setOpen={setOpen} />
        </Backdrop>
      )}
    </StyledItemWrapper>
  );
};

export default DeactiveAccountItems;
