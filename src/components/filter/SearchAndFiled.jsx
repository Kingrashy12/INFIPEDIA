import React from "react";
import {
  StyledSearchForm,
  StyledSearchFormInput,
} from "../../styles/components/form/search";
import { FlexBetween } from "../../styles/common/Global";
import { BiSearch } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useSearchModal } from "../../hooks";

const SearchAndFiled = () => {
  const searchmodal = useSearchModal();
  function Close() {
    searchmodal.onClose();
  }
  return (
    <StyledSearchForm>
      <FlexBetween>
        <FlexBetween className="items-center bg-slate-300 p-1 rounded-lg w-[80%] pl-4">
          <BiSearch size={24} />
          <StyledSearchFormInput
            placeholder="Search User"
            className="font-sofia text-black placeholder:text-black"
          />
        </FlexBetween>
        <IoClose
          className="p-1 cursor-pointer bg-neutral-400 rounded-full"
          size={28}
          onClick={Close}
        />
      </FlexBetween>
    </StyledSearchForm>
  );
};

export default SearchAndFiled;
