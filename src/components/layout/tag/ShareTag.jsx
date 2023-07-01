import React, { useState } from "react";
import {
  StyledDrop,
  StyledDropItem,
} from "../../../styles/layout/tag/dotdrop.styled";
import { BiCommentDetail, BiLink } from "react-icons/bi";
import { Libography } from "../../../libs";
import { toast } from "react-toastify";
import { MdIosShare } from "react-icons/md";

const ShareTag = ({ post }) => {
  const title = post.body;
  const url = window.location.href;

  function share() {
    navigator.share({
      title: `${title}`,
      url: `${url}post/${post._id}`,
    });
  }

  function copy() {
    navigator.clipboard.writeText(`${url}post/${post._id}`);
    toast.success("Post link copied to clipboard", { position: "top-center" });
  }
  return (
    <StyledDrop className="shadow shadow-slate-500 z-50">
      <StyledDropItem onClick={copy} className="hover:bg-slate-200">
        <BiLink size={18} />
        <Libography fontSemiBold fontSofia text="Copy post link" />
      </StyledDropItem>
      {/* <hr /> */}
      <StyledDropItem onClick={share} className="hover:bg-slate-200">
        <MdIosShare size={18} />
        <Libography fontSemiBold fontSofia text="Share Post vai..." />
      </StyledDropItem>
      <StyledDropItem onClick={share} className="hover:bg-slate-200">
        <BiCommentDetail size={18} />
        <Libography fontSemiBold fontSofia text={`Message ${post.name}`} />
      </StyledDropItem>
      {/* <hr /> */}
    </StyledDrop>
  );
};

export default ShareTag;
