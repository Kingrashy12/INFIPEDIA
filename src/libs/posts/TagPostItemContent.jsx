import React, { useMemo, useState } from "react";
import { TaggedPostContainer } from "../../styles/libs/posts/tagged.styled";
import { FlexBetween } from "../../styles/common/Global";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import Libography from "../Texts/Libography";
import PostImage from "../components/PostImage";
import { useNavigate } from "react-router-dom";
import { formatDistanceToNowStrict } from "date-fns";
import TaggedItem from "./TaggedItem";
import { StyledTaggedItemCenter } from "../../styles/components/post/taged.styled";
import DotDrop from "../../components/layout/tag/DotDrop";

const TagPostItemContent = ({ post, isLoading }) => {
  const createdAt = useMemo(() => {
    if (!post?.createdAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(post?.createdAt));
  }, [post?.createdAt]);
  const navigate = useNavigate();

  return (
    <TaggedPostContainer className="shadow shadow-black">
      <div className="flex flex-col p-3">
        <FlexBetween>
          <div className="flex gap-2">
            <PostImage user={post} isLoading={isLoading} className="w-full" />
            <div className="flex flex-col text-justify">
              <Libography
                isLoading={isLoading}
                fontBold
                className="text-lg hover:underline cursor-pointer"
                fontSofia
                loadingWidth="100px"
                loadingHeight="30px"
                text={post.name}
                onClick={() => navigate(`/${post.username}`)}
              />
              <Libography
                isLoading={isLoading}
                fontSemiBold
                fontSofia
                loadingWidth="100px"
                loadingHeight="25px"
                className="text-neutral-500 text-xs flex -translate-y-1"
                text={createdAt}
              />
            </div>
            {post?.verified && (
              <MdVerified color="#f95f35" className="translate-y-[6px]" />
            )}
          </div>
          <HiDotsHorizontal
            title="More"
            size={27}
            className="cursor-pointer mr-2 mt-2 hover:bg-slate-300 p-1 rounded-full"
            onClick={() => {}}
          />
        </FlexBetween>
      </div>

      <StyledTaggedItemCenter>
        <TaggedItem post={post} isLoading={isLoading} />
      </StyledTaggedItemCenter>
    </TaggedPostContainer>
  );
};

export default TagPostItemContent;
