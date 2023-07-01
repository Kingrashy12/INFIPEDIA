import React from "react";
import { useSelector } from "react-redux";
import {
  SectionFlex,
  SectionOneContainer,
} from "../../../styles/components/user/info/sectionone.styled";
import { Libography } from "../../../libs";
import { IoIosArrowForward } from "react-icons/io";

const SectionOne = () => {
  const user = useSelector((state) => state.credentails);

  const uname = (
    <div className="flex flex-col gap-0">
      <Libography fontRoboto text="Username" className="text-[15px]" />
      <Libography
        fontRoboto
        text={`@${user?.username}`}
        className="text-[12px]"
      />
    </div>
  );
  const uemail = (
    <div className="flex flex-col gap-0">
      <Libography fontRoboto text="Email" className="text-[15px]" />
      <Libography fontRoboto text={`@${user?.email}`} className="text-[12px]" />
    </div>
  );
  const uv = (
    <div className="flex flex-col gap-0">
      <Libography fontRoboto text="Verified" className="text-[15px]" />
      <Libography
        fontRoboto
        text={`${user?.verified ? user.verified : "No"}`}
        className="text-[12px]"
      />
    </div>
  );
  return (
    <SectionOneContainer>
      <SectionFlex>
        <Libography text={uname} />
        <IoIosArrowForward />
      </SectionFlex>
      <SectionFlex>
        <Libography text={uemail} />
        <IoIosArrowForward />
      </SectionFlex>
      <SectionFlex>
        <Libography text={uv} />
      </SectionFlex>
    </SectionOneContainer>
  );
};

export default SectionOne;
