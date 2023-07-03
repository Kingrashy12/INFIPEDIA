import React, { useEffect, useState } from "react";

import { PostItemContent } from "../../libs";
import { FetchPostComments, FetchPostLikes } from "../../helper/fetch";
import { useSelector } from "react-redux";

const PostItem = ({ post }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [plikes, setPlikes] = useState([]);
  const [pcomments, setPcomments] = useState([]);
  const user = useSelector((state) => state.credentails);
  const postId = post._id;

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const getPostlikes = async () => {
      const data = await FetchPostLikes(postId);
      setPlikes(data);
    };
    getPostlikes();
  }, [plikes]);

  useEffect(() => {
    const getPostcomments = async () => {
      const data = await FetchPostComments(postId);
      setPcomments(data);
    };
    getPostcomments();
  }, [pcomments]);
  const liked = plikes.find((id) => id === user?._id);
  return (
    <>
      <PostItemContent
        post={post}
        isLoading={isLoading}
        commentsdata={pcomments}
        likes={plikes}
        liked={liked}
      />
    </>
  );
};

export default PostItem;
