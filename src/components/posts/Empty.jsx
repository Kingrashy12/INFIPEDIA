import React from "react";
import { GiEmptyMetalBucketHandle } from "react-icons/gi";
import { HeaderOne, Libography } from "../../libs";
import { StyledEmptyBuk } from "../../styles/components/post/empty.styled";

const Empty = ({ name, extra, emptyText }) => {
  return (
    <StyledEmptyBuk className="flex flex-col w-full relative mt-5">
      <GiEmptyMetalBucketHandle />
      <HeaderOne fontSofia text={emptyText} />
      <Libography
        fontSofia
        text={`${name}, ${extra ? extra : ""}`}
        className="text-neutral-400"
      />
    </StyledEmptyBuk>
  );
};

export default Empty;
