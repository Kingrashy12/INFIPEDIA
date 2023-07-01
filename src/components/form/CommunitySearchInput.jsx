import React from "react";
import {
  CommunitySearchWrapper,
  CommunitysearchInput,
} from "../../styles/components/community/community.styled";
import { RiSearchLine } from "react-icons/ri";

const CommunitySearchInput = () => {
  return (
    <div className="flex flex-col relative">
      <CommunitySearchWrapper>
        <RiSearchLine
          size={30}
          className="cursor-pointer text-white bg p-1 max-[350px]:hidden rounded-md"
        />
        <CommunitysearchInput
          placeholder="Search Community"
          className="font-sofia font-semibold text-white placeholder:font-sofia"
        />
      </CommunitySearchWrapper>
    </div>
  );
};

export default CommunitySearchInput;
