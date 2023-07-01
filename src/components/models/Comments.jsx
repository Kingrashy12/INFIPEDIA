import React, { useEffect } from "react";
import { FlexBetween } from "../../styles/common/Global";
import { HeaderOne, Libography } from "../../libs";
import { IoClose } from "react-icons/io5";
import {
  CommentsWrapper,
  FixedComments,
  StyledPComments,
} from "../../styles/components/models/postcomments";
import CommentsForm from "../form/CommentsForm";
import CAvatar from "../user/CAvatar";
import { Male } from "../../asset";
import { BiLike } from "react-icons/bi";
import { useSelector } from "react-redux";
import { AiFillLike } from "react-icons/ai";

const Comments = ({ setOpen, post, cId }) => {
  const auth = useSelector((state) => state.credentails);
  return (
    <div className="fixed w-full h-full flex justify-center items-center">
      <StyledPComments className="flex flex-col w-1/3 h-1/2 relative bg-black p-0 overflow-auto rounded-lg">
        <FlexBetween className="fixed w-full border-b border-b-neutral-600 p-2">
          <HeaderOne
            fontSemiBold
            fontSofia
            text="Comments"
            className="text-white text-2xl"
          />
          <IoClose
            size={30}
            onClick={() => setOpen(false)}
            className="text-white p-1 bg-neutral-400 cursor-pointer rounded-full"
          />
        </FlexBetween>
        <CommentsWrapper>
          {post.comments?.map((c, index) => (
            <div className="flex flex-col gap-2 pb-5" key={index}>
              <div className="flex gap-2">
                <CAvatar src={c.userProfile.url || Male} />
                <Libography
                  fontSemiBold
                  fontSofia
                  text={c.name}
                  className="text-white text-base"
                />
              </div>
              <Libography
                fontSemiBold
                fontSofia
                text={c.text}
                className="text-white text-base"
              />
              <div className="flex gap-1">
                {auth?._id === c.userId ? (
                  <AiFillLike
                    size={20}
                    className="text-red-600 cursor-pointer"
                  />
                ) : (
                  <BiLike size={20} className="text-red-600 cursor-pointer" />
                )}
                <Libography
                  fontSemiBold
                  fontSofia
                  text={c.likes?.length}
                  className="text-red-600"
                />
              </div>
            </div>
          ))}
        </CommentsWrapper>
        <FixedComments className="fixed w-1/3 bottom-48 p-5">
          <CommentsForm post={post} currentPostId={post.id} />
        </FixedComments>
      </StyledPComments>
    </div>
  );
};

export default Comments;
