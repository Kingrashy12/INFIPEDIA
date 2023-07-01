import React from "react";
import { StyledAdVerify } from "../../styles/components/advert/ad.styled";
import { MdVerified } from "react-icons/md";
import { Button, Libography } from "../../libs";

const VerifyAd = () => {
  return (
    <StyledAdVerify className="border border-neutral-300 relative">
      <div className="flex flex-col items-center justify-center gap-5">
        <MdVerified className="icons text-5xl" />
        <Libography
          fontSemiBold
          fontSofia
          text="Get verified on Infipedia. promote and secure your profile with infipedia pedia-orange"
          className="text-center"
        />
        <Button isCurrentBg text="Get Verified" />
      </div>
    </StyledAdVerify>
  );
};

export default VerifyAd;
