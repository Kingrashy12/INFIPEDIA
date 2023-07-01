import React, { useCallback, useEffect, useState } from "react";
import PostItem from "./PostItem";
import PostForm from "../form/PostForm";
import axios from "axios";
import { BASE_URL } from "../../hooks/api";
import {
  PostItemWrapper,
  StyledPostWrapper,
} from "../../styles/components/Post.styled";
import { Loader } from "../../libs";
import Error from "./Error";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../store/PostSlice";

const PostFeed = () => {
  const data = useSelector((state) => state.posts);
  const isLoading = data.fetchStatus === "pending";
  const error = data.fetchStatus === "rejected";
  const dispatch = useDispatch();

  return (
    <StyledPostWrapper className="h-auto gap-5 p-1 mt-32 flex flex-col relative">
      <PostForm />
      {/* <ShareForm /> */}
      <PostItemWrapper className="relative items-center justify-center">
        {isLoading ? (
          <div className="flex justify-center items-center flex-shrink">
            <Loader isLoading={isLoading} />
          </div>
        ) : error ? (
          <Error />
        ) : (
          data.items.map((post, index) => (
            <PostItem
              post={post}
              index={index}
              isLoading={isLoading}
              key={index}
            />
          ))
        )}
      </PostItemWrapper>
    </StyledPostWrapper>
  );
};

export default PostFeed;
