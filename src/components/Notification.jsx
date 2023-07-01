import React from "react";
import {
  StyledNoHeader,
  StyledNotWrapper,
} from "../styles/components/notification.styled";
import { HeaderOne, Libography } from "../libs";
import { IoClose } from "react-icons/io5";

const Notification = ({ notify, isLoading }) => {
  return (
    <StyledNotWrapper>
      <Libography
        text={notify.message}
        fontSofia
        isLoading={isLoading}
        loadingHeight={"30px"}
        loadingWidth={"300px"}
        className={"text-[18px] text-neutral-600"}
      />
    </StyledNotWrapper>
  );
};

export default Notification;
