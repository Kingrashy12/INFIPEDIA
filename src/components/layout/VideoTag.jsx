import React, { useState } from "react";
import { FaCar, FaCode, FaLaugh, FaList, FaMusic } from "react-icons/fa";
import {
  StyledTagFilter,
  StyledTagFilterContainer,
} from "../../styles/layout/VideoTag.styled";

const VideoTag = ({ setTag }) => {
  const [value, setValue] = useState();

  console.log("you pick:", value);

  return (
    <StyledTagFilterContainer className="relative w-96 -mt-20 top-0 p-0 h-full">
      <StyledTagFilter className="fixed w-72 pt-5 right-0 bg-white h-full top-12 border-l border-l-neutral-400">
        <h2 className="font-sofia text-2xl font-semibold p-2 logo">Category</h2>
        <hr />
        <div className="flex flex-col p-2 gap-2 font-sofia text-lg">
          <p
            className="flex gap-2 items-center cursor-pointer hover:bg-neutral-200 rounded-md p-2"
            onClick={() => setTag("")}
          >
            <FaList size={25} color="red" /> All
          </p>
          <hr />
          <p
            className="flex gap-2 items-center cursor-pointer hover:bg-neutral-200 rounded-md p-2"
            onClick={() => setTag("cars")}
          >
            <FaCar size={25} className="text-green-500" /> Cars
          </p>
          <hr />
          <p
            className="flex gap-2 items-center cursor-pointer hover:bg-neutral-200 rounded-md p-2"
            onClick={() => setTag("coding")}
          >
            <FaCode size={25} className="text-red-600" /> Coding
          </p>
          <hr />
          <p
            className="flex gap-2 items-center cursor-pointer hover:bg-neutral-200 rounded-md p-2"
            onClick={() => setTag("comedy")}
          >
            <FaLaugh size={25} className="text-blue-500" /> Comedy
          </p>
          <hr />
          <p
            className="flex gap-2 items-center cursor-pointer hover:bg-neutral-200 rounded-md p-2"
            onClick={() => setTag("music")}
          >
            <FaMusic size={25} className="text-lime-600" /> Music
          </p>
          <hr />
        </div>
      </StyledTagFilter>
    </StyledTagFilterContainer>
  );
};

export default VideoTag;
