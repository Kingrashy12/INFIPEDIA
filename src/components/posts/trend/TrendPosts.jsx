import React from "react";
import { TrendItemWrapper } from "../../../styles/components/trend/styledtrend";
import { Loader } from "../../../libs";
import Error from "../Error";
import PostItem from "../PostItem";

const TrendPosts = ({ posts, isLoading, error }) => {
  return (
    <TrendItemWrapper>
      {isLoading ? (
        <div className="flex justify-center items-center flex-shrink">
          <Loader isLoading={isLoading} />
        </div>
      ) : error ? (
        <Error />
      ) : (
        posts?.map((post, index) => (
          <PostItem
            post={post}
            index={index}
            isLoading={isLoading}
            key={index}
          />
        ))
      )}
    </TrendItemWrapper>
  );
};

export default TrendPosts;
