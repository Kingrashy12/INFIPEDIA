import React, { useState } from "react";
import {
  ClickActionWrapp,
  StyledItemWrapper,
} from "../../../styles/pages/settings/setting.stylled";
import { Button, HeaderOne, HeaderTwo, Libography } from "../../../libs";
import { FlexBetween } from "../../../styles/common/Global";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { TextField } from "@mui/material";
import SectionOne from "../../user/info/SectionOne";
import SectionTwo from "../../user/info/SectionTwo";

const InfoItems = () => {
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
        text="Account Information"
        className="text-[27px]"
      />
    </ClickActionWrapp>
  );
  return (
    <StyledItemWrapper>
      <HeaderOne fontSemiBold fontSofia text={header} className="p-[1rem]" />
      <hr />
      <SectionOne />
      <hr />
      <SectionTwo />
    </StyledItemWrapper>
  );
};

export default InfoItems;
