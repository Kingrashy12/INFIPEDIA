import React, { useState } from "react";
import { StyledViewActionStyled } from "../../../styles/components/post/actions/viewaction.styled";
import { useDispatch, useSelector } from "react-redux";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { likePost, savePost, unSavePost } from "../../../store/PostSlice";
import { CgComment } from "react-icons/cg";
import { MdBookmarks, MdIosShare, MdOutlineBookmarks } from "react-icons/md";
import { Skeleton } from "@mui/material";

const ViewActionBtn = ({ post, isLoading }) => {
  const user = useSelector((state) => state.credentails);
  const check = useSelector((state) => state.posts.savedPosts);
  const ava = check.find((item) => item._id === post?._id);
  const liked = post?.likes?.includes(user?._id);
  const [openShare, setOpenShare] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data] = useState({
    auth: user?._id,
    post: post?._id,
  });

  function savepost() {
    if (!user?._id) {
      navigate("/auth/login");
    } else {
      dispatch(savePost(post));
    }
  }
  function unsavePost(ava) {
    if (!user?._id) {
      navigate("/auth/login");
    } else {
      dispatch(unSavePost(ava));
    }
  }

  async function onLike() {
    if (!user?._id) {
      navigate("/auth/login");
    } else {
      dispatch(likePost(data));
    }
  }
  function shareToTwitter(tweetText, postUrl) {
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}&url=${encodeURIComponent(postUrl)}`;
    window.open(twitterShareUrl, "_blank");
  }

  const postUrl = window.location.href;
  const tweetText = `${post?.body}`;

  return (
    <StyledViewActionStyled>
      {isLoading ? (
        <Skeleton variant="text" width={`100%`} height={`30px`} />
      ) : (
        <>
          <div className="flex items-center">
            {liked ? (
              <AiFillHeart
                size={30}
                className="cursor-pointer text-red-500 hover:bg-red-300 p-1 rounded-full"
                onClick={() => {
                  onLike();
                }}
              />
            ) : (
              <AiOutlineHeart
                size={30}
                className="cursor-pointer text-red-500 hover:bg-red-300 p-1 rounded-full"
                onClick={() => {
                  onLike();
                }}
              />
            )}
            <span className="text-red-500 text-[14px]">
              {post?.likes?.length}
            </span>
          </div>
          <div
            className="flex items-center cursor-pointer"
            // onClick={comments}
          >
            <CgComment
              size={28}
              className="text-blue-500 hover:bg-blue-300 p-1 hover:rounded-full"
            />
            <span className="text-blue-500 text-[14px]">
              {post?.comments?.length}
            </span>
          </div>
          <div
            className="flex gap-1 items-center cursor-pointer"
            onClick={() => setOpenShare(!openShare)}
          >
            <MdIosShare
              size={23}
              color="#f95f35"
              className=""
              onClick={() => shareToTwitter(tweetText, postUrl)}
            />
          </div>
          <div className="flex gap-1 items-center cursor-pointer">
            {ava ? (
              <MdBookmarks
                size={23}
                className="text-green-500"
                onClick={() => unsavePost(ava)}
              />
            ) : (
              <MdOutlineBookmarks
                size={23}
                className="text-green-500"
                onClick={savepost}
              />
            )}
          </div>
        </>
      )}
    </StyledViewActionStyled>
  );
};

export default ViewActionBtn;
