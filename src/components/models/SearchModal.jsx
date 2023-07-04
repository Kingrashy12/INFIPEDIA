import React from "react";
import { useSearchModal } from "../../hooks";
import { BackDrop } from "../../libs";
import SearchAndFiled from "../filter/SearchAndFiled";

const SearchModal = () => {
  const searchmodal = useSearchModal();
  return (
    <div>
      {searchmodal.isOpen && <BackDrop children={<SearchAndFiled />} />}
    </div>
  );
};

export default SearchModal;
