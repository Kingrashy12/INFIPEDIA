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
} from "../../libs";
import { CgComment } from "react-icons/cg";
import {
  MdBookmarks,
  MdIosShare,
  MdOutlineBookmarks,
  MdVerified,
} from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import DotDrop from "../../components/layout/tag/DotDrop";
import { Backdrop, Skeleton } from "@mui/material";
import Comments from "../../components/models/Comments";
import { formatDistanceToNowStrict } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import ShareTag from "../../components/layout/tag/ShareTag";
import { likePost, savePost, unSavePost } from "../../store/PostSlice";
import { useNavigate } from "react-router-dom";
import { StyledPostItemContainer } from "../../styles/components/Post.styled";

const PostItemContent = ({ post, likes, commentsdata, liked }) => {
  const auth = useSelector((state) => state.credentails);
  const [tag, setTag] = useState(false);
  const [open, setOpen] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const dispatch = useDispatch();
  const check = useSelector((state) => state.posts.savedPosts);
  const ava = check.find((item) => item._id === post._id);
  const [showFullImage, setShowFullImage] = useState(false);
  const [showFullProfile, setShowFullProfile] = useState(false);
  const navigate = useNavigate();
  const [data] = useState({
    auth: auth?._id,
    post: post._id,
  });

  const toggleImage = (event) => {
    event.stopPropagation();
    setShowFullImage(!showFullImage);
  };
  const togglefull = (event) => {
    event.stopPropagation();
    setShowFullProfile(!showFullProfile);
  };

  function savepost(event) {
    event.stopPropagation();
    if (!auth?._id) {
      navigate("/auth/login");
    } else {
      dispatch(savePost(post));
    }
  }
  function unsavePost(ava, event) {
    event.stopPropagation();
    if (!auth?._id) {
      navigate("/auth/login");
    } else {
      dispatch(unSavePost(ava));
    }
  }
  function comments(event) {
    event.stopPropagation();
    if (!auth?._id) {
      navigate("/auth/login");
    } else {
      setOpen(true);
    }
  }

  async function onLike(event) {
    event.stopPropagation();
    if (!auth?._id) {
      navigate("/auth/login");
    } else {
      dispatch(likePost(data));
    }
  }

  const createdAt = useMemo(() => {
    if (!post?.createdAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(post.createdAt));
  }, [post?.createdAt]);

  const [max, setMax] = useState(70);
  const [less, setLess] = useState(false);

  function show(event) {
    event.stopPropagation();
    setMax(1000);
    setLess(true);
  }
  function hide(event) {
    event.stopPropagation();
    setMax(70);
    setLess(false);
  }

  const s = (
    <Libography text="See more" onClick={show} className="font-semibold" />
  );
  const h = (
    <Libography text="See less" onClick={hide} className="font-semibold" />
  );
  function goToUser(event) {
    event.stopPropagation();
    navigate(`/${post.username}`);
  }

  return (
    <StyledPostItemContainer className="shadow shadow-black">
      <div className="flex flex-col p-3">
        <FlexBetween>
          <div className="flex gap-2">
            {showFullProfile ? (
              <div
                className="full-image-overlay isprofile"
                onClick={togglefull}
              >
                <img
                  src={post?.userProfile?.url}
                  alt="Full Image"
                  className="full-image isp rounded-full"
                />
              </div>
            ) : (
              <PostImage
                user={post}
                className="cursor-pointer"
                onClick={togglefull}
              />
            )}
            <div className="flex flex-col text-justify">
              <Libography
                fontBold
                className="text-lg hover:underline cursor-pointer"
                fontSofia
                loadingWidth="100px"
                loadingHeight="30px"
                text={post.name}
                onClick={goToUser}
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
          className="flex text-sm cursor-pointer"
          text={post.body}
          maxLength={max}
          underText={less ? h : s}
          fontPoppins
          onClick={() => navigate(`/${post?.username}/status/${post?._id}`)}
        />
      </div>
      {post?.postImg && (
        <>
          {showFullImage ? (
            <div className="full-image-overlay" onClick={toggleImage}>
              <img
                src={post?.postImg.url}
                alt="Full Image"
                className="full-image"
              />
            </div>
          ) : (
            <Image
              src={post.postImg.url}
              className="h-80 pimage relative cursor-pointer"
              alt="Post Image"
              variant="retangular"
              loadingWidth="100"
              loadingHeight="100px"
              onClick={toggleImage}
            />
          )}
        </>
      )}
      <div className="p-5">
        <hr />
        <FlexBetween className="mt-2">
          <div className="flex gap-1">
            {liked ? (
              <AiFillHeart
                size={30}
                className="cursor-pointer text-red-500 hover:bg-red-300 p-1 rounded-full"
                onClick={onLike}
              />
            ) : (
              <AiOutlineHeart
                size={30}
                className="cursor-pointer text-red-500 hover:bg-red-300 p-1 rounded-full"
                onClick={onLike}
              />
            )}
            <span className="text-red-500">{likes?.length}</span>
          </div>
          <div
            className="flex gap-1 items-center cursor-pointer"
            onClick={comments}
          >
            <CgComment size={23} className="text-blue-500" />
            <span className="text-blue-500">{commentsdata?.length}</span>
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

export default PostItemContent;
