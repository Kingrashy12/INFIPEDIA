import React, { useEffect, useState } from "react";
import { StyledFollowingFeed } from "../../../styles/components/post/following.styled";
import { useDispatch, useSelector } from "react-redux";
import { FetchFollowingPost } from "../../../store/PostSlice";
import { Loader } from "../../../libs";
import Error from "../Error";
import FollowingPostItem from "./FollowingPostItem";
import Empty from "../Empty";

const FollowingPostFeed = ({ currentUserId }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.posts);
  const isLoading = data.followingPostStatus === "pending";
  const error = data.followingPostErro;
  const empty = data?.followingPost.length === 0;

  // useEffect(() => {
  //   dispatch(FetchFollowingPost(currentUserId));
  // }, [currentUserId]);

  return (
    <StyledFollowingFeed>
      {isLoading ? (
        <div className="flex justify-center items-center flex-shrink">
          <Loader isLoading={isLoading} />
        </div>
      ) : error ? (
        <Error />
      ) : empty ? (
        <Empty
          name="You have no following Post"
          extra="Follow a user's to fill your bucket"
          emptyText="Your bucket is empty"
        />
      ) : (
        data?.followingPost.map((post, index) => (
          <FollowingPostItem key={index} post={post} />
        ))
      )}
    </StyledFollowingFeed>
  );
};

export default FollowingPostFeed;
