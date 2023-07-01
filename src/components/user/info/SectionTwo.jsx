import React from "react";
import {
  SectionFlex,
  SectionOneContainer,
} from "../../../styles/components/user/info/sectionone.styled";
import { Libography } from "../../../libs";
import { IoIosArrowForward } from "react-icons/io";

const SectionTwo = () => {
  return (
    <SectionOneContainer>
      <SectionFlex>
        <Libography fontRoboto text="Protected Post" className="text-[15px]" />
        <IoIosArrowForward />
      </SectionFlex>
    </SectionOneContainer>
  );
};

export default SectionTwo;
