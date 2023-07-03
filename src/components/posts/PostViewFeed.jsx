import React, { useEffect, useState } from "react";
import {
  StyledViewHeader,
  StyledviewItem,
} from "../../styles/pages/posts/postview.styled";
import BackArrow from "../BackArrow";
import PostViewItem from "./PostViewItem";
import PostViewComments from "../comments/PostViewComments";
import useScrollDirection from "../../hooks/useScrollDirection";
import { HeaderOne } from "../../libs";
import { useSelector } from "react-redux";
import { FetchPostComments, FetchPostLikes } from "../../helper/fetch";

const PostViewFeed = ({ post, isLoading }) => {
  const postId = post?._id;
  const scroll = useScrollDirection();
  const user = useSelector((state) => state.credentails);
  const [pcomments, setPcomments] = useState([]);
  const [plikes, setPlikes] = useState([]);
  const liked = plikes.find((id) => id === user?._id);

  useEffect(() => {
    const getPostLikes = async () => {
      const data = await FetchPostLikes(postId);
      setPlikes(data);
    };
    getPostLikes();
  }, [plikes]);

  useEffect(() => {
    const getPostComments = async () => {
      const data = await FetchPostComments(postId);
      setPcomments(data);
    };
    getPostComments();
  }, [pcomments]);
  return (
    <StyledviewItem>
      <StyledViewHeader scroll={scroll} className="shadow shadow-slate-400">
        <BackArrow />
        <HeaderOne fontSofia fontSemiBold text="Posts" />
      </StyledViewHeader>
      <PostViewItem
        posts={post}
        isLoading={isLoading}
        likes={plikes}
        comments={pcomments}
        liked={liked}
      />
      <hr />
      <PostViewComments
        post={post}
        isLoading={isLoading}
        comments={pcomments}
      />
    </StyledviewItem>
  );
};

export default PostViewFeed;
