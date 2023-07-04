import { UserPostItemContainer } from "../../styles/components/post/userpost.styled";
import React, { useEffect, useMemo, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FlexBetween } from "../../styles/common/Global";
import { Image, Libography, PostImage, Span, TruncatedText } from "../../libs";
import { CgComment } from "react-icons/cg";
import {
  MdBookmarks,
  MdIosShare,
  MdOutlineBookmarks,
  MdVerified,
} from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import DotDrop from "../../components/layout/tag/DotDrop";
import { Backdrop } from "@mui/material";
import Comments from "../../components/models/Comments";
import { formatDistanceToNowStrict } from "date-fns";
import axios from "axios";
import { BASE_URL } from "../../hooks/api";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ShareTag from "../../components/layout/tag/ShareTag";
import { savePost, unSavePost } from "../../store/PostSlice";
import { useNavigate } from "react-router-dom";

const UserPostItemContent = ({ post, isLoading }) => {
  const auth = useSelector((state) => state.credentails);
  const [liked, setLiked] = useState(false);
  const [tag, setTag] = useState(false);
  const [open, setOpen] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const dispatch = useDispatch();
  const check = useSelector((state) => state.posts.savedPosts);
  const ava = check.find((item) => item._id === post._id);
  const navigate = useNavigate();
  const [max, setMax] = useState(70);
  const [less, setLess] = useState(false);

  function show() {
    setMax(1000);
    setLess(true);
  }
  function hide() {
    setMax(70);
    setLess(false);
  }

  const s = (
    <Libography text="See more" onClick={show} className="font-semibold" />
  );
  const h = (
    <Libography text="See less" onClick={hide} className="font-semibold" />
  );

  function savepost() {
    if (!auth?._id) {
      navigate("/auth/login");
    } else {
      dispatch(savePost(post));
    }
  }
  function unsavePost(ava) {
    if (!auth?._id) {
      navigate("/auth/login");
    } else {
      dispatch(unSavePost(ava));
    }
  }
  function comments() {
    if (!auth?._id) {
      navigate("/auth/login");
    } else {
      setOpen(true);
    }
  }

  async function onLike() {
    if (!auth?._id) {
      navigate("/auth/login");
    } else {
      try {
        await axios.patch(`${BASE_URL}/posts/like`, {
          userId: auth?._id,
          postId: post._id,
        });
        toast.success("Success", { position: "top-center" });
      } catch (error) {
        console.log({ error: error.message });
        toast.error({ error: error.message }, { position: "top-center" });
      }
    }
  }

  useEffect(() => {
    if (post.likes.includes(auth?._id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [post]);
  const createdAt = useMemo(() => {
    if (!post?.createdAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(post.createdAt));
  }, [post?.createdAt]);
  return (
    <UserPostItemContainer className="shadow shadow-black z-0">
      <div className="flex flex-col p-3">
        <FlexBetween>
          <div className="flex gap-2">
            <PostImage user={post} isLoading={isLoading} className="w-full" />
            <div className="flex flex-col text-justify">
              <Libography
                isLoading={isLoading}
                fontBold
                className="text-lg hover:underline cursor-pointer"
                fontSofia
                loadingWidth="100px"
                loadingHeight="30px"
                text={post.name}
                onClick={() => navigate(`/${post.username}`)}
              />
              <Libography
                isLoading={isLoading}
                fontSemiBold
                fontSofia
                loadingWidth="100px"
                loadingHeight="25px"
                className="text-neutral-500 text-xs flex -translate-y-1"
                text={createdAt}
              />
            </div>
            {post?.verified && (
              <MdVerified color="#f95f35" className="translate-y-[6px]" />
            )}
          </div>
          <HiDotsHorizontal
            title="More"
            size={27}
            className="cursor-pointer mr-2 mt-2 hover:bg-slate-300 p-1 rounded-full"
            onClick={() => setTag(!tag)}
          />
          {tag && <DotDrop post={post} setTag={setTag} />}
        </FlexBetween>
        <TruncatedText
          isLoading={isLoading}
          loadingWidth="100"
          loadingHeight="80px"
          className="flex text-sm"
          text={post.body}
          maxLength={max}
          underText={less ? h : s}
          fontPoppins
        />
      </div>
      {post?.postImg && (
        <Image
          src={post.postImg.url}
          className="h-80 w-full max-[700px]:h-10 relative"
          alt="Post Image"
          isLoading={isLoading}
          variant="retangular"
          loadingWidth="100"
          loadingHeight="100px"
        />
      )}
      <div className="p-5">
        <hr />
        <FlexBetween className="mt-2">
          <div className="flex gap-1">
            {liked ? (
              <AiFillHeart
                size={25}
                className="cursor-pointer text-red-500"
                onClick={() => {
                  onLike();
                }}
              />
            ) : (
              <AiOutlineHeart
                size={25}
                className="cursor-pointer text-red-500"
                onClick={() => {
                  onLike();
                }}
              />
            )}
            <span className="text-red-500">{post.likes?.length}</span>
          </div>
          <div
            className="flex gap-1 items-center cursor-pointer"
            onClick={comments}
          >
            <CgComment size={23} className="text-blue-500" />
            <span className="text-blue-500">{post.comments?.length}</span>
          </div>
          <div
            className="flex gap-1 items-center cursor-pointer"
            onClick={() => setOpenShare(!openShare)}
          >
            <MdIosShare size={23} color="#f95f35" className="" />
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
          {openShare && <ShareTag post={post} />}
        </FlexBetween>
        {open && (
          <Backdrop open={open} sx={{ zIndex: 99 }}>
            <Comments setOpen={setOpen} post={post} cId={post.id} />
          </Backdrop>
        )}
      </div>
    </UserPostItemContainer>
  );
};

export default UserPostItemContent;
