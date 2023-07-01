import React from "react";
import {
  StyledCreatedImg,
  StyledUserWrapper,
} from "../../styles/pages/itemview.styled";
import { Button, HeaderOne } from "../../libs";
import { FlexBetween } from "../../styles/common/Global";

const CreatedUser = ({ item }) => {
  return (
    <StyledUserWrapper className="shadow shadow-black">
      <div className="flex gap-2 items-center">
        <StyledCreatedImg src={item?.userProfile} />
        <HeaderOne
          fontSemiBold
          fontSofia
          text={item?.name}
          className="hover:underline cursor-pointer"
        />
      </div>

      <Button text="Send Message" isCurrentBg className="" />
    </StyledUserWrapper>
  );
};

export default CreatedUser;
