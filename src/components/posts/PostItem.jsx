import React, { useEffect, useState } from "react";

import { PostItemContent } from "../../libs";

const PostItem = ({ post }) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <PostItemContent post={post} isLoading={isLoading} />
    </>
  );
};

export default PostItem;
