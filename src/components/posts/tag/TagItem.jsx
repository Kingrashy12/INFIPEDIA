import React, { useEffect, useState } from "react";
import { TagPostItemContent } from "../../../libs";

const TagItem = ({ post }) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return <TagPostItemContent post={post} isLoading={isLoading} />;
};

export default TagItem;
