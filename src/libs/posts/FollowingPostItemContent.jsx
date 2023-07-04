import React, { useEffect, useMemo, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FlexBetween } from "../../styles/common/Global";
import {
  DateFormatter,
  Image,
  Libography,
  PostImage,
  Span,
  TruncatedText,
} from "..";
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
import { useDispatch, useSelector } from "react-redux";
import ShareTag from "../../components/layout/tag/ShareTag";
import { likePost, savePost, unSavePost } from "../../store/PostSlice";
import { useNavigate } from "react-router-dom";
import { StyledPostItemContainer } from "../../styles/components/Post.styled";

const FollowingPostItemContent = ({ post, liked, likes, commentsdata }) => {
  const auth = useSelector((state) => state.credentails);
  const [tag, setTag] = useState(false);
  const [open, setOpen] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const dispatch = useDispatch();
  const check = useSelector((state) => state.posts.savedPosts);
  const ava = check.find((item) => item._id === post._id);
  const navigate = useNavigate();
  const [data] = useState({
    auth: auth?._id,
    post: post._id,
  });

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
      dispatch(likePost(data));
    }
  }

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

  const l = (
    <div className="flex items-center gap-1 text-red-500">
      <Libography text={likes.length} />
      <Libography text="likes" />
    </div>
  );
  const c = (
    <div className="flex items-center gap-1 text-blue-500">
      <Libography text={commentsdata.length} />
      <Libography text="comments" />
    </div>
  );

  return (
    <StyledPostItemContainer className="shadow shadow-black">
      <div className="flex flex-col p-3">
        <FlexBetween>
          <div className="flex gap-2">
            <PostImage user={post} />
            <div className="flex flex-col text-justify">
              <Libography
                fontBold
                className="text-lg hover:underline cursor-pointer"
                fontSofia
                loadingWidth="100px"
                loadingHeight="30px"
                text={post.name}
                onClick={() => navigate(`/${post.username}`)}
              />
              <DateFormatter item={post} />
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
          className="h-80 max-[700px]:h-10 relative"
          alt="Post Image"
          variant="retangular"
          loadingWidth="100"
          loadingHeight="100px"
        />
      )}
      <div className="p-5">
        <FlexBetween>
          <Libography fontSofia text={l} className="text-sm" />
          <Libography fontSofia text={c} className="text-sm" />
        </FlexBetween>
        <hr />
        <FlexBetween className="mt-2">
          <div className="flex gap-1">
            {liked ? (
              <AiFillHeart
                size={25}
                className="cursor-pointer text-red-500 hover:bg-red-300 p-1 rounded-full"
                onClick={() => {
                  onLike();
                }}
              />
            ) : (
              <AiOutlineHeart
                size={25}
                className="cursor-pointer text-red-500 hover:bg-red-300 p-1 rounded-full"
                onClick={() => {
                  onLike();
                }}
              />
            )}
          </div>
          <div
            className="flex gap-1 items-center cursor-pointer"
            onClick={comments}
          >
            <CgComment size={23} className="text-blue-500" />
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
    </StyledPostItemContainer>
  );
};

export default FollowingPostItemContent;
