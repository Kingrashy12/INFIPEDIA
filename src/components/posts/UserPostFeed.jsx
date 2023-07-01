import React, { useState } from "react";
import { StyledUserPostFeedContainer } from "../../styles/components/post/userpost.styled";
import UserPostFilter from "../filter/UserPostFilter";
import { useSelector } from "react-redux";
import UserPostItem from "./UserPostItem";
import Empty from "./Empty";
import UserPostContainer from "./UserPostContainer";
import UserTaggedPost from "./UserTaggedPost";

const UserPostFeed = () => {
  const [list, setList] = useState(true);
  const [tag, setTag] = useState(false);
  const posts = useSelector((state) => state.posts.userPosts);
  const auth = useSelector((state) => state.credentails);
  const userId = posts.find((post) => post.userId === auth?._id);
  const empty = posts.length === 0;
  return (
    <StyledUserPostFeedContainer>
      {empty ? (
        ""
      ) : (
        <UserPostFilter
          list={list}
          setList={setList}
          setTag={setTag}
          tag={tag}
          userId={userId}
          post={posts}
        />
      )}
      {list && <UserPostContainer empty={empty} posts={posts} />}
      {tag && <UserTaggedPost />}
    </StyledUserPostFeedContainer>
  );
};

export default UserPostFeed;
