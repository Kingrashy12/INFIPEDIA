import React from "react";
import { ItemsSearch } from "../../styles/components/marketplace/itemsfeed.styled";

const ItemsSearchInput = ({ text, setText }) => {
  return (
    <ItemsSearch
      placeholder="Search Item"
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="font-semibold font-sofia bg-slate-300 placeholder:text-black outline-none"
    />
  );
};

export default ItemsSearchInput;
