import React from "react";
import { StyledTagPostWrapper } from "../../../styles/components/post/taged.styled";
import { useSelector } from "react-redux";
import { Loader } from "../../../libs";
import Error from "../Error";
import TagItem from "./TagItem";

const TagFeed = () => {
  const data = useSelector((state) => state.posts);
  const isLoading = data.fetchTagStatus === "pending";
  const error = data.fetchTagError;

  return (
    <StyledTagPostWrapper>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      ) : error ? (
        <Error />
      ) : (
        data.tagPosts.map((post, index) => <TagItem post={post} key={index} />)
      )}
    </StyledTagPostWrapper>
  );
};

export default TagFeed;
