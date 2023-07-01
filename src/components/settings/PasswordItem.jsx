import React, { useState } from "react";
import {
  ClickActionWrapp,
  StyledItemWrapper,
} from "../../styles/pages/settings/setting.stylled";
import { Button, HeaderOne, Libography } from "../../libs";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

const PasswordItem = () => {
  const navigate = useNavigate();
  const [show] = useState(true);
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
        text="Change Password"
        className="text-[27px]"
      />
    </ClickActionWrapp>
  );
  return (
    <StyledItemWrapper>
      <HeaderOne fontSemiBold fontSofia text={header} className="p-[1rem]" />
      <div className="flex flex-col gap-2 p-[1rem]">
        <TextField
          id="outlined-basic"
          label="Current Password"
          variant="outlined"
          type="password"
        />
        <Link className="hover:underline font-sofia text-[#f95f35] w-32">
          Forgot password?
        </Link>
      </div>
      <hr />
      <div className="flex flex-col p-[1rem] w-full relative">
        <TextField
          id="outlined-basic"
          label="New Password"
          variant="outlined"
          type="password"
        />
      </div>
      <Button isCurrentBg text="Confirm" className="w-36" end />
    </StyledItemWrapper>
  );
};

export default PasswordItem;
