import React, { useState } from "react";
import {
  MagePostDivider,
  StyledMange,
} from "../../styles/components/filter/managepost.styled";
import { HeaderOne, Libography } from "../../libs";
import { IoClose } from "react-icons/io5";
import MangePostItem from "../posts/MangePostItem";
import { FlexBetween } from "../../styles/common/Global";
import MangeActions from "../functions/MangeActions";

const ManagePost = ({ posts, setOpen }) => {
  const [selected, setSelected] = useState("");

  return (
    <StyledMange>
      <div className="flex p-[1rem] items-center justify-between">
        <HeaderOne
          fontSemiBold
          fontSofia
          text="Manage Post"
          className="text-[25px] text-center"
        />
        <IoClose
          className="bg-neutral-300 p-1 text-[30px] rounded-full cursor-pointer"
          onClick={() => setOpen(false)}
        />
      </div>
      <MagePostDivider />
      <Libography
        fontSemiBold
        fontSofia
        text="Select the posts you want to manage"
        className="p-[10px]"
      />
      <MagePostDivider />
      <div className="flex flex-wrap p-[12px] gap-5 overflow-y-auto w-full justify-center">
        {posts.map((post, index) => (
          <MangePostItem
            post={post}
            key={index}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
      <MagePostDivider />
      <MangeActions
        selected={selected}
        posts={posts}
        setSelected={setSelected}
      />
    </StyledMange>
  );
};

export default ManagePost;
