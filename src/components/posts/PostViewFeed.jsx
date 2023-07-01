import React, { useEffect } from "react";
import {
  StyledViewHeader,
  StyledviewItem,
} from "../../styles/pages/posts/postview.styled";
import BackArrow from "../BackArrow";
import PostViewItem from "./PostViewItem";
import PostViewComments from "../comments/PostViewComments";
import useScrollDirection from "../../hooks/useScrollDirection";
import { HeaderOne } from "../../libs";

const PostViewFeed = ({ post, isLoading }) => {
  const scroll = useScrollDirection();
  return (
    <StyledviewItem>
      <StyledViewHeader scroll={scroll} className="shadow shadow-slate-400">
        <BackArrow />
        <HeaderOne fontSofia fontSemiBold text="Posts" />
      </StyledViewHeader>
      <PostViewItem posts={post} isLoading={isLoading} />
      <hr />
      <PostViewComments post={post} isLoading={isLoading} />
    </StyledviewItem>
  );
};

export default PostViewFeed;
