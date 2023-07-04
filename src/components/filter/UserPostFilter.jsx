import React, { useRef, useState } from "react";
import { Libography } from "../../libs";
import { FlexBetween } from "../../styles/common/Global";
import { MdSettings } from "react-icons/md";
import { BsList } from "react-icons/bs";
import {
  FilterDivider,
  PostFilterContainer,
} from "../../styles/components/post/userpost.styled";
import { FaTags } from "react-icons/fa";
import { Backdrop } from "@mui/material";
import ManagePost from "../models/ManagePost";

const UserPostFilter = ({ list, setList, tag, setTag, userId, post }) => {
  const [open, setOpen] = useState(false);
  const filter = (
    <div className="flex items-center gap-1">
      <MdSettings className="text-[20px]" />
      <Libography text="Manage Post" />
    </div>
  );
  const listv = (
    <div className="flex items-center gap-1">
      <BsList className="text-[20px]" />
      <Libography text="List view" />
    </div>
  );
  const gridv = (
    <div className="flex items-center gap-1">
      <FaTags className="text-[20px]" />
      <Libography text="Tagged Post" />
    </div>
  );
  function toList() {
    setTag(false);
    setList(true);
  }
  function toGrid() {
    setList(false);
    setTag(true);
  }

  return (
    <PostFilterContainer className="shadow shadow-slate-800">
      <FlexBetween className="p-[7px]">
        <Libography
          fontSemiBold
          fontSofia
          text="Post"
          className="text-[20px]"
        />
        {userId ? (
          <Libography
            fontSemiBold
            fontSofia
            text={filter}
            className="p-2 rounded-[8px] bg-slate-300 cursor-pointer hover:bg-slate-400"
            onClick={() => setOpen(true)}
          />
        ) : (
          ""
        )}
      </FlexBetween>
      {open && (
        <Backdrop
          open={open}
          sx={{
            zIndex: 99,
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
          onClick={() => setOpen(false)}
        >
          <ManagePost posts={post} setOpen={setOpen} />
        </Backdrop>
      )}
      <FilterDivider />
      <FlexBetween className="p-[6px] w-full">
        <Libography
          fontSemiBold
          fontSofia
          text={listv}
          onClick={toList}
          className={`cursor-pointer ${
            list
              ? "border-b-[3px] border-b-[#f95f35] rounded-none text-[#f95f35] pb-[3px] relative"
              : "hover:bg-slate-200 rounded-[6px]"
          }  w-full flex justify-center items-center p-[5px]`}
        />
        <Libography
          fontSemiBold
          fontSofia
          text={gridv}
          onClick={toGrid}
          className={`cursor-pointer ${
            tag
              ? "border-b-[3px] border-b-[#f95f35] rounded-none text-[#f95f35] pb-[3px] relative"
              : "hover:bg-slate-200 rounded-[6px]"
          }  w-full flex justify-center items-center p-[5px]`}
        />
      </FlexBetween>
    </PostFilterContainer>
  );
};

export default UserPostFilter;
