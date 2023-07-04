import React, { useEffect, useState } from "react";
import { FollowingPostItemContent } from "../../../libs";
import { useSelector } from "react-redux";
import { FetchPostComments, FetchPostLikes } from "../../../helper/fetch";

const FollowingPostItem = ({ post }) => {
  const [plikes, setPlikes] = useState([]);
  const [pcomments, setPcomments] = useState([]);
  const user = useSelector((state) => state.credentails);
  const postId = post._id;
  const liked = plikes.find((id) => id === user?._id);

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

  return (
    <FollowingPostItemContent
      post={post}
      liked={liked}
      likes={plikes}
      commentsdata={pcomments}
    />
  );
};

export default FollowingPostItem;
