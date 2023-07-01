import React, { useEffect, useMemo, useState } from "react";
import {
  MangeItemEmptyImage,
  MangePostItemContainer,
  MangePostItemImage,
  MangePostUser,
  SelectPostContainer,
} from "../../styles/components/filter/managepost.styled";
import { Libography, TruncatedText } from "../../libs";
import { formatDistanceToNowStrict } from "date-fns";
import { IoMdCheckbox } from "react-icons/io";
import { IoCheckbox } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const MangePostItem = ({ post, selected, setSelected }) => {
  const createdAt = useMemo(() => {
    if (!post.createdAt) {
      return null;
    }
    return formatDistanceToNowStrict(new Date(post.createdAt));
  }, [post.createdAt]);
  const [icon, setIcon] = useState(IoCheckbox);
  const [click, setClick] = useState(false);

  console.log("you picked:", selected);

  useEffect(() => {
    if (click) {
      setIcon(IoCheckbox);
      setSelected(post._id);
    } else {
      setIcon(MdOutlineCheckBoxOutlineBlank);
      setSelected("");
    }
  }, [click, post]);
  function selectPost(post) {
    if (click) {
      setSelected(post._id);
    } else {
      setSelected("");
    }
  }

  return (
    <MangePostItemContainer className="shadow shadow-black rounded-t-[9px] rounded-b-[9px] relative">
      <SelectPostContainer className="absolute bg-neutral-400 p-[7px] right-0">
        <div
          className="text-[25px] cursor-pointer text-[#f95f35]"
          onClick={(e) => {
            setClick(!click);
            e.stopPropagation();
          }}
        >
          {icon}
        </div>
      </SelectPostContainer>
      {post.postImg ? (
        <MangePostItemImage
          src={post.postImg?.url}
          className="rounded-t-[9px]"
        />
      ) : (
        <MangeItemEmptyImage className="bg-slate-300 h-[160px] rounded-t-[9px]" />
      )}
      <div className="flex gap-2 p-[3px] items-center">
        <MangePostUser src={post.userProfile?.url} />
        <Libography
          fontSemiBold
          fontSofia
          text={createdAt}
          className="text-enutral-400 text-[12px]"
        />
      </div>
      <TruncatedText
        maxLength={70}
        fontPoppins
        text={post.body}
        className="p-[6px]"
      />
    </MangePostItemContainer>
  );
};

export default MangePostItem;
