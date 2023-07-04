import React from "react";
import WhoToFollow from "../user/WhoToFollow";
import {
  StyledProfileRight,
  StyledProfileRightFixed,
} from "../../styles/components/layout/profileright.styled";

const ProfileRightContainer = () => {
  return (
    <StyledProfileRight>
      <StyledProfileRightFixed>
        <WhoToFollow />
      </StyledProfileRightFixed>
    </StyledProfileRight>
  );
};

export default ProfileRightContainer;
